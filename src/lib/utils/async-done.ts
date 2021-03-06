/**
 * @module utils/async-done
 */

/** (Placeholder comment, see TypeStrong/typedoc#603) */

import _asyncDone from "async-done";

/**
 * Converts an async task of any kind (callback, promise, observable) to a promise.
 *
 * Promise-based wrapper for the `async-done` package.
 *
 * @param fn An async task supported by `async-done`.
 * @return Promise for the task result.
 */
export async function asyncDone<R = any>(fn: _asyncDone.AsyncTask<R>): Promise<R> {
  return new Promise((resolve, reject) => {
    _asyncDone(fn, (err: Error | null | undefined, result: R) => {
      if (err === undefined || err === null) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
}
