interface RegistryRecord<T> {
  value: T;
  listeners: Set<(value: T) => void>;
}

const registry = new Map() as {
  get<T>(initializer: () => T): RegistryRecord<T> | undefined;
  set<T>(initializer: () => T, record: RegistryRecord<T>): void;
};

function get<T>(initializer: () => T): T {
  const record = registry.get(initializer);
  if (record) {
    return record.value;
  } else {
    const value = initializer();
    registry.set(initializer, { value, listeners: new Set() });
    return value;
  }
}

function set<T>(initializer: () => T, value: T): void {
  const record = registry.get(initializer);
  if (record) {
    if (record.value !== value) {
      record.value = value;
      for (const listener of record.listeners) {
        listener(value);
      }
    }
  } else {
    registry.set(initializer, {
      value,
      listeners: new Set(),
    });
  }
}

function subscribe<T>(initializer: () => T, listener: (value: T) => void): void {
  const record = registry.get(initializer);
  if (record) {
    record.listeners.add(listener);
  } else {
    registry.set(initializer, {
      value: initializer(),
      listeners: new Set([ listener ]),
    });
  }
}

function unsubscribe<T>(initializer: () => T, listener: (value: T) => void): void {
  const record = registry.get(initializer);
  if (record) {
    record.listeners.delete(listener);
  }
}

const SingletonRegistry = { get, set, subscribe, unsubscribe };

export default SingletonRegistry;
