import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const data = [
  {
    time: '16:00',
    hr: 85,
    hrBaseline: 90,
    rr: 70,
    rrBaseline: 65,
    motion: 100,
  },
  {
    time: '18:00',
    hr: 82,
    hrBaseline: 90,
    rr: 65,
    rrBaseline: 65,
    motion: 110,
  },
  {
    time: '20:00',
    hr: 120,
    hrBaseline: 90,
    rr: 68,
    rrBaseline: 65,
    motion: 30,
  },
  { time: '22:00', hr: 75, hrBaseline: 90, rr: 75, rrBaseline: 65, motion: 0 },
  { time: '00:00', hr: 70, hrBaseline: 90, rr: 60, rrBaseline: 65, motion: 10 },
  { time: '02:00', hr: 80, hrBaseline: 90, rr: 45, rrBaseline: 65, motion: 5 },
  { time: '04:00', hr: 78, hrBaseline: 90, rr: 62, rrBaseline: 65, motion: 25 },
  { time: '06:00', hr: 45, hrBaseline: 90, rr: 58, rrBaseline: 65, motion: 5 },
  { time: '08:00', hr: 95, hrBaseline: 90, rr: 72, rrBaseline: 65, motion: 40 },
  {
    time: '10:00',
    hr: 105,
    hrBaseline: 90,
    rr: 110,
    rrBaseline: 65,
    motion: 130,
  },
  {
    time: '12:00',
    hr: 100,
    hrBaseline: 90,
    rr: 95,
    rrBaseline: 65,
    motion: 120,
  },
  {
    time: '14:00',
    hr: 110,
    hrBaseline: 90,
    rr: 80,
    rrBaseline: 65,
    motion: 95,
  },
];

// custom marker
const CustomMarker = ({
  cx,
  cy,
  color,
}: {
  cx: number;
  cy: number;
  color: string;
}) => {
  return (
    <g transform={`translate(${cx},${cy})`}>
      <circle r='16' fill={color} />
      <text
        x='0'
        y='0'
        textAnchor='middle'
        fill='white'
        dominantBaseline='middle'
        fontSize='20'
        fontWeight='bold'
      >
        !
      </text>
    </g>
  );
};

export default function TrendingOverviewChart() {
  return (
    <Card className='w-full'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle>Trending overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            hr: {
              label: 'HR continuous',
              color: 'hsl(0 72% 51%)',
            },
            hrBaseline: {
              label: 'HR baseline',
              color: 'hsl(0 72% 51%)',
            },
            rr: {
              label: 'RR continuous',
              color: 'hsl(210 79% 46%)',
            },
            rrBaseline: {
              label: 'RR baseline',
              color: 'hsl(210 79% 46%)',
            },
            motion: {
              label: 'Motion index',
              color: 'hsl(142 71% 45%)',
            },
          }}
          className='h-[400px]'
        >
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              data={data}
              margin={{ top: 20, right: 50, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis
                dataKey='time'
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                yAxisId='left'
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
                domain={[0, 160]}
                label={{ value: 'BPM', position: 'top', offset: 10 }}
              />
              <YAxis
                yAxisId='right'
                orientation='right'
                stroke='#888888'
                fontSize={12}
                tickLine={false}
                axisLine={false}
                domain={[0, 40]}
                label={{ value: 'BRPM', position: 'top', offset: 10 }}
              />
              {/* Baseline lines */}
              <ReferenceLine
                y={90}
                yAxisId='left'
                stroke='var(--color-hr)'
                strokeDasharray='3 3'
              />
              <ReferenceLine
                y={65}
                yAxisId='left'
                stroke='var(--color-rr)'
                strokeDasharray='3 3'
              />
              {/* Main lines */}
              <Line
                type='monotone'
                dataKey='hr'
                yAxisId='left'
                stroke='var(--color-hr)'
                dot={false}
                strokeWidth={2}
              />
              <Line
                type='monotone'
                dataKey='rr'
                yAxisId='left'
                stroke='var(--color-rr)'
                dot={false}
                strokeWidth={2}
              />
              <Line
                type='monotone'
                dataKey='motion'
                yAxisId='right'
                stroke='var(--color-motion)'
                dot={false}
                strokeWidth={2}
              />
              {/* Custom markers */}
              <Line
                type='monotone'
                dataKey='hr'
                yAxisId='left'
                stroke='none'
                dot={(props): any => {
                  if (props.payload.time === '20:00') {
                    return (
                      <CustomMarker
                        cx={props.cx}
                        cy={props.cy}
                        color='var(--color-hr)'
                      />
                    );
                  }
                  return null;
                }}
              />
              <Line
                type='monotone'
                dataKey='rr'
                yAxisId='left'
                stroke='none'
                dot={(props): any => {
                  if (props.payload.time === '02:00') {
                    return (
                      <CustomMarker
                        cx={props.cx}
                        cy={props.cy}
                        color='var(--color-rr)'
                      />
                    );
                  }
                  return null;
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value, name) => {
                      if (name === 'hr' && value === 120) {
                        return 'HR 30% above baseline for 1 hour (20:33)';
                      }
                      return `${value}`;
                    }}
                    className='bg-slate-900 text-white border-slate-900'
                  />
                }
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
