import getCommissionBreakdown from '@/helpers/getCommissionBreakdown';
import { Bracket } from '@/types/commission';

describe('Helpers', () => {
  describe('getCommissionBreakdown', () => {
    const revenueGained = 18000;
    expect(getCommissionBreakdown(revenueGained)).toEqual(
      expect.objectContaining({
        total: 1850,
        breakdown: {
          [Bracket.ONE]: 0,
          [Bracket.TWO]: 500,
          [Bracket.THREE]: 750,
          [Bracket.FOUR]: 600,
          [Bracket.FIVE]: 0,
        },
      })
    );
  });
});
