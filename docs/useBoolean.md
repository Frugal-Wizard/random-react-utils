# `useBoolean`

## How is this used?

```tsx
function SomeComponent() {
  const [ flag1, turnOff1, turnOn1 ] = useBoolean();
  const [ flag2, turnOff2, turnOn2 ] = useBoolean(true);

  return <>
    Flag 1 is {flag1 ? 'on' : 'off'}
    <br/>
    <button onClick={turnOff1}>Turn off</button>
    <button onClick={turnOn1}>Turn on</button>
    <br/>
    Flag 2 is {flag2 ? 'on' : 'off'}
    <br/>
    <button onClick={turnOff2}>Turn off</button>
    <button onClick={turnOn2}>Turn on</button>
  </>;
}
```
