import React from 'react';

import type { IconProps } from '@/types/icon';

const ArrowRightIcon: React.FC<IconProps> = ({
  width = 16,
  height = 17,
  viewBox = '0 0 16 17',
  fill = 'currentColor',
}) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.7812 9.57575H2.66683V8.24242H10.7812L7.20523 4.66645L8.14803 3.72363L13.3335 8.90909L8.14803 14.0946L7.20523 13.1518L10.7812 9.57575Z" fill={fill} />
    </svg>
  );
};

export default ArrowRightIcon;

