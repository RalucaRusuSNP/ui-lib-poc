import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import SkeletonWrapper from './SkeletonWrapper';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg w-fit focus:outline-none focus:ring-0 hover:border-none border-none',
  {
    variants: {
      size: {
        iconSm: 'h-6 w-6 px-1 py-2 text-sm',
        icon: 'h-10 w-10 px-3 py-2',
        sm: 'h-8 min-w-8 px-3 py-2 text-sm',
        md: 'h-12 min-w-12 px-3.5 py-2',
      },
      bgColor: {
        default: 'bg-neteera-teal-200 text-gray-900 hover:bg-neteera-teal-300',
        light: 'bg-neteera-teal-200 text-gray-900 hover:bg-neteera-teal-300',
        white: 'bg-white text-gray-900 hover:bg-neteera-teal-100',
        dark: 'bg-neteera-teal-700 text-white hover:bg-neteera-teal-800',
        transparent: 'bg-none text-gray-900 px-0',
      },
      isFull: {
        true: 'w-full',
      },
      isRounded: {
        true: 'rounded-full',
      },
    },
    defaultVariants: {
      bgColor: 'light',
      size: 'md',
      isFull: false,
      isRounded: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
  label?: React.ReactNode;
  isFull?: boolean;
  isRounded?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      bgColor,
      size,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      isFull,
      isRounded,
      isLoading,
      disabled,
      label,
      ...props
    },
    ref
  ) => {
    return (
      <SkeletonWrapper
        isLoading={isLoading}
        full={isFull || className?.includes('flex-1')}
      >
        <button
          className={cn(
            buttonVariants({
              bgColor,
              size,
              isFull,
              isRounded,
              className,
            }),
            disabled && 'opacity-50 cursor-not-allowed'
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        >
          {LeftIcon && (
            <span
              className={`${
                bgColor === 'dark' ? 'filter invert brightness-0' : ''
              }`}
            >
              <LeftIcon />
            </span>
          )}
          {label}
          {isFull && <div className='flex-1' />}
          {RightIcon && (
            <span
              className={`${
                bgColor === 'dark' ? 'filter invert brightness-0' : ''
              }`}
            >
              <RightIcon />
            </span>
          )}
        </button>
      </SkeletonWrapper>
    );
  }
);

Button.displayName = 'Button';

export default Button;
