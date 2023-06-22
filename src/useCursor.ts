import { useCallback, useState } from 'react';

export default function useCursor(start: number, end: number, step: number): [
  cursor:  number,
  hasPrev: boolean,
  hasNext: boolean,
  prev:    () => void,
  next:    () => void,
  goTo:    (index: number) => void,
] {
  const [ cursor, setCursor ] = useState(start);

  const clamped = clamp(cursor, start, end, step);

  if (clamped !== cursor) setCursor(clamped);

  const hasPrev = clamped - step >= start;
  const hasNext = clamped + step <= end;

  const prev = useCallback(() => setCursor(cursor => cursor - step), [step]);
  const next = useCallback(() => setCursor(cursor => cursor + step), [step]);
  const goTo = setCursor;

  return [ clamped, hasPrev, hasNext, prev, next, goTo ];
}

function clamp(cursor: number, start: number, end: number, step: number): number {
  if (cursor <= start || end <= start) {
    return start;
  } else if (cursor >= end) {
    return step > 1 ? end - (end - start) % step : end;
  } else {
    return step > 1 ? cursor - (cursor - start) % step : cursor;
  }
}
