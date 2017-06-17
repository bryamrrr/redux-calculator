import { SET_VALUE } from '../types';

export const setValue = (value) => {
  return {
    type: SET_VALUE,
    payload: value,
  };
};
