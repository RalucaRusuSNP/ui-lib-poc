import React from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import SkeletonWrapper from './SkeletonWrapper';

export interface InputProps {
  name: string;
  type: 'text' | 'password' | 'email' | 'select' | 'textarea' | 'toggle';
  placeholder?: string;
  options?: string[];
  register: UseFormRegister<Record<string, any>>;
  validationRules: RegisterOptions;
  isLoading?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  register,
  validationRules,
  options,
  isLoading,
  disabled,
}) => {
  const baseStyles =
    'border border-grey-200 rounded-lg px-4 py-2 w-full max-w-full text-grey-600 appearance-none focus:outline-none focus:ring-2 focus:ring-grey-200';
  const heightStyles = 'min-h-[2rem] h-12';

  if (type === 'textarea') {
    return (
      <SkeletonWrapper full isLoading={isLoading}>
        <textarea
          disabled={disabled}
          id={name}
          rows={5}
          placeholder={placeholder}
          {...register(name, validationRules)}
          className={`${baseStyles} resize-vertical`}
        />
      </SkeletonWrapper>
    );
  } else if (type === 'select') {
    return (
      <div className='relative'>
        <SkeletonWrapper full isLoading={isLoading}>
          <select
            disabled={disabled}
            id={name}
            {...register(name, validationRules)}
            className='border border-grey-200 rounded-lg px-4 py-2 h-12 w-full text-grey-600 appearance-none pr-12 focus:outline-none focus:ring-grey-200'
          >
            <option value=''>Select</option>
            {options &&
              options.length > 0 &&
              options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </SkeletonWrapper>
        <img
          src='/chevron-down.svg'
          alt='chevron down'
          className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none'
        />
      </div>
    );
  }

  return (
    <SkeletonWrapper
      full
      height={`${type === 'toggle' ? '48px' : ''}`}
      isLoading={isLoading}
    >
      <input
        id={name}
        type={type === 'toggle' ? 'text' : type}
        placeholder={placeholder}
        {...register(name, validationRules)}
        className={`${baseStyles} ${heightStyles}`}
        disabled={disabled}
      />
    </SkeletonWrapper>
  );
};

export default Input;
