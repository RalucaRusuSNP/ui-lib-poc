import NotificationCard, {
  NotificationCardProps,
} from '@/components/molecules/NotificationCard';
import { StoryFn } from '@storybook/react';
import icons from '@/assets/icons';

export default {
  title: 'Molecules/NotificationCard',
  component: NotificationCard,
  argTypes: {
    title: {
      control: 'text',
    },
    headerIcon: {
      control: { type: 'select' },
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    bodyIcon: {
      control: { type: 'select' },
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    metric: {
      control: 'number',
    },
    time: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    bgColor: { table: { disable: true } },
    onDismiss: { table: { disable: true } },
    onEscalate: { table: { disable: true } },
  },
};

const Template: StoryFn<NotificationCardProps> = (args) => {
  const headerIcon = icons[
    args.headerIcon as keyof typeof icons
  ] as React.ElementType;
  const bodyIcon = icons[args.bodyIcon as keyof typeof icons];

  return (
    <NotificationCard {...args} headerIcon={headerIcon} bodyIcon={bodyIcon} />
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Notification message',
  // @ts-expect-error We overwrite the heartIcon argument before sending as prop
  headerIcon: 'Heart',
  // @ts-expect-error We overwrite the bodyIcon argument before sending as prop
  bodyIcon: 'Arrow Up',
  bgColor: 'blue',
  metric: 100,
  label: 'Metric',
  time: '08:00',
  onDismiss: () => alert('Dismiss has been clicked'),
  onEscalate: () => alert('Escalate has been clicked'),
};
