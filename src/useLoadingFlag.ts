import { useCallback, useRef, useState } from 'react';

export default function useLoadingFlag(): [
  loading: boolean,
  trackLoad: <T>(callable: () => Promise<T>) => Promise<T>,
] {
  const [ loading, setLoading ] = useState(false);
  const { current: pending } = useRef(new Set<Promise<unknown>>());

  const trackLoad = useCallback(async <T>(callable: () => Promise<T>) => {
    const promise = callable();
    if (pending.size === 0) setLoading(true);
    pending.add(promise);
    try {
      return await promise;
    } finally {
      pending.delete(promise);
      if (pending.size === 0) setLoading(false);
    }
  }, [pending]);

  return [ loading, trackLoad ];
}
