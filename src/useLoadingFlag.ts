import { useCallback, useEffect, useRef, useState } from 'react';

export default function useLoadingFlag(trackMountAsLoad = false): [
  loading: boolean,
  trackLoad: <T>(callable: () => Promise<T>) => Promise<T>,
] {
  const [ loading, setLoading ] = useState(trackMountAsLoad);
  const pending = useRef(new Set<Promise<unknown>>());

  const trackLoad = useCallback(async <T>(callable: () => Promise<T>) => {
    const promise = callable();
    if (pending.current.size === 0) setLoading(true);
    pending.current.add(promise);
    try {
      return await promise;
    } finally {
      pending.current.delete(promise);
      if (pending.current.size === 0) setLoading(false);
    }
  }, []);

  useEffect(() => {
      if (pending.current.size === 0) setLoading(false);
  }, []);

  return [ loading, trackLoad ];
}
