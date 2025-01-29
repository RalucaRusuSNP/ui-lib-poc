import React from 'react';
import type { IconProps } from '@/types/icon';

const PlusIcon: React.FC<IconProps> = ({
  width = 24,
  height = 25,
  viewBox = '0 0 24 25',
  fill = 'currentColor',
}) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 11.3635V5.36353H13V11.3635H19V13.3635H13V19.3635H11V13.3635H5V11.3635H11Z" fill={fill} />
    </svg>
  );
};

export default PlusIcon;
