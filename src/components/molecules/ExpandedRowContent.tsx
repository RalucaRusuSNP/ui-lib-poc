import { ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Notification } from '@/types/notification';
import NotificationCard from './NotificationCard';
import ArrowUpIcon from '@/assets/icons/ArrowUp';
import HeartIcon from '@/assets/icons/Heart';

interface ExpandedRowContentProps {
  data: Notification;
}

export function ExpandedRowContent({ data }: ExpandedRowContentProps) {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50'>
      {data.observations && (
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Observations</CardTitle>
            <Button variant='ghost' size='sm'>
              ID: {data.observations?.id} <ChevronDown className='h-4 w-4' />
            </Button>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>Body temperature</span>
                <span className='font-medium'>
                  {data.observations?.bodyTemperature}°C
                </span>
              </div>
              <div className='flex justify-between'>
                <span className='text-sm text-gray-500'>SpO2</span>
                <span className='font-medium'>{data.observations?.spO2}%</span>
              </div>
              <Button
                variant='ghost'
                size='sm'
                className='w-full justify-start'
              >
                Show more <ChevronDown className='h-4 w-4' />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {data.medicalConditions && (
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>
              Medical conditions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              {data.medicalConditions?.map((condition, index) => (
                <div key={index} className='flex justify-between'>
                  <span className='text-sm'>{condition.condition}</span>
                  <span className='text-sm text-gray-500'>
                    {condition.date}
                  </span>
                </div>
              ))}
              <Button
                variant='ghost'
                size='sm'
                className='w-full justify-start'
              >
                Show more <ChevronDown className='h-4 w-4' />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {data.medications && (
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>Medications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              {data.medications?.map((medication, index) => (
                <div key={index} className='flex justify-between'>
                  <span className='text-sm'>{medication.name}</span>
                  <span className='text-sm text-gray-500'>
                    {medication.date}
                  </span>
                </div>
              ))}
              <Button
                variant='ghost'
                size='sm'
                className='w-full justify-start'
              >
                Show more <ChevronDown className='h-4 w-4' />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {data.notification && (
        <NotificationCard
          title={data.notification.title}
          bgColor={'blue'}
          headerIcon={HeartIcon}
          bodyIcon={ArrowUpIcon}
          metric={data.notification.metric}
          label={data.notification.label}
          time={data.notification.time}
          onDismiss={() => {}}
          onEscalate={() => {}}
        />
      )}
    </div>
  );
}
