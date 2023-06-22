import { useCallback, useRef } from 'react';

export default function useMutable<T>(initialValue: T): [
  get: () => T,
  set: (value: T) => void,
] {
  const ref = useRef(initialValue);
  const get = useCallback(() => ref.current, []);
  const set = useCallback((value: T) => ref.current = value, []);
  return [ get, set ];
}
