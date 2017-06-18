import React from 'react';
import { shallow } from 'enzyme';
import { PureEquations as Equations } from './index';

describe('Equations', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Equations />);
  });

  test('has a section', () => {
    expect(wrapper.find('section')).toHaveLength(1);
  });

  test('has 4 buttons', () => {
    expect(wrapper.find('button')).toHaveLength(4);
  });
});
