import VitalsGridFooter, {
  VitalsGridFooterProps,
} from '@/components/atoms/VitalsGridFooter';
import { StoryFn } from '@storybook/react';

export default {
  title: 'Atoms/VitalsGridFooter',
  component: VitalsGridFooter,
  argTypes: {
    label: {
      control: 'text',
    },
    value: {
      control: 'number',
    },
    bgColor: { table: { disable: true } },
  },
};

const Template: StoryFn<VitalsGridFooterProps> = (args) => {
  return <VitalsGridFooter {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Heart Rate',
  value: 72,
  bgColor: 'primary',
};
