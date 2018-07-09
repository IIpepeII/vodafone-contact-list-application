import contactsSelector from '../../selectors/contacts';
import contacts from '../fixtures/contacts';

test('should filter by text value', () => {
  const filter = 'hoogmoed';
  const result = contactsSelector(contacts, filter);
  expect(result).toEqual([contacts[3]]);
});
