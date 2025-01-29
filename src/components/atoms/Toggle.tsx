import { ButtonHTMLAttributes } from 'react';

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  disabled?: boolean;
  onToggle: () => void;
}

export const Toggle = ({
  isActive,
  disabled,
  onToggle,
  ...props
}: ToggleProps) => {
  return (
    <button
      type='button'
      className={`relative focus:outline-none w-8 h-5 rounded-full cursor-pointer transition-bg bg-gray-300 border-none p-0 ${
        isActive ? 'bg-gray-600' : ''
      } ${disabled && 'opacity-50 cursor-not-allowed'}`}
      onClick={onToggle}
      role='switch'
      aria-checked={isActive}
      disabled={disabled}
      {...props}
    >
      <span
        className={`absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full transition-transform ${
          isActive ? 'translate-x-3' : ''
        }`}
      />
    </button>
  );
};
