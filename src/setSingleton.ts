import SingletonRegistry from './internal/SingletonRegistry';

export default function setSingleton<T>(initializer: () => T, value: T) {
  SingletonRegistry.set(initializer, value);
}
