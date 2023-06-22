import abortable from './abortable';

export default function asynced(
  callable: (signal: AbortSignal, abort: () => void) => Promise<void>,
  errorHandler: (error: unknown) => void = throwError,
) {
  return abortable(async (signal, abort) => {
    try {
      await callable(signal, abort);
    } catch (error) {
      if (!signal.aborted) {
        errorHandler(error);
      }
    }
  });
}

function throwError(error: unknown): never {
  throw error;
}
