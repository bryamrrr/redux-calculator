import calculateReducer from '../calculate';

export default (state, payload) => {
  const newState = Object.assign({}, state);

  if (!newState.operator) {
    newState.operator = payload;
  } else if (!newState.secondValue) {
    newState.operator = payload;
  } else {
    newState.firstValue = calculateReducer(state, newState.operator);
    newState.display = `${newState.firstValue}`;
    newState.secondValue = 0;
    newState.operator = payload;
  }

  return newState;
};
