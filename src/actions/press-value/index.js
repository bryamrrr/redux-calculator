import 'rxjs';
import {
  PRESS_VALUE,
  SET_VALUE,
} from '../types';

export default function (value) {
  return {
    type: PRESS_VALUE,
    payload: value,
  };
}

export function pressValueEpic(action$) {
  return action$
    .filter(action => action.type === PRESS_VALUE)
    .buffer(action$.debounceTime(250))
    .map((list) => {
      if (list[0]) {
        return {
          payload: list[0].payload,
          length: list.length,
        };
      }
      return {};
    })
    .map(({ payload, length }) => {
      if (length > 1) {
        return { type: SET_VALUE, payload: `-${payload}` };
      } else if (length === 1) {
        return { type: SET_VALUE, payload };
      }
      return { type: 'DO_NOTHING' };
    });
}
