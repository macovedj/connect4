import React from 'react';
import { shallow } from 'enzyme';
import Connect4 from './Connect4';


it('renders without crashing', () => {
  shallow(<Connect4 />);
});

it('should calculate false for a vertical win if we do not have four in a row', () => {
  const wrapper = shallow(<Connect4 />);
  expect(wrapper.instance().checkForVerticalWin(1, 1), false);
})

it('should calculate true for a vertical win if we have four in a row', () => {
  const wrapper = shallow(<Connect4 />);
  wrapper.instance().dropTokenHandler(1);
  wrapper.instance().dropTokenHandler(2);
  wrapper.instance().dropTokenHandler(1);
  wrapper.instance().dropTokenHandler(2);
  wrapper.instance().dropTokenHandler(1);
  wrapper.instance().dropTokenHandler(2);
  wrapper.instance().dropTokenHandler(1);
  expect(wrapper.instance().checkForVerticalWin(1, 1), true);
})
