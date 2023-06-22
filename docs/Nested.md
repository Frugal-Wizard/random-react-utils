# `Nested`

## How is this used?

```tsx
function SomeComponent() {
  return (
    <Nested components={[ Component1, Component2, Component3 ]}>
      {/* ... */}
    </Nested>
  );
}

// This is the same as:
function SomeComponent() {
  return (
    <Component1>
      <Component2>
        <Component3>
          {/* ... */}
        </Component3>
      </Component2>
    </Component1>
  );
}
```
