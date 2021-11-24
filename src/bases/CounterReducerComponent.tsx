import { useReducer } from 'react';

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}
type CounterAction =
  | { type: 'increaseByNumber'; payload: { value: number } }
  | { type: 'reset' };
const initialState: CounterState = { counter: 0, previous: 0, changes: 0 };

const reducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'increaseByNumber':
      return {
        ...state,
        counter: state.counter + action.payload.value,
        changes: state.counter + 1,
        previous: state.counter,
      };
    case 'reset':
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      };

    default:
      return state;
  }
};
export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { counter, changes, previous } = state;

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const handleIncreaseBy = (value: number) => {
    dispatch({ type: 'increaseByNumber', payload: { value } });
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h1>Changes: {changes}</h1>
      <h1>Previous: {previous}</h1>
      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
      <button onClick={() => handleIncreaseBy(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
