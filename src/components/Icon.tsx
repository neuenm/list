import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface IconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  ariaLabel?: string;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  className = '',
  size = 20,
  ariaLabel,
}) => {
  const sizeClass = `w-[${size}px] h-[${size}px]`;
  const combinedClasses = [sizeClass, className].filter(Boolean).join(' ');

  return <IconComponent className={combinedClasses} aria-label={ariaLabel} />;
};

export default Icon;
