import { FC } from 'react';

import { Option } from '../Dropdown';
import LineChart, { LineChartData, LineItem } from '../LineChart';
import TradeLaneDropdowns from './TradeLaneDropdowns';

import classes from './PriceRangeChart.module.scss';

interface PriceRangeChartProps {
  data?: LineChartData[];
  origins?: Option[];
  setOrigin?: (newValue?: string) => void;
  destinations?: Option[];
  setDestination?: (newValue?: string) => void;
  lines: LineItem[];
}

const PriceChangeChart: FC<PriceRangeChartProps> = ({
  origins,
  setOrigin,
  destinations,
  setDestination,
  data,
  lines,
}) => (
  <div className={classes.price_range__container}>
    <TradeLaneDropdowns
      origins={origins}
      setOrigin={setOrigin}
      destinations={destinations}
      setDestination={setDestination}
    />
    <div className={classes.price_range__chart}>
      <LineChart data={data} lines={lines} />
    </div>
  </div>
);

export default PriceChangeChart;
