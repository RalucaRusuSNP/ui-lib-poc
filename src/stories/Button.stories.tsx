import type { Meta, StoryFn } from '@storybook/react';

import Button, { ButtonProps } from '@/components/atoms/Button';
import icons from '@/assets/icons';
import DeviceIcon from '@/assets/icons/Device';
import PlusIcon from '@/assets/icons/Plus';
import ArrowRightIcon from '@/assets/icons/ArrowRight';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    bgColor: {
      control: { type: 'select' },
      options: ['default', 'white', 'dark', 'transparent'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md'],
    },
    label: {
      control: { type: 'text' },
    },
    isFull: {
      control: { type: 'boolean' },
    },
    isRounded: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    leftIcon: {
      control: { type: 'select' },
      options: ['No icon', ...(Object.keys(icons) as (keyof typeof icons)[])],
    },
    rightIcon: {
      control: { type: 'select' },
      options: ['No icon', ...(Object.keys(icons) as (keyof typeof icons)[])],
    },
    onClick: { table: { disable: true } },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => {
  const leftIcon = icons[
    args.leftIcon as keyof typeof icons
  ] as React.ElementType;
  const rightIcon = icons[
    args.rightIcon as keyof typeof icons
  ] as React.ElementType;

  return (
    <div className='w-screen h-screen p-5 bg-[#bfc8d3]'>
      <Button {...args} leftIcon={leftIcon} rightIcon={rightIcon} />
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  bgColor: 'default',
  label: 'Button',
  size: 'md',
  isFull: false,
  isRounded: false,
  // @ts-expect-error We overwrite the leftIcon argument before sending as prop
  leftIcon: 'Device',
  // @ts-expect-error We overwrite the leftIcon argument before sending as prop
  rightIcon: 'Arrow Right',
  isLoading: false,
  disabled: false,
  onClick: () => alert('The button has been clicked'),
};

const AllTemplate: StoryFn<ButtonProps> = () => (
  <div className='grid grid-cols-3 gap-8 bg-neteera-teal-400 w-full h-full p-8'>
    <h2 className='font-bold text-lg'>Light Buttons Examples</h2>
    <h2 className='font-bold text-lg'>White Buttons Examples</h2>
    <h2 className='font-bold text-lg'>Dark Buttons Examples</h2>
    <Button
      leftIcon={DeviceIcon}
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      bgColor='white'
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      bgColor='dark'
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      isFull
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      bgColor='white'
      isFull
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      bgColor='dark'
      isFull
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      isRounded
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      bgColor='white'
      isRounded
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      bgColor='dark'
      isRounded
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      isFull
      isRounded
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      bgColor='white'
      isFull
      isRounded
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      bgColor='dark'
      isFull
      isRounded
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    {/* SMALL Buttons */}
    <Button
      leftIcon={DeviceIcon}
      size='sm'
      isRounded
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      size='sm'
      bgColor='white'
      isRounded
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      size='sm'
      bgColor='dark'
      isRounded
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      size='sm'
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      size='sm'
      bgColor='white'
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      size='sm'
      bgColor='dark'
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      size='sm'
      isFull
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      size='sm'
      bgColor='white'
      isFull
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      size='sm'
      bgColor='dark'
      isFull
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      size='sm'
      isFull
      isRounded
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      size='sm'
      bgColor='white'
      isFull
      isRounded
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>
    <Button
      leftIcon={DeviceIcon}
      size='sm'
      bgColor='dark'
      isFull
      isRounded
      rightIcon={ArrowRightIcon}
      label='Button'
    ></Button>

    <Button size='sm' isRounded label='Button'></Button>
    <Button size='sm' bgColor='white' isRounded label='Button'></Button>
    <Button size='sm' bgColor='dark' isRounded label='Button'></Button>
    <Button leftIcon={PlusIcon} size='icon' isRounded />
    <Button leftIcon={PlusIcon} size='icon' bgColor='white' isRounded />
    <Button leftIcon={PlusIcon} size='icon' bgColor='dark' isRounded />
    <Button leftIcon={PlusIcon} size='iconSm' isRounded />
    <Button leftIcon={PlusIcon} size='iconSm' bgColor='white' isRounded />
    <Button leftIcon={PlusIcon} size='iconSm' bgColor='dark' isRounded />
  </div>
);

export const AllButtons = AllTemplate.bind({});
AllButtons.args = {};
