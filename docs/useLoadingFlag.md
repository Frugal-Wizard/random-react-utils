# `useLoadingFlag`

## How is this used?

```tsx
function SomeComponent() {
  const [ loading, trackLoad ] = useLoadingFlag();
  // trackLoad is stable

  // void is neeeded here to ignore returned promise
  useEffect(() => void trackLoad(async () => {
    // ...
  }), [/* ... */]);

  // alternatively you can use asynced which also provides an abort signal
  useEffect(() => asynced(signal => trackLoad(async () => {
    // ...
  })), [/* ... */]);

  const asyncCallback = useCallback(() => trackLoad(async () => {
    // ...
  }), [/* ... */]);

  return <>
    {/* ... loading will be true here if component is loading something ... */}
  </>;
}
```
