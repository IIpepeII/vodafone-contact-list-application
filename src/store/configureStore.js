/*
* Configure Redux store.
* It uses redux-thunk to support asynchronous fetching data from https://randomuser.me API.
* Asynchronous Redux action creator is in actions/contacts.js/.
*/
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/*
* Redux DevTools Extension for debugging
*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};
