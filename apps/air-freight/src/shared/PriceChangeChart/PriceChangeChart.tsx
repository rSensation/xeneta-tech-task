import { FC } from 'react';

import Chart from '../Chart';

interface PriceRangeChartProps {
  data?: Record<string, number>[];
  chartContainerClassName?: string;
}

const PriceChangeChart: FC<PriceRangeChartProps> = ({
  data,
  chartContainerClassName,
}) => (
  <div>
    <div className={chartContainerClassName}>
      <Chart data={data} />
    </div>
  </div>
);

export default PriceChangeChart;
