import {
  SET_VALUE,
  SET_OPERATOR,
  CALCULATE,
} from '../actions/types';

import setValueReducer from './set-value';
import setOperatorReducer from './set-operator';
import calculateReducer from './calculate';

const initialState = {
  firstValue: 0,
  secondValue: null,
  operator: null,
  display: '0',
  temporalValue: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return setValueReducer(state, action.payload);
    case SET_OPERATOR:
      return setOperatorReducer(state, action.payload);
    case CALCULATE: {
      const result = calculateReducer(state, state.operator);
      return Object.assign({},
        state,
        {
          firstValue: result,
          secondValue: 0,
          display: `${result}`,
          temporalValue: state.secondValue,
        },
      );
    }
    default:
      return state;
  }
};
