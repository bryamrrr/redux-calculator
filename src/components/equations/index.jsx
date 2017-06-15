import React from 'react';

import styles from './styles.css';

function Equations() {
  return (
    <section className={styles.container}>
      <button>/</button>
      <button>x</button>
      <button>-</button>
      <button>+</button>
    </section>
  );
}

export default Equations;
