/*
* Action creators for contacts.
*/

// Handle changes in contactsAreLoading state
export const contactsAreLoading = bool => ({
  type: 'CONTACTS_ARE_LOADING',
  isLoading: bool,
});

// Save initial contacts in contacts state
export const setContacts = contacts => ({
  type: 'SET_CONTACTS',
  contacts,
});

/*
* Fetch contacts asynchronously from the https://randomuser.me API.
*/
export const startSetContacts = () => async (dispatch) => {
  // Set contactsAreLoading state to true.
  dispatch(contactsAreLoading(true));
  const url = 'https://randomuser.me/api/?results=9&nat=us';

  // Every data in the API is lowercase. It is a function to capitalize strings if necessery.
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  try {
    // Fetch data
    const response = await fetch(url);
    const data = await response.json();
    const results = await data.results;

    // Create contacts array
    const users = results.map(user => ({
      id: user.id.value,
      firstName: capitalize(user.name.first),
      lastName: capitalize(user.name.last),
      email: user.email,
      cell: user.cell,
    }));

    // Set contactsAreLoading state back to false.
    dispatch(contactsAreLoading(false));

    // Dispatch contacts to Redux store
    dispatch(setContacts(users));
  } catch (e) {
    console.error(e);
  }
};

// Handle delete contact. It is done by id.
export const deleteContact = id => ({
  type: 'DELETE_CONTACT',
  id,
});

// Handle update contact. It is done by id.
export const editContact = (id, updatedData) => ({
  type: 'EDIT_CONTACT',
  id,
  updatedData,
});

// Handle add new contact to the contacts state
export const addContact = contact => ({
  type: 'ADD_CONTACT',
  contact,
});
