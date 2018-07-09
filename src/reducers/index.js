/*
* Root reducer for the Redux store
* I combine the contact and filter reducers here and give it to the store in store/configureStore.js
*/
import { combineReducers } from 'redux';
import { contacts, contactsAreLoading } from './contacts';
import filters from './filters';

export default combineReducers({
  contacts,
  contactsAreLoading,
  filters,
});
