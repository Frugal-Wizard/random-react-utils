import SharedState from './SharedState';

export default function createSharedState<T>(initialValue: T): SharedState<T> {
  let currentValue = initialValue;
  const listeners = new Set<(value: T) => void>();

  return {
    get() {
      return currentValue;
    },

    set(value) {
      currentValue = value;
      for (const listener of listeners) {
        listener(value);
      }
    },

    listen(callback) {
      listeners.add(callback);
      return () => listeners.delete(callback);
    },
  };
}
