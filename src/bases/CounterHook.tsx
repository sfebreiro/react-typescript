import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {
  
  const {counter, elementToAnimate, onHandleClick} = useCounter({});

  return (
    <>
        <h1>Counter Hook:</h1>
        <h2 ref={elementToAnimate} >{counter}</h2>

        <button onClick={onHandleClick} >
          +1
        </button>
    </>
  )
}
