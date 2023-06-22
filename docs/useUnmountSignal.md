# `useUnmountSignal`

## How is this used?

```typescript
const unmountSignal = useUnmountSignal();
// unmountSignal will be undefined while not yet mounted
// unmountSignal will abort when component unmounts

// While running in dev server in strict mode, unmountSignal will be set twice
// and first signal will abort immediately.
```

## When is this useful?

### For aborting async callbacks if component unmounts:

```typescript
const unmountSignal = useUnmountSignal();

const asyncCallback = useCallback(async () => {
  // ...
  const response = await fetch(url, { signal: unmountSignal });
  // ...
}, [/* ... */, unmountSignal]);
```
