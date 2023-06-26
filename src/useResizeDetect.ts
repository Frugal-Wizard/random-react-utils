import { useEffect, useState } from 'react';
import abortable from './abortable';

export default function useResizeDetect() {
  const [ resizing, setResizing ] = useState(false);

  useEffect(() => abortable(signal => {
    let timeout: ReturnType<typeof setTimeout>;

    window.addEventListener('resize', () => {
      clearTimeout(timeout);
      setResizing(true);
      timeout = setTimeout(() => {
        setResizing(false);
      }, 100);
    }, { signal });
  }), []);

  return resizing;
}
