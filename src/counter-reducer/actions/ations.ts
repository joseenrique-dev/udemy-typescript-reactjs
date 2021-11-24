export type CounterAction =
  | { type: 'increaseByNumber'; payload: { value: number } }
  | { type: 'reset' };

export const doReset = (): CounterAction => ({
  type: 'reset',
});

export const doIncreaseBy = (value: number): CounterAction => ({
  type: 'increaseByNumber',
  payload: { value },
});
