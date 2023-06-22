# `useFunctionRef`

## How is this used?

```typescript
const [ call, set ] = useFunctionRef<Type>(initialValue);
// call() calls the function
// set(value) changes the function
// both functions are stable
```

## When is this useful?

### Storing an stop callback for a background running process:

```typescript
const [ stop, setStop ] = useFunctionRef(noop);

const start = useCallback(() => {
  setStop(startBackgroundProcessWhichReturnsStopCallback());
}, []);
```
