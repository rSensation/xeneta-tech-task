import {
  createFetchFromApi,
  getUrlWithQueryParams,
} from '@xeneta/common/helpers';

import { PortResponse, RateResponse } from '../types';

const API_URL = import.meta.env.DEV ? './api' : import.meta.env.VITE_API_URL;

const fetchFromApi = createFetchFromApi({
  apiKey: import.meta.env.VITE_API_KEY,
});

export const fetchAllPorts = async (): Promise<PortResponse[]> => {
  const response = await fetchFromApi(`${API_URL}/ports`);
  return await response.json();
};

export const fetchAllRates = async (
  origin: string,
  destination: string
): Promise<RateResponse[]> => {
  const url = getUrlWithQueryParams(`${API_URL}/rates`, {
    origin,
    destination,
  });
  const response = await fetchFromApi(url);
  return await response.json();
};
