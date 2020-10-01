import React from 'react';
import { shallow } from 'enzyme';
import Vehicles from '../Vehicles';

it('Vehicles Page matches snapshot', () => {
  const wrapper = shallow(<Vehicles />);
  expect(wrapper).toMatchSnapshot();
})