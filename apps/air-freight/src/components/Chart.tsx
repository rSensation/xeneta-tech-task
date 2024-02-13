import { FC, useState } from 'react';

import { fetchAllRates } from '../api';
import { Option } from '../shared/components/Dropdown';
import PriceChangeChart from '../shared/components/PriceChangeChart';
import useCacheLoader from '../shared/hooks/useCacheLoader';

const lines = [
  {
    id: 'low',
    label: 'Market Low',
    color: '#CEA438',
  },
  {
    id: 'mean',
    label: 'Market Average',
    color: '#BF96FF',
  },
  {
    id: 'high',
    label: 'Market High',
    color: '#63D9B6',
  },
];

interface ChartProps {
  airports: Option[];
}

const Chart: FC<ChartProps> = ({ airports }) => {
  const [origin, setOrigin] = useState<string>();
  const [destination, setDestination] = useState<string>();

  const getRatesByLocations = async () => {
    if (!origin || !destination || origin === destination) {
      return;
    }

    const response = await fetchAllRates(origin, destination);
    return response.map(({ day, ...rates }) => ({
      ...rates,
      day: new Date(day).valueOf(),
    }));
  };
  const data = useCacheLoader(getRatesByLocations, `${origin}-${destination}`);

  return (
    <PriceChangeChart
      origins={airports}
      setOrigin={setOrigin}
      destinations={airports}
      setDestination={setDestination}
      data={data}
      lines={lines}
    />
  );
};

export default Chart;
