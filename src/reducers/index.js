/*
* Root reducer for the Redux store
* Contact and filter reducers are combined here and given to the store in store/configureStore.js
*/
import { combineReducers } from 'redux';
import { contacts, contactsAreLoading } from './contacts';
import filters from './filters';

export default combineReducers({
  contacts,
  contactsAreLoading,
  filters,
});
