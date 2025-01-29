import MetricDisplay, {
  MetricDisplayProps,
} from '@/components/atoms/MetricDisplay';
import { StoryFn } from '@storybook/react';
import icons from '@/assets/icons';

export default {
  title: 'Atoms/MetricDisplay',
  component: MetricDisplay,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    value: {
      control: 'number',
    },
    label: {
      control: 'text',
    },
  },
};

const Template: StoryFn<MetricDisplayProps> = (args) => {
  const icon = icons[args.icon as keyof typeof icons] as React.ElementType;

  return <MetricDisplay {...args} icon={icon} />;
};

export const Default = Template.bind({});
Default.args = {
  value: 100,
  // @ts-expect-error We overwrite the icon argument before sending as prop
  icon: 'Arrow Up',
  label: 'Metric',
};
