// import { useEffect, useState } from 'react';

// type UseSearchDebounceHook<T> = [T, boolean];

// export function useSearchDebounce<T>(
//   value: T,
//   delay?: number,
//   callBackFn?: () => void
// ): UseSearchDebounceHook<T> {
//   const [debouncedValue, setDebouncedValue] = useState<T>(value);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   useEffect(() => {
//     if (value) setIsLoading(true);

//     const timer = setTimeout(() => {
//       setDebouncedValue(value);
//       callBackFn && callBackFn();
//       setIsLoading(false);
//     }, delay || 500);

//     return () => {
//       clearTimeout(timer);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [value, delay]);

//   return [debouncedValue, isLoading];
// }

import { useCallback, useRef } from 'react';

type Debounce = (fn: () => void) => void;

export const useSearchDebounce = (timeout: number): Debounce => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const debounce: Debounce = useCallback(
    (fn) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        fn();
      }, timeout);
    },
    [timeout]
  );
  return debounce;
};
