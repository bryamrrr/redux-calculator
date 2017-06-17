import reducer from './';
import { SET_VALUE } from '../actions/types';

describe('Reducer', () => {
  const initialState = {
    firstValue: 0,
    secondValue: null,
    operator: null,
    display: '0',
    temporalValue: null,
  };

  describe('Initial state', () => {
    test('handles action with unkown type', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });
  });
});
