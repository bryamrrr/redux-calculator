import reducer from '../';
import { SET_OPERATOR } from '../../actions/types';

describe('Reducer - Set Operator', () => {
  let initialState, action;

  beforeEach(() => {
    initialState = {
      firstValue: 0,
      secondValue: null,
      operator: null,
      display: '0',
      temporalValue: null,
    };

    action = {
      type: SET_OPERATOR,
      payload: '+',
    };
  });

  test('add operator if not exists', () => {
    expect(reducer(undefined, action).operator).toEqual('+');
  });

  test('add operator if second value doesnt exists', () => {
    initialState.operator = '+';
    action.payload = '-';
    expect(reducer(initialState, action).operator).toEqual('-');
  });

  test('calculate values and add operator if second value exists', () => {
    initialState.operator = '+';
    initialState.secondValue = '10';
    action.payload = '-';
    expect(reducer(initialState, action).operator).toEqual('-');
    expect(reducer(initialState, action).firstValue).toEqual(10);
    expect(reducer(initialState, action).display).toEqual('10');
  });
});
