import PriceChangeChart from '../shared/PriceChangeChart';

import classes from './Chart.module.scss';

const data = [
  {
    day: new Date('2023-01-01').valueOf(),
    mean: 910,
    low: 850,
    high: 1020,
  },
  {
    day: new Date('2023-01-08').valueOf(),
    mean: 915,
    low: 850,
    high: 1020,
  },
  {
    day: new Date('2023-01-10').valueOf(),
    mean: 910,
    low: 850,
    high: 1020,
  },
  {
    day: new Date('2023-01-12').valueOf(),
    mean: 907,
    low: 850,
    high: 1020,
  },
  {
    day: new Date('2023-01-15').valueOf(),
    mean: 918,
    low: 850,
    high: 1020,
  },
  {
    day: new Date('2023-01-16').valueOf(),
    mean: 917,
    low: 850,
    high: 1020,
  },
  {
    day: new Date('2023-01-24').valueOf(),
    mean: 917,
    low: 850,
    high: 1020,
  },
];

const Chart = () => (
  <PriceChangeChart
    data={data}
    chartContainerClassName={classes.chart_container}
  />
);

export default Chart;
