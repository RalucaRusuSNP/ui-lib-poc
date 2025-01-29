import { FunctionComponent, useState } from 'react';
import {
  FieldErrors,
  RegisterOptions,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import { Toggle } from '../atoms/Toggle';

export interface FormFieldProps {
  label: string;
  name: string;
  type: 'text' | 'password' | 'email' | 'select' | 'textarea' | 'toggle';
  register: UseFormRegister<Record<string, any>>;
  options?: string[];
  validationRules: RegisterOptions;
  errors: FieldErrors<Record<string, any>>;
  width?: '50%' | '100%';
  setValue?: UseFormSetValue<Record<string, any>>;
  isLoading?: boolean;
  disabled?: boolean;
}

const FormField: FunctionComponent<FormFieldProps> = ({
  label,
  name,
  type,
  options,
  register,
  validationRules,
  errors,
  width,
  setValue,
  isLoading,
  disabled,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prevValue) => {
      const update = !prevValue;
      setValue?.(name, update);
      return update;
    });
  };

  return (
    <div
      className={`flex gap-1.5 relative ${
        width === '50%' ? 'w-[calc(50%-8px)]' : 'w-full'
      } ${type === 'toggle' ? 'toogle-wrapper' : 'flex-col'}`}
    >
      <Label label={label} htmlFor={name} isLoading={isLoading} />
      <Input
        name={name}
        type={type}
        options={options}
        register={register}
        validationRules={validationRules}
        isLoading={isLoading}
        disabled={disabled}
      />
      {type === 'toggle' && (
        <Toggle
          disabled={disabled}
          isActive={isActive}
          onToggle={handleToggle}
        />
      )}
      {errors[name] && (
        <p className='text-red-600 text-xs absolute -bottom-6'>
          {errors[name].message as string}
        </p>
      )}
    </div>
  );
};

export default FormField;
