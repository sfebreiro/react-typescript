import { useState } from 'react'

interface Props {
  initialValue?: number;  // Es opcional
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({initialValue = 5}: Props) => {
  
  const [{counter, clicks}, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  })

  // const {counter, clicks} = counterState;

  const onHandleClick = (value: number) => {
    setCounterState( ({counter, clicks}) => ({
      counter: counter + value,
      clicks: clicks + 1 
    }))
  }

  return (
    <>
        <h1>CounterBy: {counter} </h1>
        <h1>clicks: {clicks} </h1>
        <button onClick={() => onHandleClick(1)}>+1</button>
        <button onClick={() => onHandleClick(5)}>+5</button>
    </>
  )
}
