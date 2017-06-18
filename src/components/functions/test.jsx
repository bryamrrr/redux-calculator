import React from 'react';
import { shallow } from 'enzyme';
import { PureFunctions as Functions } from './index';

describe('Functions', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Functions />);
  });

  test('has a section', () => {
    expect(wrapper.find('section')).toHaveLength(1);
  });

  test('has 3 buttons', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });
});
