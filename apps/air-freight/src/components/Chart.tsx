import { useEffect, useState } from 'react';

import PriceChangeChart from '../shared/PriceChangeChart';

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

const locations = [
  {
    value: 'JFK',
    label: 'New York',
  },
  {
    value: 'JFK1',
    label: 'New York1',
  },
  {
    value: 'JFK2',
    label: 'New York2',
  },
  {
    value: 'JFK3',
    label: 'New York3',
  },
];

const lines = [
  {
    id: 'low',
    label: 'Market Low',
    color: '#CEA438'
  },
  {
    id: 'mean',
    label: 'Market Average',
    color: '#BF96FF'
  },
  {
    id: 'high',
    label: 'Market High',
    color: '#63D9B6'
  },
];

const Chart = () => {
  const [origin, setOrigin] = useState<string>();
  const [destination, setDestination] = useState<string>();

  useEffect(
    () => console.log(`${origin}-${destination}`),
    [origin, destination]
  );

  // const origins = useMemo(
  //   () => locations.filter(({ value }) => value !== destination),
  //   [destination]
  // );
  // const destinations = useMemo(
  //   () => locations.filter(({ value }) => value !== origin),
  //   [origin]
  // );

  return (
    <PriceChangeChart
      origins={locations}
      setOrigin={setOrigin}
      destinations={locations}
      setDestination={setDestination}
      data={data}
      lines={lines}
    />
  );
};

export default Chart;
