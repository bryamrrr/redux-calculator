import React from 'react';

import styles from './styles.css';

function TextView() {
  return (
    <div className={styles.container}>
      <span className={styles.value}>0</span>
    </div>
  );
}

export default TextView;
