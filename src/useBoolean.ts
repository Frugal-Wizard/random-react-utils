import { useCallback, useState } from 'react';

export default function useBoolean(initialState = false): [
  state: boolean,
  setFalse: () => void,
  setTrue: () => void,
] {
  const [ state, setState ] = useState(initialState);
  const setFalse = useCallback(() => setState(false), []);
  const setTrue = useCallback(() => setState(true), []);
  return [ state, setFalse, setTrue ];
}
