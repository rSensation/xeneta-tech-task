import { useEffect, useState } from 'react';
import { LoaderScreen, DropdownOption } from '@xeneta/common/components';

import { fetchAllPorts } from '../api';
import Chart from './Chart';

function Content() {
  const [ports, setPorts] = useState<DropdownOption[] | undefined>();

  const getPorts = async () => {
    const response = await fetchAllPorts();
    setPorts(
      response.map(({ code, name }) => ({
        value: code,
        label: name,
      }))
    );
  };

  useEffect(() => {
    getPorts();
  }, []);

  if (!ports) {
    return <LoaderScreen />;
  }

  return <Chart ports={ports} />;
}

export default Content;
