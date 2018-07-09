import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';

/*
* Create Redux store for the app
*/
const store = configureStore();

/*
* Add Redux store provider
*/
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

/*
* Render app
*/
ReactDOM.render(jsx, document.getElementById('root'));
