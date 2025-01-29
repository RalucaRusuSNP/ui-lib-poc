import { IconProps } from '@/types/icon';
import React from 'react';

const UpArrowIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  viewBox = '0 0 20 20',
  fill = 'currentColor',
}) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8335 6.52367V16.6666H9.16679V6.52367L4.69683 10.9936L3.51831 9.81515L10.0001 3.33331L16.482 9.81515L15.3035 10.9936L10.8335 6.52367Z" fill={fill} />
    </svg>
  );
};

export default UpArrowIcon;
