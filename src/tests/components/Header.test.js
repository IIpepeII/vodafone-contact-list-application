import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let dispatchTextFilter, wrapper;

beforeEach(() => {
  dispatchTextFilter = jest.fn();
  wrapper = shallow(<Header dispatchTextFilter={dispatchTextFilter} />);
});

test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle dispatchTextFilter correctly', () => {
  const value = 'test';
  wrapper.find('Input').simulate('change', {
    target: { value },
  });
  expect(dispatchTextFilter).toHaveBeenLastCalledWith(value);
});
