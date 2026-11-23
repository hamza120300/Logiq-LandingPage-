import React from 'react';

interface LogiqLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LogiqLogo: React.FC<LogiqLogoProps> = ({
  className = '',
  iconOnly = false,
  size = 'md',
}) => {
  const heights = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
  };

  if (iconOnly) {
    return (
      <svg
        viewBox="0 0 150 150"
        className={`${heights[size]} aspect-square ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="150" height="150" rx="34" fill="#0A6F7A" />
        <g transform="scale(0.29296875)">
          <g transform="translate(256.0 253.44) scale(2.5859) translate(-274.46 -89.46)">
            <g fill="none" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="256" cy="68" r="25" />
              <path d="M281 43V114A18 18 0 0 0 299 132H307" />
            </g>
            <circle cx="314" cy="132" r="10.9" fill="#34D6BA" />
          </g>
        </g>
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`} dir="ltr">
      {/* Icon Badge */}
      <svg
        viewBox="0 0 150 150"
        className={`${heights[size]} aspect-square flex-shrink-0 drop-shadow-[0_0_15px_rgba(43,184,179,0.3)]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="150" height="150" rx="34" fill="#0A6F7A" />
        <g transform="scale(0.29296875)">
          <g transform="translate(256.0 253.44) scale(2.5859) translate(-274.46 -89.46)">
            <g fill="none" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="256" cy="68" r="25" />
              <path d="M281 43V114A18 18 0 0 0 299 132H307" />
            </g>
            <circle cx="314" cy="132" r="10.9" fill="#34D6BA" />
          </g>
        </g>
      </svg>

      {/* Wordmark (Always LTR Latin) */}
      <div className="flex items-center tracking-tight font-bold font-sans" dir="ltr">
        <span className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">
          logi
        </span>
        <span className="text-[#2BB8B3] text-2xl md:text-3xl font-extrabold tracking-tight relative">
          q
          <span className="inline-block w-2 h-2 rounded-full bg-[#34D6BA] absolute -bottom-1 -right-0.5 shadow-[0_0_8px_#34D6BA]" />
        </span>
      </div>
    </div>
  );
};
