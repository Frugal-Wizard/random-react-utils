# `useBooleanToggle`

## How is this used?

```tsx
function SomeComponent() {
  const [ flag1, toggle1 ] = useBooleanToggle();
  const [ flag2, toggle2 ] = useBooleanToggle(true);

  return <>
    Flag 1 is {flag1 ? 'on' : 'off'}
    <br/>
    <button onClick={toggle1}>Toggle</button>
    <br/>
    Flag 2 is {flag2 ? 'on' : 'off'}
    <br/>
    <button onClick={toggle2}>Toggle</button>
  </>;
}
```
