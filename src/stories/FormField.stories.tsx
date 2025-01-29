import FormField, { FormFieldProps } from '@/components/molecules/FormField';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Molecules/FormField',
  component: FormField,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'select', 'textarea', 'toggle'],
    },
    label: {
      control: 'text',
    },
    options: {
      control: 'array',
      if: {
        arg: 'type',
        eq: 'select',
      },
    },
    width: {
      control: { type: 'select' },
      options: ['50%', '100%'],
    },
    register: { table: { disable: true } },
    setValue: { table: { disable: true } },
    name: { table: { disable: true } },
    validationRules: { table: { disable: true } },
    errors: { table: { disable: true } },
  },
};

const Template: StoryFn<FormFieldProps> = (args) => {
  return (
    <div className='mt-5'>
      <FormField {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'email' as string,
  type: 'text',
  label: 'Label',
  options: ['Option 1', 'Option 2', 'Option 3'],
  errors: {},
  validationRules: {},
  register: (() => {}) as any,
  width: '100%',
};
