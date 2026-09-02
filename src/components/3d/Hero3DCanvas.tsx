"use client";

import React, { useEffect, useRef } from 'react';

interface Node3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

export default function Hero3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse interactive coordinates
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate 3D Nodes Matrix
    const nodeCount = Math.min(Math.floor(width / 18), 70);
    const nodes: Node3D[] = [];
    const colors = ['#FF9800', '#FFB74D', '#06245A', '#38BDF8', '#F59E0B'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: Math.random() * 800 + 100,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        vz: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }

    const focalLength = 400;

    const render = () => {
      // Smooth camera interpolation towards mouse
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const offsetX = (mouseX - width / 2) * 0.3;
      const offsetY = (mouseY - height / 2) * 0.3;

      ctx.clearRect(0, 0, width, height);

      // Radial background ambient glow
      const ambientGlow = ctx.createRadialGradient(
        width / 2 + offsetX * 0.5,
        height / 2 + offsetY * 0.5,
        50,
        width / 2,
        height / 2,
        width * 0.6
      );
      ambientGlow.addColorStop(0, 'rgba(6, 36, 90, 0.35)');
      ambientGlow.addColorStop(0.5, 'rgba(255, 152, 0, 0.08)');
      ambientGlow.addColorStop(1, 'rgba(2, 11, 25, 0)');
      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // Projected 2D points storage
      const projectedNodes: { px: number; py: number; scale: number; node: Node3D }[] = [];

      // Update and project 3D nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;
        node.pulse += node.pulseSpeed;

        // Wrap boundaries in 3D box
        if (node.x < -width) node.x = width;
        if (node.x > width) node.x = -width;
        if (node.y < -height) node.y = height;
        if (node.y > height) node.y = -height;
        if (node.z < 50) node.z = 900;
        if (node.z > 900) node.z = 50;

        // Perspective 3D -> 2D projection formula
        const scale = focalLength / node.z;
        const px = (node.x + offsetX) * scale + width / 2;
        const py = (node.y + offsetY) * scale + height / 2;

        projectedNodes.push({ px, py, scale, node });
      }

      // Draw 3D Connection Vectors
      const maxDistance = 140;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];

          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * Math.min(p1.scale, p2.scale) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);

            const lineGlow = ctx.createLinearGradient(p1.px, p1.py, p2.px, p2.py);
            lineGlow.addColorStop(0, `rgba(255, 152, 0, ${alpha})`);
            lineGlow.addColorStop(1, `rgba(6, 36, 90, ${alpha * 0.6})`);
            ctx.strokeStyle = lineGlow;
            ctx.lineWidth = Math.max(0.5, 1.2 * Math.min(p1.scale, p2.scale));
            ctx.stroke();
          }
        }
      }

      // Draw Projected 3D Nodes with Glow Orbs
      for (let i = 0; i < projectedNodes.length; i++) {
        const { px, py, scale, node } = projectedNodes[i];
        const pulsedRadius = node.radius * scale * (1 + 0.25 * Math.sin(node.pulse));

        // Node Outer Glow Aura
        ctx.beginPath();
        ctx.arc(px, py, pulsedRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = node.color === '#FF9800' ? 'rgba(255, 152, 0, 0.15)' : 'rgba(56, 189, 248, 0.12)';
        ctx.fill();

        // Node Solid Core
        ctx.beginPath();
        ctx.arc(px, py, pulsedRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = scale * 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
