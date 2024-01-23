import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const maxCount = 10;

export const CounterEffect = () => {
  
  const [counter, setCounter] = useState(5)
  const counterElement = useRef<HTMLHeadingElement>(null);

  const onHandleClick = () => {
      setCounter(prev => Math.min(prev + 1, maxCount));
  }

  useEffect(() => {
    if (counter < 10) return;
    console.log('%cLlegamos a 10', 'color: red; background-color: black;')

    const tl = gsap.timeline();

    tl.to(counterElement.current, {y: -10, duration: 0.4, ease: 'ease.out'})
      .to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'})

  }, [counter])
  

  return (
    <>
        <h1>Counter Effect:</h1>
        <h2 ref={counterElement} >{counter}</h2>

        <button onClick={onHandleClick} >
          +1
        </button>
    </>
  )
}
