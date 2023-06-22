import { ElementType, PropsWithChildren, ReactNode } from 'react';

export default function Nested({ components, children }: {
  components: ElementType<PropsWithChildren<{}>>[];
  children?: ReactNode;
}) {
  if (components.length) {
    const [ Component, ...rest ] = components;
    return <Component><Nested components={rest}>{children}</Nested></Component>;
  } else {
    return <>{children}</>;
  }
}
