import { FunctionComponent } from 'react';
import SkeletonWrapper from './SkeletonWrapper';

export interface MetricDisplayProps {
  value: number;
  icon?: React.ElementType;
  label: string;
  isLoading?: boolean;
}

const MetricDisplay: FunctionComponent<MetricDisplayProps> = ({
  value,
  icon: Icon,
  label,
  isLoading,
}) => {
  return (
    <SkeletonWrapper isLoading={isLoading}>
      <div className='flex items-center justify-start gap-2'>
        {Icon && (
          <Icon className='w-5 h-5' />
        )}
        <span className='text-[32px] leading-none text-grey-600'>{value}</span>
        <span className='text-sm leading-[19.6px] text-grey-600 self-end'>
          {label}
        </span>
      </div>
    </SkeletonWrapper>
  );
};

export default MetricDisplay;
