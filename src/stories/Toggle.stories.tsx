import { StoryFn } from '@storybook/react';
import { useState, useEffect } from 'react';
import { Toggle, ToggleProps } from '@/components/atoms/Toggle';

export default {
  title: 'Atoms/Toggle',
  component: Toggle,
  argTypes: {
    isActive: {
      control: { type: 'boolean' },
      description: 'Defines if toggle is active',
    },
    onToggle: { table: { disable: true } },
  },
};

const Template: StoryFn<ToggleProps> = (args) => {
  const [isActive, setIsActive] = useState(args.isActive);

  useEffect(() => {
    setIsActive(args.isActive);
  }, [args.isActive]);

  const handleToggle = () => {
    setIsActive((prevValue: boolean) => !prevValue);
    args?.onToggle?.();
  };
  return <Toggle {...args} isActive={isActive} onToggle={handleToggle} />;
};

export const Default = Template.bind({});

Default.args = {
  isActive: false,
};
