import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showTagline = false, size = 'md' }: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Brand Icon - Automated Connection Engine */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-amber-400 rounded-xl blur-[6px] opacity-70 animate-pulse-slow" />
        <div className="relative w-full h-full bg-[#031638] border border-amber-500/40 rounded-xl p-1.5 flex items-center justify-center shadow-lg shadow-amber-500/10">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            {/* Dynamic Workflow Connections */}
            <path d="M10 20H30" stroke="#FF9800" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" />
            <circle cx="10" cy="20" r="5" fill="#06245A" stroke="#FF9800" strokeWidth="2.5" />
            <circle cx="30" cy="20" r="5" fill="#FF9800" />
            <circle cx="20" cy="10" r="4" fill="#06245A" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="20" cy="30" r="4" fill="#06245A" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M20 14V26" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className={`font-black tracking-wider uppercase leading-none text-white ${textSizes[size]}`}>
          AUTOMATE <span className="text-amber-500 font-extrabold">BUSINESS</span>
        </div>
        <div className="text-[10px] tracking-[0.25em] text-slate-400 font-semibold uppercase mt-0.5">
          SOLUTIONS
        </div>
        {showTagline && (
          <div className="text-[9px] font-bold text-amber-400/90 tracking-widest mt-1 uppercase">
            WE AUTOMATE. YOU GROW.
          </div>
        )}
      </div>
    </div>
  );
}