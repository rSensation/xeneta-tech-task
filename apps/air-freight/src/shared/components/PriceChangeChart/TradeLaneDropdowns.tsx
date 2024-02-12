import { FC } from 'react';

import Dropdown, { Option } from '../Dropdown';
import { ExchangeIcon } from '../Icons';

import classes from './PriceRangeChart.module.scss';

interface TradeLaneDropdownsProps {
  origins?: Option[];
  setOrigin?: (newValue?: string) => void;
  destinations?: Option[];
  setDestination?: (newValue?: string) => void;
}

const TradeLaneDropdowns: FC<TradeLaneDropdownsProps> = ({
  origins,
  setOrigin,
  destinations,
  setDestination,
}) => (
  <div className={classes.price_range__dropdowns}>
    <Dropdown
      className={classes.price_range__dropdown}
      options={origins}
      onChange={setOrigin}
    />
    <ExchangeIcon />
    <Dropdown
      className={classes.price_range__dropdown}
      options={destinations}
      onChange={setDestination}
    />
  </div>
);

export default TradeLaneDropdowns;
