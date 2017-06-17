// STORE

store = {
  firstValue: 0,
  secondValue: null,
  operator: null,
  display: 0,
}

SET_VALUE('8')
// operator === null
store = {
  firstValue: 8,
  secondValue: null,
  operator: '+',
  display: '8',
}

// operator !== null
store = {
  firstValue: 0,
  secondValue: 8,
  operator: '+',
  display: '8',
}

// ACTIONS
SET_OPERATOR('+')
store = {
  firstValue: 0,
  secondValue: null,
  operator: '+',
  display: '0',
}


CALCULATE()
// first:value === 0 && secondValue === null
store = {
  firstValue: 0,
  secondValue: null,
  operator: null,
  display: '0',
}

// secondValue !== null
store = {
  firstValue: 0,
  secondValue: 8,
  operator: '+',
  display: '8',
}

// secondValue !== null && display !== '0' (display = 18)
store = {
  firstValue: 18,
  secondValue: 8,
  operator: '+',
  display: '26',
}
