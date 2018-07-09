import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from '../../components/ContactForm';
import contacts from '../fixtures/contacts';

let getFormData;

beforeEach(() => {
  getFormData = jest.fn();
});

test('should render correctly on AddContactPage', () => {
  const wrapper = shallow(<ContactForm page="addContact" getFormData={getFormData} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render correctly on EditContactPage', () => {
  const wrapper = shallow(<ContactForm page="editContact" getFormData={getFormData} contact={contacts[0]} />);
  expect(wrapper).toMatchSnapshot();
});
