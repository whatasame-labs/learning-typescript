import {asyncFetch, asyncFetchWithError, delay} from './async';

describe('asyncFetch', () => {
  it('should resolve with correct data', async () => {
    /* given */
    const startTime = Date.now();

    /* when & then */
    expect(await asyncFetch()).toBe('Data fetched successfully');
    expect(Date.now() - startTime).toBeGreaterThanOrEqual(delay);
  });

  it('should reject with error', async () => {
    /* given */
    const startTime = Date.now();

    /* when & then */
    await expect(asyncFetchWithError()).rejects.toEqual('Error');
    expect(Date.now() - startTime).toBeGreaterThanOrEqual(delay);
  });
});
