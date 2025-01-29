export type ValidationRule = {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    pattern?: RegExp;
  };
  
  export type FieldSchema = {
    name: string;
    type: 'text' | 'password' | 'email' | 'select' | 'textarea' | 'toggle';
    label: string;
    placeholder?: string;
    validation?: ValidationRule;
    options?: string[];
    width?: '50%' | '100%'
  };
  
  export type FormSchema =
  { formSection: string,
    fields:  FieldSchema[];
  }
 
  
  