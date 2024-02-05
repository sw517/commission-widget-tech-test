import { useEffect, useState } from 'react';

export const defaultDebounceDelay = 500;

export function useDebounce<T>(value: T, delay: number = defaultDebounceDelay) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
