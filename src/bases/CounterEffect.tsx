import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
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

  useEffect(() => {
    if (counter < 10) return;
    console.log('%cMax number is here', 'color:red');

    gsap.to('h2', { y: -10, duration: 0.2, ease: 'ease.out' }).then(() => {
      gsap.to('h2', { y: 0, duration: 1, ease: 'bounce.out' });
    });
  }, [counter]);

  return (
    <>
      <h1>CounterUseEffect: {counter}</h1>
      <h2>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
