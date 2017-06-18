import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import calculate from '../../actions/calculate';

import styles from './styles.css';

export function PureFunctions(props) {
  return (
    <section className={styles.container}>
      <button>Clear</button>
      <button onClick={() => props.calculate()}>=</button>
    </section>
  );
}

PureFunctions.propTypes = {
  calculate: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    calculate: () => dispatch(calculate()),
  };
}

export default connect(null, mapDispatchToProps)(PureFunctions);
