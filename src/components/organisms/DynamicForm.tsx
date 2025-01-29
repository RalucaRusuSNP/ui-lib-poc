import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';
import { convertValidationRules } from '@/utils/form-validation-utils';
import { FieldSchema } from '@/models/formTypes';

export interface DynamicFormProps {
  schema: FieldSchema[];
  onSubmit: SubmitHandler<Record<string, any>>;
  formSection: string;
  defaultValues?: Record<string, any>;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  schema,
  onSubmit,
  formSection,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Record<string, any>>({
    defaultValues,
  });

  return (
    <section className='flex flex-col'>
      <p className='font-medium text-xl mb-8 ml-1 text-grey-600'>
        {formSection}
      </p>
      <form className='flex flex-wrap gap-8' onSubmit={handleSubmit(onSubmit)}>
        {schema.map((field) => (
          <FormField
            key={field.name}
            register={register}
            label={field.label}
            name={field.name}
            type={field.type}
            validationRules={convertValidationRules(field.validation)}
            errors={errors}
            options={field.options}
            setValue={setValue}
          />
        ))}
        <div>
          <Button bgColor='default' isLoading={false} label='Submit' />
        </div>
      </form>
    </section>
  );
};

export default DynamicForm;
