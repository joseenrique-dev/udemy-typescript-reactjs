import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;
export const useCounter = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    // setCounter((prev) => {
    //   return prev === MAXIMUN_COUNT - 1 ? prev : prev + 1;
    // });
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;
    console.log('%cMax number is here', 'color:red');

    const tl = gsap.timeline();
    tl.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      ease: 'ease.out',
    }).to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });
  }, [counter]);

  return {
    counter,
    counterElement,
    handleClick,
  };
};