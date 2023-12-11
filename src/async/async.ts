/**
 * Represents the delay in milliseconds.
 *
 * @type {number}
 */
export const delay: number = 300;

/**
 * Fetches data asynchronously.
 *
 * @returns {Promise<string>} A promise that resolves to a string containing the fetched data.
 */
export function asyncFetch(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, delay);
  });
}

/**
 * Makes an asynchronous fetch request with error.
 *
 * @async
 * @function asyncFetchWithError
 * @returns {Promise<string>} - A Promise that resolves to a string or rejects with an error message.
 */
export function asyncFetchWithError(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error');
    }, delay);
  });
}
