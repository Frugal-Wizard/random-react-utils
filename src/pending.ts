const pending = Symbol('pending');

// eslint-disable-next-line @typescript-eslint/no-redeclare
type pending = typeof pending;

export default pending;
