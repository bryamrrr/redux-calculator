import { CALCULATE } from '../types';

import calculate from './';

describe('Actions - CALCULATE', () => {
  test('has the correct type', () => {
    const action = calculate();
    expect(action.type).toEqual(CALCULATE);
  });

  test('has not payload', () => {
    const action = calculate();
    expect(action.payload).toBeUndefined();
  });
});
