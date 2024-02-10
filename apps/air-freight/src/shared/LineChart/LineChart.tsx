import { FC, useState } from 'react';

import { CommonChartProps } from './types';

import Chart from './Chart';
import Legend from './Legend';

import classes from './LineChart.module.scss';

const LineChart: FC<CommonChartProps> = ({
  lines,
  ...props
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
      <Chart lines={lines} active={active} {...props} />
      <Legend items={lines} active={active} onClick={onLegendClick} />
    </div>
  );
};

export default LineChart;
