import { useEffect, useState } from 'react';
import abortable from './abortable';

export default function useMediaQuery(query: string): boolean {
  const [ matches, setMatches ] = useState(() => matchMedia(query).matches);

  useEffect(() => abortable(signal => {
    const mediaQuery = matchMedia(query);

    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener('change', event => {
      setMatches(event.matches);
    }, { signal });
  }), [query]);

  return matches;
}
