import getCommissionBreakdown from './getCommissionBreakdown';
import { CommissionBreakdown } from '@/types/commission';

export const mockFetchDelay = 2500;

export default function mockFetch(
  _url: string,
  input: number,
  apiError?: boolean
): Promise<{ json: () => Promise<CommissionBreakdown> }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (apiError) {
        reject('Something went wrong. Please try again.');
      }

      return resolve({
        json: (): Promise<CommissionBreakdown> => {
          return new Promise((resolve) => {
            return resolve(getCommissionBreakdown(input));
          });
        },
      });
    }, mockFetchDelay);
  });
}
