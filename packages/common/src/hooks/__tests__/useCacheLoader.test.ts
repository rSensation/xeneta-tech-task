import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import useCacheLoader from '../useCacheLoader';

describe('useCacheLoader', () => {
  test('fetches data if cache is empty', async () => {
    const cacheKey = 'key 1';
    const data = 'fetched data 1';
    const fetchFn = vi.fn().mockResolvedValueOnce(data);

    const { result, rerender } = renderHook(
      ({ cacheKey }) => useCacheLoader(fetchFn, cacheKey),
      { initialProps: { cacheKey } }
    );
    await waitFor(() => rerender({ cacheKey }));

    expect(result.current).toBe(data);
  });

  test('fetches new data on cacheKey change', async () => {
    const cacheKey = 'key 2';
    const data = 'fetched data 2';
    const fetchFn = vi
      .fn()
      .mockResolvedValueOnce('feftched data 1')
      .mockResolvedValueOnce(data);

    const { result, rerender } = renderHook(
      ({ cacheKey }) => useCacheLoader(fetchFn, cacheKey),
      { initialProps: { cacheKey: 'key 1' } }
    );
    await waitFor(() => rerender({ cacheKey }));

    expect(result.current).toBe(data);
  });

  test('returns value from cache if available', async () => {
    const cacheKey = 'key 1';
    const data = 'fetched data 1';
    const fetchFn = vi
      .fn()
      .mockResolvedValueOnce(data)
      .mockResolvedValueOnce('feftched data 2');

    const { result, rerender } = renderHook(
      ({ cacheKey }) => useCacheLoader(fetchFn, cacheKey),
      { initialProps: { cacheKey } }
    );
    await waitFor(() => rerender({ cacheKey: 'key 2' }));
    fetchFn.mockClear();
    await waitFor(() => rerender({ cacheKey }));

    expect(fetchFn).not.toBeCalled();
    expect(result.current).toBe(data);
  });
});
