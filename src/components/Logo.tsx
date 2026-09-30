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
    sm: 'text-sm font-semibold',
    md: 'text-base font-bold',
    lg: 'text-lg font-bold'
  };

  return (
    <div className={`flex items-center gap-space-3 select-none ${className}`}>
      {/* Brand Icon - Automated Connection Engine */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <div className="relative w-full h-full bg-dark border border-border-medium rounded-sm p-1.5 flex items-center justify-center shadow-sm">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M8 20H32" stroke="#007BFF" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 2" />
            <circle cx="8" cy="20" r="4" fill="#091520" stroke="#007BFF" strokeWidth="2" />
            <circle cx="32" cy="20" r="4" fill="#007BFF" />
            <circle cx="20" cy="8" r="3.5" fill="#091520" stroke="#4995D1" strokeWidth="2" />
            <circle cx="20" cy="32" r="3.5" fill="#091520" stroke="#BDB185" strokeWidth="2" />
            <path d="M20 12.5V27.5" stroke="#4995D1" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className={`tracking-tight text-dark leading-none ${textSizes[size]}`}>
          Autom <span className="text-primary">Mate</span>
        </div>
        {showTagline ? (
          <div className="text-xs font-normal text-secondary mt-1">
            Custom ERPs, mobile apps & process automation
          </div>
        ) : (
          <div className="text-xs tracking-wider text-secondary uppercase mt-0.5 font-medium">
            Business Automation
          </div>
        )}
      </div>
    </div>
  );
}