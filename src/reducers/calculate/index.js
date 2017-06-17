export default ({ firstValue, secondValue, temporalValue }, operator) => {
  firstValue = parseInt(firstValue, 10);
  secondValue = (secondValue)
    ? parseInt(secondValue, 10)
    : (temporalValue)
      ? temporalValue
      : 0;

  switch (operator) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    case '/':
      return firstValue / secondValue;
    default:
      return undefined;
  }
}