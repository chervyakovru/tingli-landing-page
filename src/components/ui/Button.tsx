import React, { ElementType } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  loading?: boolean;
  as?: ElementType;
  href?: string;
  target?: string;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  className = '',
  loading = false,
  as,
  href,
  target,
  ...props
}) => {
  const variants = {
    primary:
      'bg-button-1 text-global-5 hover:bg-button-2 active:bg-button-2 focus:ring-gray-500',
    secondary:
      'bg-global-4 text-button-1 hover:bg-global-2 active:bg-global-2 focus:ring-gray-300',
  };

  // Mobile-first responsive sizes
  const sizes = {
    md: 'px-[18px] py-[16px] text-[16px] leading-[1.5]',
    lg: 'px-[16px] py-6 text-[18px] lg:text-[20px] leading-[1.2]',
  };
  const spanLineHeight = {
    md: 'leading-[1.5]',
    lg: 'leading-[1.2]',
  };

  // Responsive border radius
  const responsiveRadius = 'rounded-button';

  // Responsive focus ring
  const responsiveFocus = 'focus:ring-2';

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg
      className="mr-2 h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const Component = as || 'button';

  return (
    <Component
      type={type}
      href={href}
      target={target}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      className={` ${responsiveRadius} focus:outline-none ${responsiveFocus} focus:ring-opacity-50 ${variants[variant]} ${sizes[size]} ${disabled || loading ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${loading ? 'relative' : ''} inline-flex min-h-[44px] touch-manipulation items-center justify-center font-medium ${className} `
        .trim()
        .replace(/\s+/g, ' ')}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      <span
        className={`${loading ? 'opacity-75' : ''} ${spanLineHeight[size]}`}
      >
        {children}
      </span>
    </Component>
  );
};

export default Button;
