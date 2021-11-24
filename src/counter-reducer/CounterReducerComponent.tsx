import { useReducer } from 'react';
import * as CounterActions from './actions/ations';
import { CounterState } from './interfaces/interfaces';
import { counterReducer } from './state/counterReducer';

const initialState: CounterState = { counter: 0, previous: 0, changes: 0 };

export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { counter, changes, previous } = state;

  const handleReset = () => {
    dispatch(CounterActions.doReset());
  };

  const handleIncreaseBy = (value: number) => {
    dispatch(CounterActions.doIncreaseBy(value));
  };

  return (
    <>
      <h1>Segmented Counter Reducer</h1>
      <h1>Changes: {counter}</h1>
      <h1>Changes: {changes}</h1>
      <h1>Previous: {previous}</h1>
      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
      <button onClick={() => handleIncreaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
