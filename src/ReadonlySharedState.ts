export default interface ReadonlySharedState<T> {
  readonly get: () => T;
  readonly listen: (listener: (value: T) => void) => () => void;
}
