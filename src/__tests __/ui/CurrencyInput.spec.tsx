import { render, screen, fireEvent } from '@testing-library/react';
import CurrencyInput from '@/ui/CurrencyInput/CurrencyInput';

describe('CurrencyInput', () => {
  it('triggers the prop callback on input', () => {
    const callback = jest.fn();
    const { unmount } = render(
      <CurrencyInput
        value={0}
        loading={false}
        onChange={callback}
        onClear={jest.fn()}
      />
    );
    const inputEl = screen.getByTestId('revenue-input');
    fireEvent.input(inputEl, { target: { value: 10 } });
    expect(callback).toHaveBeenCalled();
    unmount();
  });

  it('renders a loading spinner when loading', () => {
    const { unmount, rerender } = render(
      <CurrencyInput
        value={0}
        onChange={jest.fn()}
        onClear={jest.fn()}
        loading={false}
      />
    );
    expect(screen.queryByTestId('loading-spinner')).toBeNull();

    rerender(
      <CurrencyInput
        value={0}
        onChange={jest.fn()}
        onClear={jest.fn()}
        loading={true}
      />
    );
    expect(screen.queryByTestId('loading-spinner')).toBeTruthy();
    unmount();
  });

  it('renders a ClearButton if the input contains a value', () => {
    const { unmount, rerender } = render(
      <CurrencyInput
        value={0}
        onChange={jest.fn()}
        onClear={jest.fn()}
        loading={false}
      />
    );
    expect(screen.queryByTestId('clear-button')).toBeNull();

    rerender(
      <CurrencyInput
        value={10000}
        onChange={jest.fn()}
        onClear={jest.fn()}
        loading={false}
      />
    );
    expect(screen.queryByTestId('clear-button')).toBeTruthy();
    unmount();
  });
});
