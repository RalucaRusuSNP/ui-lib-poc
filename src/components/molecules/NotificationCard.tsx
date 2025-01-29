import { FunctionComponent } from 'react';
import InfoHeader from '../atoms/InfoHeader';
import SkeletonWrapper from '../atoms/SkeletonWrapper';
import Button from '../atoms/Button';
import MetricDisplay from '../atoms/MetricDisplay';

export interface NotificationCardProps {
  bgColor: 'blue';
  title: string;
  headerIcon: React.ElementType;
  bodyIcon: React.ElementType;
  metric: number;
  label: string;
  time: string;
  onDismiss: () => void;
  onEscalate: () => void;
  isLoading?: boolean;
}

const NotificationCard: FunctionComponent<NotificationCardProps> = ({
  bgColor,
  title,
  headerIcon,
  bodyIcon,
  metric,
  label,
  time,
  onDismiss,
  onEscalate,
  isLoading,
}) => {
  return (
    <div
      className={`max-w-[21.785rem] min-w-[8rem] p-3 rounded-lg flex flex-col gap-4 ${
        bgColor === 'blue' ? 'bg-blue-200' : ''
      }`}
    >
      <div className='notification-card__header'>
        <InfoHeader isLoading={isLoading} title={title} icon={headerIcon} />
      </div>
      <div className='flex justify-between items-end'>
        <MetricDisplay
          isLoading={isLoading}
          value={metric}
          icon={bodyIcon}
          label={label}
        />
        <SkeletonWrapper isLoading={isLoading} circle>
          <span className='text-sm text-gray-600'>{time}</span>
        </SkeletonWrapper>
      </div>
      <div className='flex justify-between items-center gap-2 w-full'>
        <Button
          isRounded
          bgColor='white'
          size='sm'
          onClick={onDismiss}
          className='flex-1'
          isLoading={isLoading}
          label='Dismiss'
        />
        <Button
          isRounded
          bgColor='dark'
          size='sm'
          onClick={onEscalate}
          className='flex-1'
          isLoading={isLoading}
          label='Escalate'
        />
      </div>
    </div>
  );
};

export default NotificationCard;
