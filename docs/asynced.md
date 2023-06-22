# `asynced`

## How is this used?

```typescript
useEffect(() => asynced(async (signal: AbortSignal, abort: () => {}) => {
  // signal is aborted on effect cleanup
  // use abort() if you need to abort early

  // ...

  // errorHandler is optional and should be used as a fallback
  // for handling unexpected errors

  // errorHandler won't be called when aborted
}, errorHandler), [/* ... */]);
```

## When is this useful?

### Using fetch to load data:

```typescript
useEffect(() => asynced(async (signal) => {
  // ...
  const response = await fetch(url, { signal });
  // ...
}), [/* ... */]);
```

### Calling an async API:

```typescript
useEffect(() => asynced(async (signal) => {
  try {
    // ...
    const data = await someAsyncAPI(signal);
    // ...
  } catch (error) {
    if (error instanceof SomeExpectedAPIError) {
      // ...
    } else {
      throw error;
    }
  }
}), [/* ... */]);
```

## Why use this instead of React's `<Suspense>`?

Because I don't like React's `<Suspense>` solution to async loading.

I don't like using language constructs meant for error handling for anything other than error handling (i.e. using `throw` with promises to signal that a component is not ready to render).

It also introduces unavoidable complexity to component design as you're forced to break apart your component logic into different pieces: a wrapper for `<Suspense>`, a loading state and a loaded state.
