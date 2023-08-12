import { useEffect, useState } from 'react';
import ReadonlySharedState from './ReadonlySharedState';

export default function useSharedState<T>(sharedState: ReadonlySharedState<T>) {
  const [ localValue, setLocalValue ] = useState(sharedState.get());

  useEffect(() => {
    setLocalValue(sharedState.get());

    return sharedState.listen(sharedValue => {
      setLocalValue(sharedValue);
    });
  }, [sharedState]);

  return localValue;
}
