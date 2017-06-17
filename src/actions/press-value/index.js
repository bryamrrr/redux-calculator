import { PRESS_VALUE } from '../types';

export default function (value) {
  return {
    type: PRESS_VALUE,
    payload: value,
  };
}
