import { useEffect, useState } from 'react';

import { fetchAllAirports } from '../api';
import { Option } from '../shared/components/Dropdown';
import LoaderScreen from '../shared/components/LoaderScreen';
import Chart from './Chart';

function Content() {
  const [airports, setAirports] = useState<Option[] | undefined>();

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
