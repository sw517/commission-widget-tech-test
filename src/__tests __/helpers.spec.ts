import getCommissionBreakdown from '@/helpers/getCommissionBreakdown';

describe('Helpers', () => {
  test('getCommissionBreakdown', () => {
    const revenueGained = 18000;
    expect(getCommissionBreakdown(revenueGained)).toEqual(
      expect.objectContaining({
        total: 1850,
        breakdown: [0, 500, 750, 600, 0],
      })
    );
  });
});
