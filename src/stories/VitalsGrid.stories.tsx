import { StoryFn } from '@storybook/react';
import VitalsGrid, { VitalsGridProps } from '@/components/molecules/VitalsGrid';
import icons from '@/assets/icons';

export default {
  title: 'Molecules/VitalsGrid',
  component: VitalsGrid,
  argTypes: {
    bgColor: { table: { disable: true } },
    title: {
      control: 'text',
    },
    headerIcon: {
      control: { type: 'select' },
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    metric: {
      control: 'number',
    },
    label: {
      control: 'text',
    },
    footerLabel: {
      control: 'text',
    },
    footerValue: {
      control: 'number',
    },
  },
};

const Template: StoryFn<VitalsGridProps> = (args) => {
  const headerIcon = icons[
    args.headerIcon as keyof typeof icons
  ] as React.ElementType;

  return <VitalsGrid {...args} headerIcon={headerIcon} />;
};

export const Default = Template.bind({});
Default.args = {
  bgColor: 'primary',
  title: 'Vitals Grid Title',
  // @ts-expect-error We overwrite the icon argument before sending as prop
  headerIcon: 'Heart',
  metric: 75,
  label: 'BPM',
  footerLabel: 'I/E Ratio',
  footerValue: 1,
};
