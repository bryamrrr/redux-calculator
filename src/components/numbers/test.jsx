import React from 'react';
import { shallow } from 'enzyme';
import Numbers from './index';

describe('Numbers', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Numbers />);
  });

  test('has a section', () => {
    expect(wrapper.find('section')).toHaveLength(1);
  });

  test('has 3 buttons', () => {
    expect(wrapper.find('button')).toHaveLength(10);
  });
});
