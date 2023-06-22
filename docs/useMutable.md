# `useMutable`

## How is this used?

```typescript
const [ get, set ] = useMutable<Type>(initialValue);
// get() returns the current value
// set(value) changes the current value
// both functions are stable
```

## When is this useful?

### For storing volatile data between events (e.g. drag offset):

```typescript
const [ getDragOffset, setDragOffset ] = useMutable({ x: 0, y: 0 });

const onDragStart = useCallback((event: DragEvent) => {
  // ...
  setDragOffset(offset);
  // ...
}, [/* ... */]);

const onDragEnd = useCallback((event: DragEvent) => {
  // ...
  const offset = getDragOffset();
  // ...
}, [/* ... */]);
```
