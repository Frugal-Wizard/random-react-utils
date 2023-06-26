import SingletonRegistry from './internal/SingletonRegistry';

export default function getSingleton<T>(initializer: () => T): T {
  return SingletonRegistry.get(initializer);
}
