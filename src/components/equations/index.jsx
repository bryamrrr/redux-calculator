import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setOperator from '../../actions/set-operator';

import styles from './styles.css';

export function PureEquations(props) {
  return (
    <section className={styles.container}>
      <button onClick={() => props.setOperator('/')}>/</button>
      <button onClick={() => props.setOperator('x')}>x</button>
      <button onClick={() => props.setOperator('-')}>-</button>
      <button onClick={() => props.setOperator('+')}>+</button>
    </section>
  );
}

PureEquations.propTypes = {
  setOperator: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    setOperator: operator => dispatch(setOperator(operator)),
  };
}

export default connect(null, mapDispatchToProps)(PureEquations);
