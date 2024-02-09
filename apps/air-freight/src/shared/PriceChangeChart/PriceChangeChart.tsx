import { FC } from 'react';

import Chart from '../Chart';
import { Option } from '../Dropdown';
import TradeLaneDropdowns from './TradeLaneDropdowns';

import classes from './PriceRangeChart.module.scss';

interface PriceRangeChartProps {
  data?: Record<string, number>[];
  origins?: Option[];
  setOrigin?: (newValue?: string) => void;
  destinations?: Option[];
  setDestination?: (newValue?: string) => void;
}

const PriceChangeChart: FC<PriceRangeChartProps> = ({
  origins,
  setOrigin,
  destinations,
  setDestination,
  data,
}) => (
  <div className={classes.price_range__container}>
    <TradeLaneDropdowns
      origins={origins}
      setOrigin={setOrigin}
      destinations={destinations}
      setDestination={setDestination}
    />
    <div className={classes.price_range__chart}>
      <Chart data={data} />
    </div>
  </div>
);

export default PriceChangeChart;
