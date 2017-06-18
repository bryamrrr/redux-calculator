import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import calculate from '../../actions/calculate';
import clear from '../../actions/clear';

import styles from './styles.css';

export function PureFunctions(props) {
  return (
    <section className={styles.container}>
      <button onClick={() => props.clear()}>Clear</button>
      <button onClick={() => props.calculate()}>=</button>
    </section>
  );
}

PureFunctions.propTypes = {
  calculate: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    calculate: () => dispatch(calculate()),
    clear: () => dispatch(clear()),
  };
}

export default connect(null, mapDispatchToProps)(PureFunctions);
