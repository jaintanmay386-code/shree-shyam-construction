import React from 'react';

interface BrandLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandEmblem: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    {/* Background subtle badge */}
    <rect width="48" height="48" rx="8" fill="#141414" stroke="#D4AF37" strokeWidth="1.2" strokeOpacity="0.4" />
    
    {/* Architectural Roof Gable / Triangular Apex */}
    <path
      d="M24 8L8 22H14V38H34V22H40L24 8Z"
      stroke="#D4AF37"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Inner Monogram / Structural Pillars & Beam */}
    <path
      d="M20 25V38M28 25V38M17 25H31"
      stroke="#D4AF37"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    
    {/* Modern architectural apex diamond */}
    <polygon points="24,13 26.5,16.5 24,20 21.5,16.5" fill="#D4AF37" fillOpacity="0.85" />
    
    {/* Foundation base plinth line */}
    <line x1="11" y1="41" x2="37" y2="41" stroke="#D4AF37" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
);

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = "",
}) => {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;

  if (variant === 'icon-only') {
    return <BrandEmblem size={iconSize} className={className} />;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <BrandEmblem size={iconSize} className="mb-2" />
        <span className="font-serif text-lg tracking-wider font-bold text-[#F5F1E8]">
          SHREE SHYAM
        </span>
        <span className="text-[10px] tracking-[0.28em] uppercase text-[#D4AF37] font-medium">
          CONSTRUCTIONS
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <BrandEmblem size={iconSize} />
      <div className="flex flex-col justify-center">
        <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-[#F5F1E8] leading-tight whitespace-nowrap">
          SHREE SHYAM
        </span>
        <span className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-[#D4AF37] font-semibold leading-tight whitespace-nowrap">
          CONSTRUCTIONS
        </span>
      </div>
    </div>
  );
};
