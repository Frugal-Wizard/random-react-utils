import { useEffect, useState } from 'react';
import SingletonRegistry from './internal/SingletonRegistry';

export default function useSingleton<T>(initializer: () => T) {
  const [ state, setState ] = useState<T>(() => SingletonRegistry.get(initializer));
  useEffect(() => {
    setState(SingletonRegistry.get(initializer));
    SingletonRegistry.subscribe(initializer, setState);
    return () => SingletonRegistry.unsubscribe(initializer, setState);
  // initializer should be stable
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return state;
}
