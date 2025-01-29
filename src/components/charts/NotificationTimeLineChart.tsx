import { Bar, BarChart, XAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer } from '../ui/chart';

const data = [
  {
    time: '09:00',
    high: 2,
    medium: 3,
    low: 4,
  },
  {
    time: '',
    high: 2,
    medium: 2,
    low: 3,
  },
  {
    time: '03:00',
    high: 3,
    medium: 5,
    low: 6,
  },
  {
    time: '',
    high: 2,
    medium: 3,
    low: 4,
  },
  {
    time: '21:00',
    high: 1,
    medium: 4,
    low: 5,
  },
];

export default function NotificationTimelineChart() {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Notification timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            low: {
              label: 'Low priority notifications: 48',
              color: 'rgb(66, 133, 244)',
            },
            medium: {
              label: 'Medium priority notifications: 24',
              color: 'rgb(255, 193, 84)',
            },
            high: {
              label: 'High priority notifications: 12',
              color: 'rgb(255, 127, 102)',
            },
          }}
          className='h-[300px]'
        >
          <BarChart
            data={data}
            stackOffset='sign'
            barGap={8}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <XAxis
              dataKey='time'
              axisLine={false}
              tickLine={false}
              fontSize={14}
              tickMargin={10}
            />
            <Bar
              dataKey='low'
              fill='var(--color-low)'
              stroke='white'
              strokeWidth={5}
              radius={5}
              stackId='stack'
            />
            <Bar
              dataKey='medium'
              fill='var(--color-medium)'
              stroke='white'
              strokeWidth={5}
              radius={5}
              stackId='stack'
            />
            <Bar
              dataKey='high'
              fill='var(--color-high)'
              stroke='white'
              strokeWidth={5}
              radius={5}
              stackId='stack'
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
