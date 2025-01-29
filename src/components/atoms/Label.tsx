import { FunctionComponent } from 'react';
import SkeletonWrapper from './SkeletonWrapper';

export interface LabelProps {
  htmlFor: string;
  label: string;
  isLoading?: boolean;
}

const Label: FunctionComponent<LabelProps> = ({
  htmlFor,
  label,
  isLoading,
}) => {
  return (
    <SkeletonWrapper isLoading={isLoading}>
      <label htmlFor={htmlFor} className='font-medium text-grey-600 ml-1'>
        {label}
      </label>
    </SkeletonWrapper>
  );
};

export default Label;
