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
});
