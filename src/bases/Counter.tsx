import { useState } from 'react'

interface Props {
  initialValue?: number  // Es opcional
}

export const Counter = ({initialValue = 0}: Props) => {

  
  const [counter, setCounter] = useState(initialValue)

  const onHandleClick = () => {
    setCounter(prev => prev + 1) // setCounter(counter+1);
  }

  return (
    <>
        <h1>Counter: {counter} </h1>

        <button onClick={onHandleClick} >
          +1
        </button>
    </>
  )
}
