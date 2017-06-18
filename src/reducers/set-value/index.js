export default (state, payload) => {
  const newState = Object.assign({}, state);

  if (!newState.operator) {
    newState.display = (newState.display === '0')
      ? payload
      : newState.display + Math.abs(parseInt(payload, 10));

    newState.firstValue = parseInt(newState.display, 10);
  } else {
    if (newState.display === '0') {
      newState.display = payload;
    } else {
      newState.display = (newState.secondValue === 0)
        ? payload
        : newState.display + Math.abs(parseInt(payload, 10));
    }

    newState.secondValue = parseInt(newState.display, 10);
  }

  return newState;
};
