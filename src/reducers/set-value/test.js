import reducer from '../';
import { SET_VALUE } from '../../actions/types';

describe('Reducer - Set value', () => {
  let initialState, action;

  beforeEach(() => {
    initialState = {
      firstValue: 0,
      secondValue: null,
      operator: null,
      display: '0',
    };

    action = {
      type: SET_VALUE,
      payload: '1',
    };
  });

  describe('first value', () => {
    test('adds as first value when theres no operator', () => {
      expect(reducer(undefined, action).firstValue).toEqual(1)
      expect(reducer(undefined, action).display).toEqual('1')
    });

    test('adds as first value with two characters', () => {
      action.payload = '4';

      const state = Object.assign({}, initialState);
      state.firstValue = 1;
      state.display = '1';

      expect(reducer(state, action).firstValue).toEqual(14);
      expect(reducer(state, action).display).toEqual('14');
    });
  });

  describe('second value', () => {
    let stateWithOperator;
    beforeEach(() => {
      stateWithOperator = {
        firstValue: 14,
        secondValue: null,
        operator: '+',
        display: '14',
        temporalValue: null,
      }
    });

    test('adds as second value when theres an operator', () => {
      const action = {
        type: SET_VALUE,
        payload: '1',
      };

      expect(reducer(stateWithOperator, action).secondValue).toEqual(1);
      expect(reducer(stateWithOperator, action).display).toEqual('1');
    });

    test('adds as second value with two characters', () => {
      const action = {
        type: SET_VALUE,
        payload: '4',
      };

      const state = Object.assign({}, stateWithOperator);
      state.secondValue = 1;
      state.display = '1';

      expect(reducer(state, action).secondValue).toEqual(14);
      expect(reducer(state, action).display).toEqual('14');
    });

    test('adds a new second value when is null and the display has a result', () => {
      const state = Object.assign({}, stateWithOperator);
      state.secondValue = 0;
      state.display = '14';

      expect(reducer(state, action).secondValue).toEqual(1);
      expect(reducer(state, action).display).toEqual('1');
    });
  });

  describe('handles negative values', () => {
    test('adds negative value as first number', () => {
      const action = {
        type: SET_VALUE,
        payload: '-4',
      };

      expect(reducer(undefined, action).firstValue).toEqual(-4);
      expect(reducer(undefined, action).display).toEqual('-4');
    });

    test('transforms to positive if is not the first number', () => {
      const state = {
        firstValue: 14,
        secondValue: -4,
        operator: '+',
        display: '-4',
      };

      const action = {
        type: SET_VALUE,
        payload: '-5',
      };

      expect(reducer(state, action).secondValue).toEqual(-45);
      expect(reducer(state, action).display).toEqual('-45');
    });
  });
});
