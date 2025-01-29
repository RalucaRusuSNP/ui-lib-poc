'use client';

import { useMemo } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';

const data = [
  {
    time: '16:00',
    hr: 90,
    rr: 85,
    motion: 95,
    resp: 2,
    inhale: 1,
    sleep: 3,
    rem: 2,
  },
  {
    time: '18:00',
    hr: 120,
    rr: 70,
    motion: 100,
    resp: 2,
    inhale: 2,
    sleep: 2,
    rem: 2,
  },
  {
    time: '20:00',
    hr: 95,
    rr: 80,
    motion: 75,
    resp: 2,
    inhale: 1,
    sleep: 0.1,
    rem: 0,
  },
  {
    time: '22:00',
    hr: 150,
    rr: 82,
    motion: 60,
    resp: 2,
    inhale: 2,
    sleep: 0.1,
    rem: 0,
    hrAlert: true,
  },
  {
    time: '00:00',
    hr: 92,
    rr: 95,
    motion: 55,
    resp: 2,
    inhale: 2,
    sleep: 0.1,
    rem: 1,
  },
  {
    time: '02:00',
    hr: 88,
    rr: 75,
    motion: 58,
    resp: 2,
    inhale: 1,
    sleep: 0.1,
    rem: 0,
    rrAlert: true,
  },
  {
    time: '04:00',
    hr: 95,
    rr: 65,
    motion: 50,
    resp: 2,
    inhale: 2,
    sleep: 0.1,
    rem: 0,
    motionAlert: true,
  },

  // Gap

  {
    time: '05:00',
    hr: null,
    rr: null,
    motion: null,
    resp: null,
    inhale: null,
    sleep: null,
    rem: null,
  },

  {
    time: '06:00',
    hr: null,
    rr: null,
    motion: null,
    resp: null,
    inhale: null,
    sleep: null,
    rem: null,
  },

  {
    time: '07:00',
    hr: null,
    rr: null,
    motion: null,
    resp: null,
    inhale: null,
    sleep: null,
    rem: null,
  },
  // Resume normal data
  {
    time: '08:00',
    hr: 85,
    rr: 90,
    motion: 80,
    resp: 2,
    inhale: 1,
    sleep: 0,
    rem: 0,
  },
  {
    time: '10:00',
    hr: 125,
    rr: 140,
    motion: 110,
    resp: 2,
    inhale: 2,
    sleep: 0,
    rem: 0,
  },
  {
    time: '12:00',
    hr: 115,
    rr: 120,
    motion: 100,
    resp: 2,
    inhale: 1,
    sleep: 0,
    rem: 0,
  },
  {
    time: '14:00',
    hr: 105,
    rr: 110,
    motion: 95,
    resp: 2,
    inhale: 2,
    sleep: 0,
    rem: 0,
  },
];

const CustomMarker = ({ cx, cy, payload }: any) => {
  let color = '';

  if (payload) {
    if (payload.hrAlert) {
      color = 'red';
    } else if (payload.rrAlert) {
      color = 'blue';
    } else if (payload.motionAlert) {
      color = 'var(--color-motion)';
    }

    if (color) {
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
    }
  }
  return null;
};

export default function TrendingOverviewMixedChart() {
  const chartHeight = 300;
  const sleepBarHeight = 20;
  const xAxisHeight = 20;
  const gapHeight = 40;

  const formattedData = useMemo(() => {
    return data.map((entry) => ({
      ...entry,
      sleepTotal: (entry.sleep || 0) + (entry.rem || 0),
    }));
  }, []);

  return (
    <Card style={{ width: '750px' }}>
      <CardHeader>
        <CardTitle>Trending overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className='relative m-0 p-0'
          style={{
            height: `${
              chartHeight + sleepBarHeight + xAxisHeight + gapHeight
            }px`,
          }}
        >
          <ChartContainer
            config={{
              hr: {
                label: 'HR continuous',
                color: 'red',
              },
              rr: {
                label: 'RR continuous',
                color: 'blue',
              },
              motion: {
                label: 'Motion index',
                color: 'orange',
              },
            }}
            style={{ paddingBottom: '20px', margin: 0 }}
          >
            <ResponsiveContainer
              width='100%'
              height='100%'
              className={'m-0 p-0'}
            >
              <ComposedChart
                data={data}
                margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
                barGap={0}
                barCategoryGap={0}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis axisLine={false} dataKey='time' tick={false} />
                <YAxis
                  stroke='#888888'
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  yAxisId='left'
                  domain={[0, 160]}
                />
                <YAxis
                  stroke='#888888'
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  yAxisId='right'
                  orientation='right'
                  domain={[0, 8]}
                />

                {/* Baselines */}
                <ReferenceLine
                  y={90}
                  yAxisId='left'
                  stroke='red'
                  strokeDasharray='3 3'
                />
                <ReferenceLine
                  y={60}
                  yAxisId='left'
                  stroke='blue'
                  strokeDasharray='3 3'
                />

                {/* Main metrics */}
                <Line
                  yAxisId='left'
                  type='monotone'
                  dataKey='hr'
                  stroke='var(--color-hr)'
                  dot={(props) => <CustomMarker {...props} />}
                  connectNulls={false}
                />
                <Line
                  yAxisId='left'
                  type='monotone'
                  dataKey='rr'
                  stroke='var(--color-rr)'
                  dot={(props) => <CustomMarker {...props} />}
                  connectNulls={false}
                />
                <Line
                  yAxisId='left'
                  type='monotone'
                  dataKey='motion'
                  stroke='var(--color-motion)'
                  dot={(props) => <CustomMarker {...props} />}
                  connectNulls={false}
                />

                {/* Respiratory measurements */}
                <Bar
                  yAxisId='right'
                  dataKey='resp'
                  fill='rgba(100, 149, 237, 0.3)'
                  barSize={12}
                  maxBarSize={12}
                  radius={[10, 10, 0, 0]}
                />
                <Bar
                  yAxisId='right'
                  dataKey='inhale'
                  fill='rgba(100, 149, 237, 0.5)'
                  barSize={12}
                  maxBarSize={12}
                  radius={[10, 10, 0, 0]}
                />
                <Tooltip />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartContainer>

          {/* Sleep stages */}
          <div
            className='absolute left-0 right-0'
            style={{
              margin: '0 auto',
              width: '82%',
              top: '91%',
            }}
          >
            {formattedData.map((entry, index) => {
              const width = `${100 / formattedData.length}%`;

              if (entry.sleep || entry.rem) {
                const sleepWidth = (entry.sleep / entry.sleepTotal) * 100;
                const remWidth = (entry.rem / entry.sleepTotal) * 100;

                return (
                  <div
                    key={`sleep-${index}`}
                    className='absolute h-full flex'
                    style={{
                      left: `${(index * 100) / formattedData.length}%`,
                      width: width,
                      margin: '0 auto',
                      display: 'flex',
                    }}
                  >
                    {/* Sleep */}
                    <div
                      className='bottom-0 left-0 h-full'
                      style={{
                        backgroundColor: 'rgba(144, 238, 144, 0.3)',
                        width: `${sleepWidth}%`,
                        height: '10px',
                        borderTopLeftRadius: index === 0 ? '5px' : '0px',
                        borderBottomLeftRadius: index === 0 ? '5px' : '0px',
                      }}
                    />
                    {/* REM */}
                    <div
                      className='bottom-0 left-0 h-full'
                      style={{
                        backgroundColor: 'rgba(34, 139, 34, 0.5)',
                        width: `${remWidth}%`,
                        height: '10px',
                        left: `${sleepWidth}%`,
                        borderTopLeftRadius: '5px',
                        borderBottomLeftRadius: '5px',
                      }}
                    />
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* X-axis labels */}
          <div
            className='absolute left-0 right-0 bottom-0 flex justify-between'
            style={{
              height: `${xAxisHeight}px`,
              margin: '0 auto',
              width: '82%',
              borderBottom: '1px solid gray',
            }}
          >
            {formattedData.map((entry, index) => (
              <div key={`label-${index}`} className='text-xs'>
                {entry.time}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
