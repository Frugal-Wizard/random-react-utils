import { useCallback, useRef } from 'react';

export default function useFunctionRef<T extends (...args: unknown[]) => unknown>(init: T): [
  call: T,
  set: (value: T) => void,
] {
  const ref = useRef<T>(init);
  const call = useCallback((...args: Parameters<T>) => {
    return ref.current(...args);
  }, []) as T;
  const set = useCallback((value: T) => {
    ref.current = value;
  }, []);
  return [ call, set ];
}
