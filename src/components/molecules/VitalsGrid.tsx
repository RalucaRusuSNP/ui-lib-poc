import { FunctionComponent } from 'react';
import InfoHeader from '../atoms/InfoHeader';
import MetricDisplay from '../atoms/MetricDisplay';
import VitalsGridFooter from '../atoms/VitalsGridFooter';

export interface VitalsGridProps {
  bgColor: 'primary';
  title: string;
  headerIcon: React.ElementType;
  metric: number;
  label: string;
  footerLabel: string;
  footerValue: number;
  isLoading?: boolean;
}

const VitalsGrid: FunctionComponent<VitalsGridProps> = ({
  bgColor,
  title,
  headerIcon,
  metric,
  label,
  footerLabel,
  footerValue,
  isLoading,
}) => {
  return (
    <>
      <div
        className={`max-w-[10.25rem] min-w-[8rem] p-3 rounded-lg flex flex-col gap-3 ${
          bgColor === 'primary' ? 'bg-neteera-teal-200' : ''
        }`}
      >
        <InfoHeader isLoading={isLoading} title={title} icon={headerIcon} />
        <MetricDisplay isLoading={isLoading} value={metric} label={label} />
      </div>
      <div className='mt-2'>
        <VitalsGridFooter
          isLoading={isLoading}
          label={footerLabel}
          value={footerValue}
        />
      </div>
    </>
  );
};

export default VitalsGrid;
