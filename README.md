# README

## What is this?

This is compilation of random utilities for building React apps.

## Should I use this?

Currently it's not to be considered stable.

Use at your own discretion and don't rely on anything staying backward compatible.

## What utilities are included here?

* [`abortable`](docs/abortable.md)

  > A wrapper for effects that use an `AbortSignal`.

* [`asynced`](docs/asynced.md)

  > A wrapper for async effects.

* [`Nested`](docs/Nested.md)

  > A component that handles nesting multiple no args components.

* [`nonexistent`](docs/nonexistent.md)

  > A symbol/type to mark state as non-existent.

* `noop`

  > An empty function. Useful when such a function is required and it being a stable value is preferable.

* [`onClickOutside`](docs/onClickOutside.md)

  > A helper for setting up listener to clicks that happen outside an element.

* [`pending`](docs/pending.md)

  > A symbol/type to mark state as pending.

* [`preventDefault`](docs/preventDefault.md)

  > A function that calls `preventDefault` on its first argument. Useful for some use cases with event handlers.

* [`pushState`](docs/pushState.md)

  > A function to push an url/state into navigation history. Also triggers the corresponding `popstate` event.

* [`useBoolean`](docs/useBoolean.md)

  > An `useState` alternative for boolean flags.

* [`useBooleanToggle`](docs/useBooleanToggle.md)

  > Another `useState` alternative for boolean flags.

* [`useCursor`](docs/useCursor.md)

  > A `useState` alternative for handling cursors over numerically indexed lists (e.g. pagination).

* [`useFunctionRef`](docs/useFunctionRef.md)

  > A mutable function reference. Useful when you need to keep a callback for later without keeping it as part of the component state.

* [`useLoadingFlag`](docs/useLoadingFlag.md)

  > A hook for dynamically keeping track of one or more `Promises` and providing a flag that indicates whether there are pending `Promises` or not.

* [`useLocation`](docs/useLocation.md)

  > Returns the current URL and causes the component to rerender when it changes. Useful to handle URL routing yourself.

* [`useMediaQuery`](docs/useMediaQuery.md)

  > Indicates whether the current viewport matches a media query and causes a rerender if the condition changes.

* [`useMutable`](docs/useMutable.md)

  > A hook for handling a mutable value. Useful for keeping track of data during the component lifecycle that does not need to be part of the component state.

* [`useResizeDetect`](docs/useResizeDetect.md)

  > A flag which indicates when the viewport is view resized.

* [`useSharedState`](docs/useSharedState.md)

  > A way for components to share state and/or prevent unnecessary rerenders and coupling between parent and child components.

* [`useSingleton`](docs/useSingleton.md)

  > An alternative to React's `useContext`.

* [`useUnmountSignal`](docs/useUnmountSignal.md)

  > An `AbortSignal` that triggers when the component unmounts. Useful for async callbacks that need to be aborted when the component unmounts.
