import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';

function App() {
  return (
    <>
      <Counter initialValue={15} />
      <hr/>
      <CounterBy/>
      <hr/>
      <CounterEffect/>
      <hr />
      <CounterHook/>
      <hr />
    </>
  );
}

export default App;
