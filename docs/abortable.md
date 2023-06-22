# `abortable`

## How is this used?

```typescript
useEffect(() => abortable((signal: AbortSignal, abort: () => {}) => {
  // signal is aborted on effect cleanup
  // use abort() if you need to abort early
  // ...
}), [/* ... */]);
```

## When is this useful?

### Setting up event listeners:

```typescript
useEffect(() => abortable(signal => {
  // ...
  eventTarget.addEventListener('eventType', () => {
    // ...
  }, { signal });
  // ...
}), [/* ... */]);
```
