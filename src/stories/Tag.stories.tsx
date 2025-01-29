import Tag, { TagProps } from '@/components/atoms/Tag';
import { StoryFn } from '@storybook/react';
import icons from '@/assets/icons';

export default {
  title: 'Atoms/Tag',
  component: Tag,
  argTypes: {
    bgColor: {
      control: { type: 'select' },
      options: [
        'primary',
        'white',
        'dark',
        'blue',
        'yellow',
        'green',
        'red',
        'transparent',
      ],
    },
    isRounded: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'lg'],
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons) as (keyof typeof icons)[],
    },
    label: {
      control: 'text',
    },
    onClick: { table: { disable: true } },
  },
};

const Template: StoryFn<TagProps> = (args) => {
  const icon = icons[args.icon as keyof typeof icons] as React.ElementType;

  return <Tag {...args} icon={icon} />;
};

export const Primary = Template.bind({});
Primary.args = {
  bgColor: 'primary',
  isRounded: false,
  size: 'lg',
  label: 'Text',
  // @ts-expect-error We overwrite the icon argument before sending as prop
  icon: 'Test',
  isLoading: false,
};

const AllTemplate: StoryFn<TagProps> = () => {
  const bgColors = [
    'primary',
    'white',
    'dark',
    'blue',
    'yellow',
    'green',
    'red',
    'transparent',
  ];
  const IconComponent = icons[
    'Test' as keyof typeof icons
  ] as React.ElementType;

  return (
    <div className='bg-neteera-teal-400 grid grid-cols-2 gap-1 p-2 w-[320px]'>
      <div className='flex flex-col items-center w-[150px]'>
        {bgColors.map((bgColor, index) => (
          <div key={index} className='p-2'>
            <Tag
              bgColor={bgColor as any}
              isRounded={false}
              size='sm'
              icon={IconComponent}
              label='Text'
            />
          </div>
        ))}
        <Tag
          bgColor={'red'}
          isRounded={true}
          size='sm'
          icon={IconComponent}
          label='Text'
        />
      </div>

      <div className='flex flex-col items-center w-[150px]'>
        {bgColors.map((bgColor, index) => (
          <div key={index} className='p-2'>
            <Tag
              bgColor={bgColor as any}
              isRounded={false}
              size='lg'
              icon={IconComponent}
              label='Text'
            />
          </div>
        ))}
        <Tag
          bgColor={'red'}
          isRounded={true}
          size='lg'
          icon={IconComponent}
          label='Text'
        />
      </div>
    </div>
  );
};

export const AllTags = AllTemplate.bind({});
AllTags.args = {};
