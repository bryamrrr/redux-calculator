import reducer from '../';
import { CALCULATE } from '../../actions/types';

describe('Reducer - Calculate', () => {
  let initialState, action;

  beforeEach(() => {
    initialState = {
      firstValue: 10,
      secondValue: 5,
      operator: '+',
      display: '0',
      temporalValue: null,
    };

    action = { type: CALCULATE };
  });

  test('sum', () => {
    expect(reducer(initialState, action).firstValue).toEqual(15);
    expect(reducer(initialState, action).display).toEqual('15');
    expect(reducer(initialState, action).secondValue).toEqual(0);
    expect(reducer(initialState, action).temporalValue).not.toBeNull();
    expect(reducer(initialState, action).temporalValue).toEqual(5);
  });

  test('repeat sum', () => {
    initialState.secondValue = 0;
    initialState.temporalValue = 20;
    expect(reducer(initialState, action).firstValue).toEqual(30);
    expect(reducer(initialState, action).display).toEqual('30');
  });
});
