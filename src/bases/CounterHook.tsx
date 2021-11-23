import { useCounter } from '../hooks/useCounter';

interface Props {
  initialValue?: number;
}

export const CounterHook = ({ initialValue = 5 }: Props) => {
  const { counter, elementToAnimate, handleClick } = useCounter({
    maxCount: 15,
  });

  return (
    <>
      <h1>Counter Hook: {counter}</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
