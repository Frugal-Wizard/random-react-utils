# `useCursor`

## How is this used?

```tsx
function SomeComponent() {
  const pages = [ /* ... */ ];

  const [ cursor, hasPrev, hasNext, prev, next, goTo ] =
    useCursor(0, cursor.length-1, 1); // start, end, step

  // cursor will always be a value between <start> and <end> at <step> increments
  // if start, end or step change, the cursor will be adjusted accordingly

  const page = pages[cursor];

  return <>
    {/* ... */}
    { hasPrev && <button onClick={prev}>Prev</button> }
    {[...pages.keys()].map(index =>
      <button key={index} onClick={() => goTo(index)}>{index}</button>
    )}
    { hasNext && <button onClick={next}>Next</button> }
  </>;
}
```
