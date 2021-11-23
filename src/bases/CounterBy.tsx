import { useState } from 'react';

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [counterState, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });
  const { counter, clicks } = counterState;
  const handleCount = (value: number) => {
    setCounterState(({ counter, clicks }) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>
      <button onClick={() => handleCount(1)}>+1</button>
      <button onClick={() => handleCount(5)}>+5</button>
    </>
  );
};
