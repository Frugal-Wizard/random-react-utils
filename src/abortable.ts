export default function abortable(callable: (signal: AbortSignal, abort: () => void) => void) {
  const abortController = new AbortController();
  const { signal } = abortController;
  const abort = () => abortController.abort();
  callable(signal, abort);
  return abort;
}
