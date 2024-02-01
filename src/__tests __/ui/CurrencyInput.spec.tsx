import { render, screen, fireEvent } from '@testing-library/react';
import CurrencyInput from '@/ui/CurrencyInput';

describe('CurrencyInput', () => {
  it('triggers the prop callback on input', () => {
    const callback = jest.fn();
    const { unmount } = render(<CurrencyInput onChange={callback} />);
    const inputEl = screen.getByTestId('revenue-input');
    fireEvent.input(inputEl, { target: { value: 10 } });
    expect(callback).toHaveBeenCalled();
    unmount();
  });

  it('only renders a loading spinner when loading', () => {
    const notLoadingComponent = render(<CurrencyInput loading={false} />);
    expect(screen.queryByTestId('loading-spinner')).toBeNull();
    notLoadingComponent.unmount();

    const loadingComponent = render(<CurrencyInput loading={true} />);
    expect(screen.queryByTestId('loading-spinner')).toBeTruthy();
    loadingComponent.unmount();
  });
});
