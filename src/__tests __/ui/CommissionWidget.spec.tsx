import CommissionWidget from '@/ui/CommissionWidget/CommissionWidget';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { defaultDebounceDelay } from '@/hooks/useDebounce';
import * as mockFetchHelper from '@/helpers/mockFetch';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

describe('CommissionWidget', () => {
  it('initialises the EmptyState', () => {
    const { unmount } = render(<CommissionWidget />);
    expect(screen.queryByTestId('empty-state')).toBeTruthy();
    unmount();
  });

  it('fetches data on debounced revenue input update', async () => {
    const mockFetchSpy = jest.spyOn(mockFetchHelper, 'default');
    const { unmount } = render(<CommissionWidget />);
    expect(mockFetchSpy).not.toHaveBeenCalled();

    fireEvent.change(screen.getByTestId('revenue-input'), {
      target: { value: 18000 },
    });

    await act(() => {
      jest.advanceTimersByTime(defaultDebounceDelay);
    });

    expect(mockFetchSpy).toHaveBeenCalledTimes(1);
    unmount();
  });

  it('triggers the loading spinner when fetching', async () => {
    const { unmount } = render(<CommissionWidget />);
    expect(screen.queryByTestId('loading-spinner')).toBeNull();

    fireEvent.change(screen.getByTestId('revenue-input'), {
      target: { value: 18000 },
    });

    await act(() => {
      jest.advanceTimersByTime(defaultDebounceDelay);
    });
    expect(screen.queryByTestId('loading-spinner')).toBeTruthy();

    unmount();
  });

  it('handles failing to fetch data', async () => {
    jest.spyOn(mockFetchHelper, 'default').mockRejectedValue('bad response');
    const { unmount } = render(<CommissionWidget />);

    fireEvent.change(screen.getByTestId('revenue-input'), {
      target: { value: 18000 },
    });

    await act(() => {
      jest.advanceTimersByTime(
        defaultDebounceDelay + mockFetchHelper.mockFetchDelay
      );
    });

    expect(screen.queryByTestId('loading-spinner')).toBe(null);
    expect(screen.queryByText('bad response')).toBeTruthy();
    unmount();
  });
});
