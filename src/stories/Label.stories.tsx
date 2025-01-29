import Label, { LabelProps } from '@/components/atoms/Label';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    label: {
      control: 'text',
    },
    htmlFor: { table: { disable: true } },
  },
};

const Template: StoryFn<LabelProps> = (args) => {
  return <Label {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  htmlFor: 'email',
  label: 'Email',
};
