import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import pressValue from '../../actions/press-value';

import styles from './styles.css';

export function PureNumbers(props) {
  return (
    <section className={styles.container}>
      <button onClick={() => props.pressValue('7')}>7</button>
      <button onClick={() => props.pressValue('8')}>8</button>
      <button onClick={() => props.pressValue('9')}>9</button>
      <button onClick={() => props.pressValue('4')}>4</button>
      <button onClick={() => props.pressValue('5')}>5</button>
      <button onClick={() => props.pressValue('6')}>6</button>
      <button onClick={() => props.pressValue('1')}>1</button>
      <button onClick={() => props.pressValue('2')}>2</button>
      <button onClick={() => props.pressValue('3')}>3</button>
      <button onClick={() => props.pressValue('0')}>0</button>
    </section>
  );
}

PureNumbers.propTypes = {
  pressValue: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    pressValue: value => dispatch(pressValue(value)),
  };
}

export default connect(null, mapDispatchToProps)(PureNumbers);
