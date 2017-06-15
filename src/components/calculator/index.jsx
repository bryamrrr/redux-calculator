import React from 'react';

import TextView from '../text-view';
import Numbers from '../numbers';
import Equations from '../equations';
import Functions from '../functions';

function Calculator() {
  return (
    <div>
      <TextView />
      <Numbers />
      <Equations />
      <Functions />
    </div>
  );
}

export default Calculator;
