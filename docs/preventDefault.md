# `preventDefault`

## How is this used?

```tsx
function SomeComponent() {
  // ...
  return (
    <div onDragOver={preventDefault} onDrop={onDrop}>
      {/* ... */}
    </div>
  );
}
```
