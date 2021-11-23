import { useEffect, useState } from 'react';

interface Props {
  initialValue?: number;
}
const MAXIMUN_COUNT = 10;
export const CounterEffect = ({ initialValue = 5 }: Props) => {
  const [counter, setCounter] = useState(initialValue);
  const handleClick = () => {
    // setCounter((prev) => {
    //   return prev === MAXIMUN_COUNT - 1 ? prev : prev + 1;
    // });
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {}, [counter]);

  return (
    <>
      <h1>CounterUseEffect: {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
