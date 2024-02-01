import CommissionWidget from '@/ui/CommissionWidget';
import { act, render, screen } from '@testing-library/react';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

describe('CommissionWidget', () => {
  test.each([0, 1, 2, 3, 4])(
    'initialises breakdown value $s value as 0',
    (index) => {
      const { unmount } = render(<CommissionWidget />);
      expect(
        screen.getByTestId(`breakdown-value-${index}`).textContent
      ).toContain('£0');
      unmount();
    }
  );

  it('initialises the total as 0', () => {
    const { unmount } = render(<CommissionWidget />);
    expect(screen.getByTestId('commission-total').textContent).toContain('£0');
    unmount();
  });

  it('triggers the loading spinner when fetching', async () => {
    const { unmount } = await act(() => render(<CommissionWidget />));
    await jest.advanceTimersByTime(3000);
    expect(screen.queryByTestId('loading-spinner')).toBeNull();
    unmount();
  });
});
