/*
* Handle actions related to contacts.
*/

/*
* While contacts are fetching from the API, I set this state to true in order to display loader.
* Default state is false.
*/
export const contactsAreLoading = (state = false, action) => {
  switch (action.type) {
    case 'CONTACTS_ARE_LOADING':
      return action.isLoading;
    default:
      return state;
  }
};

/*
* Handle actions related to the contacts state.
* Default state is an empty array.
*/
export const contacts = (state = [], action) => {
  switch (action.type) {
    case 'SET_CONTACTS':
      return action.contacts;
    case 'ADD_CONTACT':
      return [
        action.contact,
        ...state,
      ];
    case 'EDIT_CONTACT':
      return state.map((contact) => {
        if (contact.id === action.id) {
          return {
            ...contact,
            ...action.updatedData,
          };
        }
        return contact;
      });
    case 'DELETE_CONTACT':
      return state.filter(contact => contact.id !== action.id);
    default:
      return state;
  }
};
