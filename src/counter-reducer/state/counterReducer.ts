import { CounterAction } from '../actions/ations';
import { CounterState } from '../interfaces/interfaces';

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
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
