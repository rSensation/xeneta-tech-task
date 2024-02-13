interface FetchOptions {
  apiKey?: string;
}

/**
 * Creates modified fetch which applies given options to the request
 * @param options options to apply on each featch
 * @returns result of the fetch request
 */
export const createFetchFromApi =
  (options?: FetchOptions) =>
  async (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ): Promise<Response> => {
    const headers = new Headers({ ...init?.headers });
    if (options?.apiKey) {
      headers.set('X-Api-Key', options.apiKey);
    }

    return await fetch(input, {
      ...init,
      headers,
    });
  };

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
