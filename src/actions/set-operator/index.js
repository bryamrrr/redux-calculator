import { SET_OPERATOR } from '../types';

export const setOperator = (operator) => {
  return {
    type: SET_OPERATOR,
    payload: operator,
  };
};
