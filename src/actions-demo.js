// STORE

store = {
  first_value: 0,
  second_value: null,
  operator: null,
  display: 0,
}

// ACTIONS
SET_OPERATOR('+')
store = {
  first_value: 0,
  second_value: null,
  operator: '+',
  display: '0',
}


CALCULATE()
// first:value === 0 && second_value === null
store = {
  first_value: 0,
  second_value: null,
  operator: null,
  display: '0',
}

// second_value !== null
store = {
  first_value: 0,
  second_value: 8,
  operator: '+',
  display: '8',
}

// second_value !== null && display !== '0' (display = 18)
store = {
  first_value: 18,
  second_value: 8,
  operator: '+',
  display: '26',
}


SET_VALUE('8')
// operator === null
store = {
  first_value: 8,
  second_value: null,
  operator: '+',
  display: '8',
}

// operator !== null
store = {
  first_value: 0,
  second_value: 8,
  operator: '+',
  display: '8',
}