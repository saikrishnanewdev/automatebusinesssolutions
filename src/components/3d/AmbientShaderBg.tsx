"use client";

import React, { useEffect, useRef } from 'react';

export default function AmbientShaderBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.015;

      const cols = 35;
      const rows = 18;
      const xSpacing = width / cols;
      const ySpacing = height / rows;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * xSpacing;
          const y = j * ySpacing;

          // 3D Wave formula
          const distFromCenter = Math.sqrt(Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2));
          const zWave = Math.sin(distFromCenter * 0.01 - step) * Math.cos(x * 0.005 + step * 0.5) * 8;

          const radius = Math.max(1, 2.2 + zWave * 0.15);

          ctx.beginPath();
          ctx.arc(x, y + zWave, radius, 0, Math.PI * 2);

          if (i % 3 === 0 && j % 2 === 0) {
            ctx.fillStyle = `rgba(255, 152, 0, ${0.2 + (zWave + 8) * 0.03})`;
          } else {
            ctx.fillStyle = `rgba(6, 36, 90, ${0.35 + (zWave + 8) * 0.02})`;
          }

          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0"
    />
  );
}
