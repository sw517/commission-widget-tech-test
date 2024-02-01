import getCommissionBreakdown from '@/helpers/getCommissionBreakdown';

describe('getCommissionBreakdown', () => {
  it('returns an object containing total (number) and breakdown (number array)', () => {
    const revenueGained = 18000;
    expect(getCommissionBreakdown(revenueGained)).toEqual(
      expect.objectContaining({
        total: 1850,
        breakdown: [0, 500, 750, 600, 0],
      })
    );
  });
});
