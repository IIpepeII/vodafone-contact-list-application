import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../../components/Dashboard';
import contacts from '../fixtures/contacts';

let dispatchTextFilter;

beforeEach(() => {
  dispatchTextFilter = jest.fn();
});

test('should render Dashboard correctly when contactsAreLoading is true', () => {
  const wrapper = shallow(<Dashboard loading dispatchTextFilter={dispatchTextFilter} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Dashboard correctly when contactsAreLoading is false', () => {
  const wrapper = shallow(
    <Dashboard
      loading={false}
      filteredContacts={contacts}
      contacts={contacts}
      filter={''}
      dispatchTextFilter={dispatchTextFilter}
    />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle dispatchTextFilter correctly', () => {
  const value = '1';
  const wrapper = shallow(
    <Dashboard
      loading={false}
      filteredContacts={contacts}
      contacts={contacts}
      filter={''}
      dispatchTextFilter={dispatchTextFilter}
    />);
  wrapper.find('#filter-1').simulate('click', {
    target: { value },
  });
  expect(dispatchTextFilter).toHaveBeenLastCalledWith(value);
});
