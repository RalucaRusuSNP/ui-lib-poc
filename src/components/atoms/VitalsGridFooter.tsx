import { FunctionComponent } from 'react';
import SkeletonWrapper from './SkeletonWrapper';

export interface VitalsGridFooterProps {
  label: string;
  value: number;
  bgColor?: 'primary';
  isLoading?: boolean;
}

const VitalsGridFooter: FunctionComponent<VitalsGridFooterProps> = ({
  label,
  value,
  bgColor = 'primary',
  isLoading,
}) => {
  return (
    <SkeletonWrapper isLoading={isLoading}>
      <div
        className={`min-w-[8rem] w-[10.25rem] py-4 px-3 rounded-lg flex flex-col gap-3 ${
          bgColor === 'primary' ? 'bg-neteera-teal-200' : ''
        }`}
      >
        <p className='text-sm font-medium leading-[18.2px] text-grey-600'>
          {label} : {value}
        </p>
      </div>
    </SkeletonWrapper>
  );
};

export default VitalsGridFooter;
