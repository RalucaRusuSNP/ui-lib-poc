import InfoHeader, { InfoHeaderProps } from '@/components/atoms/InfoHeader';
import { StoryFn } from '@storybook/react';
import icons from '@/assets/icons';

export default {
  title: 'Atoms/InfoHeader',
  component: InfoHeader,
  argTypes: {
    title: {
      control: 'text',
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
  },
};

const Template: StoryFn<InfoHeaderProps> = (args) => {
  const icon = icons[args.icon as keyof typeof icons];

  return <InfoHeader {...args} icon={icon} />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'Notification message',
  // @ts-expect-error We overwrite the icon argument before sending as prop
  icon: 'Heart',
};
