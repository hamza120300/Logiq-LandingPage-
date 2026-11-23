import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  center?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
  className = '',
}) => {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A6F7A]/20 border border-[#2BB8B3]/30 text-[#34D6BA] text-xs font-semibold mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(52,214,186,0.15)]">
        <span className="w-2 h-2 rounded-full bg-[#34D6BA] animate-pulse" />
        <span>{badge}</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
        {title} <span className="bg-gradient-to-r from-[#2BB8B3] via-[#34D6BA] to-[#2BB8B3] bg-clip-text text-transparent">{highlight}</span>
      </h2>
      <p className="text-base md:text-lg text-slate-400 leading-relaxed font-normal">
        {subtitle}
      </p>
    </div>
  );
};
