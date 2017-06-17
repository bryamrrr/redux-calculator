export default (state, payload) => {
  const newState = Object.assign({}, state);

  if (!newState.operator) {
    newState.display = (newState.display === '0')
      ? payload
      : newState.display + payload;

    newState.firstValue = parseInt(newState.display, 10);
  } else {
    newState.display = (newState.display === '0')
      ? payload
      : (newState.secondValue === 0)
        ? payload
        : newState.display + payload;

    newState.secondValue = parseInt(newState.display, 10);
  }

  return newState;
};
