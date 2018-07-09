import { contactsAreLoading, contacts } from '../../reducers/contacts';
import contactsFixtures from '../fixtures/contacts';

describe('contactsAreLoading reducer', () => {
  test('should set contactsAreLoading reducer default state', () => {
    const state = contactsAreLoading(undefined, { type: '@@INIT' });
    expect(state).toBe(false);
  });

  test('should set contactsAreLoading reducer state true', () => {
    const action = {
      type: 'CONTACTS_ARE_LOADING',
      isLoading: true,
    };
    const state = contactsAreLoading(undefined, action);
    expect(state).toBe(true);
  });
});

describe('contacts reducer', () => {
  test('should set contacts reducer default state', () => {
    const state = contacts(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });

  test('should set contacts', () => {
    const action = {
      type: 'SET_CONTACTS',
      contacts: contactsFixtures,
    };
    const state = contacts(undefined, action);
    expect(state).toEqual(contactsFixtures);
  });

  test('should add new contact', () => {
    const contact = {
      id: '1',
      cell: '123',
      firstName: 'Test',
      lastName: 'Person',
      email: 'test.person@example.com'
    };

    const newState = [
      contact,
      ...contactsFixtures
    ];

    const action = {
      type: 'ADD_CONTACT',
      contact
    };
    
    const state = contacts(contactsFixtures, action);
    expect(state).toEqual(newState);
  });
});
