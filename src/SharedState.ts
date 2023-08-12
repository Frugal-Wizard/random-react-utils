import ReadonlySharedState from './ReadonlySharedState';

export default interface SharedState<T> extends ReadonlySharedState<T> {
  readonly set: (value: T) => void;
}
