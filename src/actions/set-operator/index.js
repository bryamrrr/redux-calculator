import { SET_OPERATOR } from '../types';

export default function (operator) {
  return {
    type: SET_OPERATOR,
    payload: operator,
  };
}
