import { useEffect, useState } from 'react';
import { LoaderScreen, DropdownOption } from '@xeneta/common/components';

import { fetchAllAirports } from '../api';
import Chart from './Chart';

function Content() {
  const [airports, setAirports] = useState<DropdownOption[] | undefined>();

  const getAirports = async () => {
    const response = await fetchAllAirports();
    setAirports(
      response.map(({ code, name }) => ({
        value: code,
        label: name,
      }))
    );
  };

  useEffect(() => {
    getAirports();
  }, []);

  if (!airports) {
    return <LoaderScreen />;
  }

  return <Chart airports={airports} />;
}

export default Content;
