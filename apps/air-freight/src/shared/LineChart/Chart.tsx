import { FC } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { CommonChartProps } from './types';

import { getAxisDomain, shortDateFormatter } from './helpers';

export interface ChartProps extends CommonChartProps {
  active: Record<string, boolean>;
}

const Chart: FC<ChartProps> = ({
  lines,
  active,
  data,
  gridProps,
  xAxisPpops,
  yAxisProps,
  tooltipProps,
  lineProps,
}) => (
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={data}>
      <CartesianGrid vertical={false} strokeOpacity={0.5} {...gridProps} />
      <XAxis
        dataKey="day"
        scale="time"
        type="number"
        axisLine={false}
        tickLine={false}
        tickFormatter={shortDateFormatter}
        domain={['dataMin', 'dataMax']}
        {...xAxisPpops}
      />
      <YAxis
        type="number"
        axisLine={false}
        tickLine={false}
        tickFormatter={(value) => `$ ${value}`}
        domain={getAxisDomain}
        {...yAxisProps}
      />
      <Tooltip labelFormatter={shortDateFormatter} {...tooltipProps} />
      {lines.map(({ id, color }) => (
        <Line
          key={id}
          type="stepAfter"
          dataKey={id}
          stroke={color}
          dot={false}
          hide={!active[id]}
          {...lineProps}
        />
      ))}
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
