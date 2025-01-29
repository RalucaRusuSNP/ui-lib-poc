import { FunctionComponent } from 'react';
import SkeletonWrapper from './SkeletonWrapper';

export interface TagProps {
  label: string;
  size?: 'sm' | 'lg';
  isRounded?: boolean;
  bgColor?:
    | 'primary'
    | 'white'
    | 'dark'
    | 'blue'
    | 'yellow'
    | 'green'
    | 'red'
    | 'transparent';
  icon?: React.ElementType;
  disabled?: boolean;
  onClick?: () => void;
  isLoading?: boolean;
}

const Tag: FunctionComponent<TagProps> = ({
  size = 'sm',
  isRounded = false,
  bgColor = 'primary',
  icon: Icon,
  onClick,
  label,
  disabled,
  isLoading,
}) => {
  const baseClass =
    'inline-flex items-center justify-center gap-1.5 font-medium transition ease-in-out';

  const sizeClass =
    size === 'sm'
      ? 'text-sm py-2 px-2.5 leading-4'
      : 'text-base py-2.5 px-3 leading-5';

  const variantClass = isRounded ? 'rounded-full px-4' : 'rounded-md';

  const bgColorClass = {
    primary: 'bg-neteera-teal-200 text-gray-900 hover:bg-neteera-teal-300',
    white: 'bg-white text-grey-600',
    dark: 'bg-grey-600 text-white',
    blue: 'bg-blue-200 text-grey-600',
    yellow: 'bg-yellow-200 text-grey-600',
    green: 'bg-green-200 text-grey-600',
    red: 'bg-red-200 text-grey-600',
    transparent: 'bg-none text-grey-600',
  }[bgColor];

  return (
    <SkeletonWrapper isLoading={isLoading}>
      <div
        className={`${baseClass} ${sizeClass} ${variantClass} ${bgColorClass} hover:opacity-90 ${
          disabled &&
          'opacity-50 cursor-not-allowed pointer-events-none hover:bg-none'
        }`}
        onClick={onClick}
      >
        {Icon && (
          <span
            className={`w-5 h-5 ${
              bgColor === 'dark' ? 'filter invert brightness-0' : ''
            }`}
          >
            <Icon />
          </span>
        )}
        <span>{label}</span>
      </div>
    </SkeletonWrapper>
  );
};

export default Tag;
