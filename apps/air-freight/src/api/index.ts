import { fetchFromApi, getUrlWithQueryParams } from '../shared/helpers/api';
import { AirportResponse, RateResponse } from '../types';

const API_URL = import.meta.env.DEV ? './api' : import.meta.env.VITE_API_URL;

export const fetchAllAirports = async (): Promise<AirportResponse[]> => {
  const response = await fetchFromApi(`${API_URL}/airports`);
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
