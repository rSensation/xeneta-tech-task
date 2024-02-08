import { FC } from 'react';
import {
  CartesianGrid,
  CartesianGridProps,
  Line,
  LineChart,
  LineProps,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  XAxisProps,
  YAxis,
  YAxisProps,
} from 'recharts';

import { getAxisDomain, shortDateFormatter } from './helpers';

interface ChartProps {
  data?: Record<string, number>[];
  gridProps?: CartesianGridProps;
  xAxisPpops?: XAxisProps;
  yAxisProps?: YAxisProps;
  tooltipProps?: TooltipProps<number, string>;
  lineProps?: Omit<LineProps, 'ref'>;
}

const Chart: FC<ChartProps> = ({
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
      <Line
        type="stepAfter"
        dataKey="mean"
        stroke="#8884d8"
        dot={false}
        {...lineProps}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
