import getCommissionBreakdown from '@/helpers/getCommissionBreakdown';
import kFormat from '@/helpers/kFormat';

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

  test('kFormat', () => {
    expect(kFormat(66)).toBe('66');
    expect(kFormat(-589)).toBe('-589');
    expect(kFormat(1000)).toBe('1k');
    expect(kFormat(50550)).toBe('50.55k');
    expect(kFormat(-75000)).toBe('-75k');
    expect(kFormat(9999999)).toBe('9,999,999');
  });
});
