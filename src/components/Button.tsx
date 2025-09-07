import React from 'react';

// Tipos más específicos para mejor type safety
type ButtonVariant = 'primary' | 'secondary' | 'icon';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  title?: string;
  type?: ButtonType;
  'aria-label'?: string;
  'data-testid'?: string;
}

const BASE_CLASSES = [
  'transition-colors',
  'duration-200',
  'rounded-full',
  'flex',
  'items-center',
  'justify-center',
];

// Configuración de tamaños
const SIZE_CONFIG = {
  sm: { text: 'text-sm', padding: 'px-3 py-1.5', icon: 'w-8 h-8' },
  md: { text: 'text-base', padding: 'px-4 py-2', icon: 'w-10 h-10' },
  lg: { text: 'text-lg', padding: 'px-6 py-3', icon: 'w-12 h-12' },
};

// Estados de color para todas las variantes - consistente y completo
const COLOR_STATES = {
  primary: {
    normal: ['bg-blue-500', 'text-white'],
    hover: ['hover:bg-blue-600'],
    disabled: ['disabled:bg-gray-300', 'disabled:cursor-not-allowed'],
  },
  secondary: {
    normal: ['border-blue-500', 'text-blue-500'],
    hover: ['hover:bg-blue-50'],
    disabled: ['disabled:border-gray-300', 'disabled:text-gray-400', 'disabled:cursor-not-allowed'],
  },
  icon: {
    normal: ['border-blue-500', 'text-blue-500'],
    hover: ['hover:bg-blue-50'],
    disabled: ['disabled:border-gray-300', 'disabled:text-gray-400', 'disabled:cursor-not-allowed'],
  },
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = '',
  title,
  type = 'button',
  'aria-label': ariaLabel,
  'data-testid': dataTestId,
}) => {
  const sizeData = SIZE_CONFIG[size];
  const colorStates = COLOR_STATES[variant];

  const classes = [
    ...BASE_CLASSES,
    ...colorStates.normal,
    ...colorStates.hover,
    ...colorStates.disabled,
    'border',
  ];

  // Aplicar tamaños según la variante
  if (variant === 'icon') {
    classes.push(sizeData.icon);
  } else {
    classes.push(sizeData.text, sizeData.padding);
  }

  const buttonClasses = classes.join(' ');

  const finalClasses = `${buttonClasses} ${className ? ` ${className}` : ''}`;

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={finalClasses}
      title={title}
      aria-label={ariaLabel}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default Button;
