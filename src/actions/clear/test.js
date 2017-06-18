import { CLEAR } from '../types';

import clear from './';

describe('Actions - CLEAR', () => {
  test('has the correct type', () => {
    const action = clear();
    expect(action.type).toEqual(CLEAR);
  });

  test('has not payload', () => {
    const action = clear();
    expect(action.payload).toBeUndefined();
  });
});
