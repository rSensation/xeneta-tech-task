import { useCallback, useEffect, useRef, useState } from 'react';

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
