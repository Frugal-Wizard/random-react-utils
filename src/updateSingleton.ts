import SingletonRegistry from './internal/SingletonRegistry';

export default function updateSingleton<T>(initializer: () => T, updater: (prev: T) => T) {
  SingletonRegistry.set(initializer, updater(SingletonRegistry.get(initializer)));
}
