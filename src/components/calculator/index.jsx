import React from 'react';

import TextView from '../text-view';
import Numbers from '../numbers';
import Equations from '../equations';
import Functions from '../functions';

import styles from './styles.css';

function Calculator() {
  return (
    <div className={styles.container}>
      <TextView />
      <div className={styles.inner}>
        <Numbers />
        <Equations />
      </div>
      <Functions />
    </div>
  );
}

export default Calculator;
