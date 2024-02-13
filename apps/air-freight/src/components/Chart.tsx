import { FC, useState } from 'react';
import { PriceRangeChart, DropdownOption } from '@xeneta/common/components';
import { useCacheLoader } from '@xeneta/common/hooks';

import { fetchAllRates } from '../api';

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
  airports: DropdownOption[];
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
    <PriceRangeChart
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
