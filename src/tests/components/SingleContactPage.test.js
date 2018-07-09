import React from 'react';
import { shallow } from 'enzyme';
import { SingleContactPage } from '../../components/SingleContactPage';
import contacts from '../fixtures/contacts';

let dispatchDeleteContact, history, wrapper;

beforeEach(() => {
  dispatchDeleteContact = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<SingleContactPage contact={contacts[0]} dispatchDeleteContact={dispatchDeleteContact} history={history} />);
});

test('should render SingleContactPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle dispatchDeleteContact correctly', () => {
  wrapper.find('#delete').simulate('click');
  expect(dispatchDeleteContact).toHaveBeenLastCalledWith(contacts[0].id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
