"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Cpu, Zap, RefreshCw } from 'lucide-react';

interface WorkflowEngine3DProps {
  activePreset: {
    id: string;
    title: string;
    input: string;
    engineAction: string;
    result: string;
    tag: string;
  };
}

export default function WorkflowEngine3D({ activePreset }: WorkflowEngine3DProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    const height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    let angle = 0;
    const particles: { t: number; speed: number; color: string; size: number }[] = [];

    for (let i = 0; i < 24; i++) {
      particles.push({
        t: Math.random(),
        speed: 0.005 + Math.random() * 0.008,
        color: i % 2 === 0 ? '#FF9800' : '#38BDF8',
        size: 3 + Math.random() * 2
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.012;
      setRotationAngle(angle);

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw Orbiting Outer Glowing Rings in 3D Perspective
      const rx = width * 0.38;
      const ry = height * 0.22;

      // Outer 3D Ring 1
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(0.25);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 152, 0, 0.25)';
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 12]);
      ctx.lineDashOffset = -angle * 40;
      ctx.stroke();
      ctx.restore();

      // Outer 3D Ring 2 (Cross Tilt)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-0.35);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx * 0.85, ry * 0.85, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 36, 90, 0.6)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 8]);
      ctx.lineDashOffset = angle * 30;
      ctx.stroke();
      ctx.restore();

      // Draw Traveling Data Particles on Circuit Paths
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.t = (p.t + p.speed) % 1;

        // Path from Left (Input) -> Center Engine -> Right (Output)
        let px = 0;
        let py = 0;

        if (p.t < 0.5) {
          // Inbound trajectory (Left to Center)
          const normT = p.t * 2;
          px = (1 - normT) * (centerX - rx) + normT * centerX;
          py = centerY + Math.sin(normT * Math.PI) * -30;
        } else {
          // Outbound trajectory (Center to Right)
          const normT = (p.t - 0.5) * 2;
          px = (1 - normT) * centerX + normT * (centerX + rx);
          py = centerY + Math.sin(normT * Math.PI) * 30;
        }

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Center AI Engine Core Orb Glow
      const orbRadius = 45 + Math.sin(angle * 2) * 4;
      const coreGlow = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, orbRadius * 2);
      coreGlow.addColorStop(0, '#FFB74D');
      coreGlow.addColorStop(0.4, '#FF9800');
      coreGlow.addColorStop(0.7, '#06245A');
      coreGlow.addColorStop(1, 'rgba(2, 11, 25, 0)');

      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = coreGlow;
      ctx.fill();

      // Core Solid Sphere
      ctx.beginPath();
      ctx.arc(centerX, centerY, orbRadius * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = '#06245A';
      ctx.strokeStyle = '#FF9800';
      ctx.lineWidth = 3;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [activePreset]);

  return (
    <div className="relative w-full h-[400px] sm:h-[450px] flex items-center justify-center bg-slate-950/70 backdrop-blur-xl rounded-3xl border border-amber-500/30 p-6 shadow-2xl overflow-hidden group">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06245A]/40 via-amber-500/5 to-transparent pointer-events-none" />

      {/* 3D Canvas Visualizer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Interactive Floating 3D Node Labels */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-auto">

        {/* Header Tag */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06245A]/90 border border-amber-500/40 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider shadow-md">
            <Cpu className="w-3.5 h-3.5 animate-pulse text-amber-400" /> 3D Workflow Engine Active
          </div>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
            <RefreshCw className="w-3 h-3 animate-spin text-amber-400" /> {activePreset.tag}
          </span>
        </div>

        {/* 3D Engine Nodes Layout */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 items-center my-auto">
          {/* Left Node: Input */}
          <div className="bg-slate-900/90 border border-amber-500/30 backdrop-blur-md p-3.5 rounded-2xl shadow-xl hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" /> INPUT
            </div>
            <div className="text-xs sm:text-sm font-bold text-white leading-tight">
              {activePreset.input}
            </div>
          </div>

          {/* Center Core Node: AI Processing */}
          <div className="flex flex-col items-center justify-center text-center p-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30 border-2 border-amber-300 animate-pulse">
              <Sparkles className="w-7 h-7 text-slate-950" />
            </div>
            <span className="text-[11px] font-mono font-bold text-amber-300 mt-2 bg-[#06245A]/80 px-2 py-0.5 rounded-full border border-amber-500/30">
              ENGINE
            </span>
          </div>

          {/* Right Node: Output Result */}
          <div className="bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md p-3.5 rounded-2xl shadow-xl hover:border-emerald-400 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest mb-1">
              OUTPUT RESULT
            </div>
            <div className="text-xs sm:text-sm font-bold text-white leading-tight">
              {activePreset.result}
            </div>
          </div>
        </div>

        {/* Footer Realtime Action Description */}
        <div className="bg-[#06245A]/80 border border-slate-800 rounded-xl p-3 backdrop-blur-md flex items-center justify-between text-xs text-slate-200">
          <span className="font-mono text-amber-400 font-semibold">Action Executed:</span>
          <span className="font-medium text-slate-100">{activePreset.engineAction}</span>
        </div>

      </div>
    </div>
  );
}
