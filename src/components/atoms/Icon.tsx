import React from 'react';

import icons from '@/assets/icons';
import { IconProps } from '@/types/icon';

export interface Props
  extends React.HTMLAttributes<HTMLElement>,
  IconProps {
    iconName: keyof typeof icons;
    color?: string;
  }

function Icon({ iconName, color, ...props }: Props) {
  const Component = icons[iconName];

  console.log(`text-${color}`)

  return (
    <Component {...props} />
  );
}

Icon.displayName = 'Icon';

export default Icon;