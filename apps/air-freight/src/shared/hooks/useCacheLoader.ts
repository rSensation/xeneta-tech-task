import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Loads data from the server and saves it in the cache to avoid unnecessary reloads 
 * @param fetchFn a callback to load data when it's not available in the cache
 * @param cacheKey a key of an item to look up in the cache
 * @returns the data corresponding to the given key
 */
const useCacheLoader = <T>(fetchFn: () => Promise<T>, cacheKey: string) => {
  const cache = useRef<Record<string, T>>({});
  const [selected, setSelected] = useState<T>();

  const loadData = useCallback(async () => {
    const data = await fetchFn();
    cache.current[cacheKey] = data;
    setSelected(data);
  }, [cacheKey, fetchFn]);

  useEffect(() => {
    const data = cache.current[cacheKey];
    if (data) {
      setSelected(data);
    } else {
      loadData();
    }
  }, [cacheKey, loadData]);

  return selected;
};

export default useCacheLoader;
