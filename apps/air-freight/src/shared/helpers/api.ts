const apiHeaders = {
  'X-Api-Key': import.meta.env.VITE_API_KEY,
};
/**
 * Applies shared headers to the regular fetch request
 * @param input Fetch Request object or a url
 * @param init Fetch Request parameters
 * @returns the result of fetch call
 */
export const fetchFromApi = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): Promise<Response> =>
  await fetch(input, {
    ...init,
    headers: new Headers({
      ...init?.headers,
      ...apiHeaders,
    }),
  });

/**
 * Appends given query parameters to the url
 * @param url a string of the url
 * @param params query parameters as a string map
 * @returns the url with query parameters
 */
export const getUrlWithQueryParams = (
  url: string,
  params?: Record<string, string>
) => `${url}?${new URLSearchParams(params)}`;
