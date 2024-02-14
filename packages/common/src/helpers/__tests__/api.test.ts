import { beforeEach } from 'node:test';
import { Mock, afterAll, describe, expect, test, vi } from 'vitest';

import { createFetchFromApi, getUrlWithQueryParams } from '../api';

describe('api helpers', () => {
  describe('createFetchFromApi', () => {
    const fetchOriginal = fetch;
    global.fetch = vi.fn();

    beforeEach(() => {
      (global.fetch as Mock).mockReset();
    });
    afterAll(() => {
      global.fetch = fetchOriginal;
    });

    test('calls original fetch', async () => {
      const fetchFn = createFetchFromApi();
      await fetchFn('test-url');
      expect(global.fetch).toBeCalled();
    });

    test('if apiKey is provided, apply it to headers', async () => {
      const apiKey = 'test-key';
      const testHeaders = { method: 'test' };

      global.fetch = vi
        .fn()
        .mockImplementation((_, { headers }) => Promise.resolve(headers));

      const fetchFn = createFetchFromApi({ apiKey }) as Mock;
      const headers = await fetchFn('test-url', testHeaders);
      expect(headers.get('x-api-key')).toEqual(apiKey);
    });
  });

  describe('getUrlWithQueryParams', () => {
    test('returns the same url with no query params', () => {
      const url = 'https://test.com';
      expect(getUrlWithQueryParams(url)).toBe(url);
    });

    test('returns correct url with query params', () => {
      const url = 'https://test.com';
      expect(getUrlWithQueryParams(url, { a: '1', b: '2' })).toBe(
        `${url}?a=1&b=2`
      );
    });
  });
});
