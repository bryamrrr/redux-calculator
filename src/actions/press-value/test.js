import { PRESS_VALUE } from '../types';

import pressValue from './';

describe('Actions - PRESS_VALUE', () => {
  test('has the correct type', () => {
    const action = pressValue();
    expect(action.type).toEqual(PRESS_VALUE);
  });

  test('has the correct payload', () => {
    const action = pressValue('9');
    expect(action.payload).toEqual('9');
  });
});
