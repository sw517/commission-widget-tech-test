import displayCurrency from '@/helpers/displayCurrency';

describe('displayCurrency', () => {
  test('it formats a value to the correct number of decimal places', () => {
    expect(displayCurrency(100)).toBe('100.00');
    expect(displayCurrency(100.677)).toBe('100.68');
    expect(displayCurrency(54.5)).toBe('54.50');
    expect(displayCurrency(54.5, 3)).toBe('54.500');
  });

  test('it formats a value with seperating commas', () => {
    expect(displayCurrency(10000, 0)).toBe('10,000');
    expect(displayCurrency(1000000, 0)).toBe('1,000,000');
    expect(displayCurrency(999999.5)).toBe('999,999.50');
  });
});
