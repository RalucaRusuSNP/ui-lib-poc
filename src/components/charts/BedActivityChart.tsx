import {
  Bar,
  CartesianGrid,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bed } from 'lucide-react';

const data = [
  {
    day: 'Wed',
    total: 13.8,
    highMotion: 4,
    mediumMotion: 1,
    lowMotion: 1,
    sleep: 5,
    remSleep: 2.8,
  },
  {
    day: 'Thu',
    total: 13.2,
    highMotion: 2,
    mediumMotion: 2,
    lowMotion: 1,
    sleep: 5.2,
    remSleep: 3,
  },
  {
    day: 'Fri',
    total: 14.3,
    highMotion: 4,
    mediumMotion: 1.5,
    lowMotion: 1,
    sleep: 5,
    remSleep: 2.8,
  },
  {
    day: 'Sat',
    total: 13.6,
    highMotion: 3.5,
    mediumMotion: 2,
    lowMotion: 0.5,
    sleep: 5,
    remSleep: 2.6,
  },
  {
    day: 'Sun',
    total: 14.3,
    highMotion: 0,
    mediumMotion: 3,
    lowMotion: 3,
    sleep: 5.5,
    remSleep: 2.8,
  },
  {
    day: 'Mon',
    total: 17.3,
    highMotion: 4,
    mediumMotion: 2,
    lowMotion: 2,
    sleep: 6,
    remSleep: 3.3,
  },
  {
    day: 'Tue',
    total: 24,
    highMotion: 3,
    mediumMotion: 3,
    lowMotion: 8,
    sleep: 7,
    remSleep: 3,
  },
];

const getRadius = (entry: any, key: any, keys: string[]): any => {
  const index = keys.indexOf(key);
  const isLast = keys.slice(index + 1).every((k) => entry[k] === 0);
  return isLast ? [10, 10, 0, 0] : [0, 0, 0, 0];
};

export default function BedActivityChart() {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center space-x-2'>
          <Bed className='h-6 w-6' />
          <CardTitle>Bed Activity</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className='relative h-[600px] w-full'>
          <ComposedChart
            width={700}
            height={600}
            data={data}
            barSize={20}
            margin={{
              top: 40,
              right: 30,
              left: 20,
              bottom: 100,
            }}
            barGap={0}
          >
            <CartesianGrid strokeDasharray='3 3' vertical={false} />
            <XAxis
              dataKey='day'
              stroke='hsl(var(--muted-foreground))'
              fontSize={14}
              tickLine={false}
            />
            <YAxis
              stroke='hsl(var(--muted-foreground))'
              fontSize={14}
              tickLine={false}
              hide
            />
            <Tooltip />
            <Bar
              dataKey='highMotion'
              stackId='motion'
              fill='hsl(47, 82%, 67%)'
              radius={getRadius(data[0], 'highMotion', [
                'highMotion',
                'mediumMotion',
                'lowMotion',
              ])}
            />
            <Bar
              dataKey='mediumMotion'
              stackId='motion'
              fill='hsl(47, 82%, 77%)'
              radius={getRadius(data[0], 'mediumMotion', [
                'highMotion',
                'mediumMotion',
                'lowMotion',
              ])}
            />
            <Bar
              dataKey='lowMotion'
              stackId='motion'
              fill='hsl(47, 82%, 87%)'
              radius={getRadius(data[0], 'lowMotion', [
                'highMotion',
                'mediumMotion',
                'lowMotion',
              ])}
            />
            <Bar
              dataKey='remSleep'
              stackId='sleep'
              fill='hsl(150, 50%, 40%)'
              radius={getRadius(data[0], 'remSleep', ['remSleep', 'sleep'])}
            />
            <Bar
              dataKey='sleep'
              stackId='sleep'
              fill='hsl(150, 50%, 90%)'
              radius={getRadius(data[0], 'sleep', ['remSleep', 'sleep'])}
            />
            <Line
              type='monotone'
              dataKey='total'
              stroke='hsl(var(--muted-foreground))'
              strokeDasharray='5 5'
              dot={false}
            >
              <LabelList
                dataKey='total'
                position='top'
                offset={10}
                fill='hsl(var(--foreground))'
                fontSize={14}
              />
            </Line>
          </ComposedChart>

          {/* Legend */}
          <div className='absolute bottom-0 left-0 right-0 space-y-2 p-4'>
            <div className='flex items-center gap-8'>
              <div className='flex items-center gap-2'>
                <span className='text-sm text-muted-foreground'>#</span>
                <span className='text-sm'>Bed occupancy (hours per day)</span>
              </div>
            </div>
            <div className='flex flex-wrap gap-x-8 gap-y-2'>
              <div className='flex items-center gap-2'>
                <div
                  className='h-3 w-3'
                  style={{ backgroundColor: 'hsl(47, 82%, 67%)' }}
                />
                <span className='text-sm'>High motion</span>
              </div>
              <div className='flex items-center gap-2'>
                <div
                  className='h-3 w-3'
                  style={{ backgroundColor: 'hsl(47, 82%, 77%)' }}
                />
                <span className='text-sm'>Medium motion</span>
              </div>
              <div className='flex items-center gap-2'>
                <div
                  className='h-3 w-3'
                  style={{ backgroundColor: 'hsl(47, 82%, 87%)' }}
                />
                <span className='text-sm'>Low motion</span>
              </div>
              <div className='flex items-center gap-2'>
                <div
                  className='h-3 w-3'
                  style={{ backgroundColor: 'hsl(150, 50%, 90%)' }}
                />
                <span className='text-sm'>Sleep</span>
              </div>
              <div className='flex items-center gap-2'>
                <div
                  className='h-3 w-3'
                  style={{ backgroundColor: 'hsl(150, 50%, 40%)' }}
                />
                <span className='text-sm'>REM Sleep</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
