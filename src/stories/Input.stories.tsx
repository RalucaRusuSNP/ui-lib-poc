import Input, { InputProps } from '@/components/atoms/Input';
import { StoryFn } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['text', 'select', 'textarea'],
    },
    options: {
      control: 'array',
      if: {
        arg: 'type',
        eq: 'select',
      },
    },
    register: { table: { disable: true } },
    validationRules: { table: { disable: true } },
    name: { table: { disable: true } },
  },
};

const Template: StoryFn<InputProps> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Input {...args} />
    </FormProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  options: ['Option 1', 'Option 2', 'Option 3'],
  register: (() => {}) as any,
};
