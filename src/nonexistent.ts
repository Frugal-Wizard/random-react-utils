const nonexistent = Symbol('nonexistent');

// eslint-disable-next-line @typescript-eslint/no-redeclare
type nonexistent = typeof nonexistent;

export default nonexistent;
