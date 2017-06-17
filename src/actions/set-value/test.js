import { SET_VALUE } from '../types';

import { setValue } from './';

describe('Actions - SET_VALUE', () => {
  test('has the correct type', () => {
    const action = setValue();
    expect(action.type).toEqual(SET_VALUE);
  });

  test('has the correct payload', () => {
    const action = setValue('1');
    expect(action.payload).toEqual('1');
  });
});
