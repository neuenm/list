import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = '',
  title,
  type = 'button',
}) => {
  const baseClasses =
    'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';

  const variantClasses = {
    primary:
      'px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed',
    secondary:
      'px-4 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed',
    icon: 'w-10 h-10 rounded-full border flex items-center justify-center disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed',
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const iconSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const getClasses = () => {
    let classes = baseClasses;

    if (variant === 'icon') {
      classes += ` ${variantClasses.icon} ${iconSizeClasses[size]}`;
      classes += disabled
        ? ' border-gray-300 text-gray-400'
        : ' border-blue-500 hover:bg-blue-50 text-blue-500';
    } else {
      classes += ` ${variantClasses[variant]} ${sizeClasses[size]}`;
      // Agregar flex para alinear icono y texto horizontalmente
      classes += ' flex items-center justify-center';
    }

    return `${classes} ${className}`.trim();
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={getClasses()}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
