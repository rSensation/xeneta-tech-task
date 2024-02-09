import { FC, useState } from 'react';
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

import { LineItem } from './types';

import Legend from './Legend';
import { getAxisDomain, shortDateFormatter } from './helpers';

import classes from './LineChart.module.scss';

interface ChartProps {
  lines: LineItem[];
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
  lines,
}) => {
  const [active, setActive] = useState<Record<string, boolean>>(
    lines.reduce((res, { id }) => ({ ...res, [id]: true }), {})
  );

  const onLegendClick = (id: string) =>
    setActive({
      ...active,
      [id]: !active[id],
    });

  return (
    <div className={classes.chart__container}>
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
      <Legend items={lines} active={active} onClick={onLegendClick} />
    </div>
  );
};

export default Chart;
