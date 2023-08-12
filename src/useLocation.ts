import { useEffect, useState } from 'react'
import abortable from './abortable';

export default function useLocation() {
  const [ location, setLocation ] = useState(() => new URL(document.location.href));

  useEffect(() => abortable(signal => {
    setLocation(new URL(document.location.href));
    window.addEventListener('popstate', () => {
      setLocation(new URL(document.location.href));
    }, { signal });
  }), []);

  return location;
}
