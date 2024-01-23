import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';
import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from './bases/CounterReducer';

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
      <CounterReducerComponent/>
      <hr />
    </>
  );
}

export default App;
