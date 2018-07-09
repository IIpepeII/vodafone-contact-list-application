import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  contactsAreLoading,
  setContacts,
  startSetContacts,
  deleteContact,
  editContact,
  addContact
} from '../../actions/contacts';
import contacts from '../fixtures/contacts';
import response from '../fixtures/api-response';

const createMockStore = configureMockStore([thunk]);

test('should create contactsAreLoading action object', () => {
  const action = contactsAreLoading(true);
  expect(action).toEqual({
    type: 'CONTACTS_ARE_LOADING',
    isLoading: true,
  });
});

test('should create setContacts action object', () => {
  const action = setContacts(contacts);
  expect(action).toEqual({
    type: 'SET_CONTACTS',
    contacts,
  });
});

test('should fetch the contacts from the API', () => {
  fetchMock.get('*', response);

  const expectedActions = [
    { type: 'CONTACTS_ARE_LOADING', isLoading: true },
    { type: 'CONTACTS_ARE_LOADING', isLoading: false },
    { type: 'SET_CONTACTS', contacts: [contacts[3]] },
  ];

  const store = createMockStore({ contacts: [] });

  return store.dispatch(startSetContacts()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

test('should create editContact action object', () => {
  const id = 'testuser';
  const updatedData = {
    email: 'updated@example.com',
  };
  const action = editContact(id, updatedData);
  expect(action).toEqual({
    type: 'EDIT_CONTACT',
    id,
    updatedData,
  });
});
