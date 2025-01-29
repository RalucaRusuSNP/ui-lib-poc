import { FunctionComponent } from 'react';
import SkeletonWrapper from './SkeletonWrapper';

export interface InfoHeaderProps {
  title: string;
  icon: React.ElementType;
  isLoading?: boolean;
}

const InfoHeader: FunctionComponent<InfoHeaderProps> = ({
  title,
  icon: Icon,
  isLoading,
}) => {
  return (
    <SkeletonWrapper isLoading={isLoading} full>
      <div className='flex items-center justify-between gap-2.5 text-grey-600'>
        <p className='text-sm font-medium leading-[18.2px] text-grey-600'>
          {title}
        </p>
        {Icon && (
          <span className='w-5 h-5 text-grey-600'>
            <Icon />
          </span>
        )}
      </div>
    </SkeletonWrapper>
  );
};

export default InfoHeader;
