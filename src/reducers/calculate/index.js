export default ({ firstValue, secondValue, temporalValue }, operator) => {
  const fValue = parseInt(firstValue, 10);
  let sValue;

  if (secondValue) {
    sValue = parseInt(secondValue, 10);
  } else {
    sValue = temporalValue || 0;
  }

  switch (operator) {
    case '+':
      return fValue + sValue;
    case '-':
      return fValue - sValue;
    case '*':
      return fValue * sValue;
    case '/':
      return fValue / sValue;
    default:
      return undefined;
  }
};
