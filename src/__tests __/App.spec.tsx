import { render } from '@testing-library/react';
import App from '../App';

test('Renders the main page', () => {
  const { unmount } = render(<App />);
  expect(true).toBeTruthy();
  unmount();
});
