import { SET_OPERATOR } from '../types';

import setOperator from './';

describe('Actions - SET_OPERATOR', () => {
  test('has the correct type', () => {
    const action = setOperator();
    expect(action.type).toEqual(SET_OPERATOR);
  });

  test('has the correct payload', () => {
    const action = setOperator('+');
    expect(action.payload).toEqual('+');
  });
});
