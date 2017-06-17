import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles.css';

function TextView(props) {
  return (
    <div className={styles.container}>
      <span className={styles.value}>{props.display}</span>
    </div>
  );
}

TextView.propTypes = {
  display: PropTypes.string.isRequired,
};

function mapStateToProps({ display }) {
  return { display };
}

export default connect(mapStateToProps)(TextView);
