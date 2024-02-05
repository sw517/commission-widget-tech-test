import ClearButton from '@/ui/ClearButton/ClearButton';
import { fireEvent, render } from '@testing-library/react';

describe('ClearButton', () => {
  it('triggers prop callback on click', () => {
    const callback = jest.fn();
    const button = render(<ClearButton onClick={callback} />);
    fireEvent.click(button.baseElement);
    button.unmount();
  });
});
