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
    expect(reducer(initialState, action).temporalValue).toEqual(20);
  });

  test('difference', () => {
    initialState.operator = '-';

    expect(reducer(initialState, action).firstValue).toEqual(5);
    expect(reducer(initialState, action).display).toEqual('5');
    expect(reducer(initialState, action).secondValue).toEqual(0);
    expect(reducer(initialState, action).temporalValue).not.toBeNull();
    expect(reducer(initialState, action).temporalValue).toEqual(5);
  });

  test('multiplication', () => {
    initialState.operator = 'x';

    expect(reducer(initialState, action).firstValue).toEqual(50);
    expect(reducer(initialState, action).display).toEqual('50');
    expect(reducer(initialState, action).secondValue).toEqual(0);
    expect(reducer(initialState, action).temporalValue).not.toBeNull();
    expect(reducer(initialState, action).temporalValue).toEqual(5);
  });

  test('division', () => {
    initialState.operator = '/';

    expect(reducer(initialState, action).firstValue).toEqual(2);
    expect(reducer(initialState, action).display).toEqual('2');
    expect(reducer(initialState, action).secondValue).toEqual(0);
    expect(reducer(initialState, action).temporalValue).not.toBeNull();
    expect(reducer(initialState, action).temporalValue).toEqual(5);
  });
});
