'use client';

import { counterAtom } from '../_stores/counterAtom';
import { useAtom } from 'jotai';

export const Counter = (): JSX.Element => {
  const [counter, setCounter] = useAtom(counterAtom);

  const handlePlus = (): void => {
    setCounter((value: number) => value + 1);
  };

  const handleMinus = (): void => {
    setCounter((value: number) => value - 1);
  };

  return (
    <div className="pl-4">
      <div>counter: {counter}</div>
      <div>
        <button onClick={handlePlus}>インクリメント</button>
      </div>
      <div>
        <button onClick={handleMinus}>デクリメント</button>
      </div>
    </div>
  );
};
