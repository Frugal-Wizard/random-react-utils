import { useEffect, useState } from 'react';

export default function useUnmountSignal() {
  const [ abortController, setAbortController ] = useState<AbortController>();

  useEffect(() => {
    const abortController = new AbortController();
    setAbortController(abortController);
    return () => abortController.abort();
  }, []);

  return abortController?.signal;
}
