
import { ValidationRule } from '@/models/formTypes';
import { RegisterOptions } from 'react-hook-form';

export const convertValidationRules = (rules?: ValidationRule): RegisterOptions => {
  if (!rules) return {};

  return {
    required: rules.required ? 'This field is required' : false,
    minLength: rules.minLength 
      ? { value: rules.minLength, message: `Minimum length is ${rules.minLength}` }
      : undefined,
    maxLength: rules.maxLength
      ? { value: rules.maxLength, message: `Maximum length is ${rules.maxLength}` }
      : undefined,
    min: rules.min
      ? { value: rules.min, message: `Minimum value is ${rules.min}` }
      : undefined,
    max: rules.max
      ? { value: rules.max, message: `Maximum value is ${rules.max}` }
      : undefined,
    pattern: rules.pattern
      ? { value: rules.pattern, message: 'Invalid format' }
      : undefined,
  };
};

