import CommissionWidget from '@/ui/CommissionWidget';
import { act, fireEvent, render, screen } from '@testing-library/react';

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
    const { unmount } = render(<CommissionWidget />);
    expect(screen.queryByTestId('loading-spinner')).toBeNull();

    fireEvent.change(screen.getByTestId('revenue-input'), {
      target: { value: 18000 },
    });
    // Advance past debounce time
    await act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(screen.queryByTestId('loading-spinner')).toBeTruthy();

    unmount();
  });
});
