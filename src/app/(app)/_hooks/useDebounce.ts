import { useEffect, useState } from 'react';

type UseSearchDebounceHook<T> = [T, boolean];

export function useSearchDebounce<T>(value: T, delay?: number): UseSearchDebounceHook<T> {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (value) setIsLoading(true);

    const timer = setTimeout(() => {
      setDebouncedValue(value);
      setIsLoading(false);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return [debouncedValue, isLoading];
}
