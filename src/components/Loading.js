/*
* Loading image
* Used in ./Dashboard.js while contactsAreLoading Redux state is true.
*/
import React from 'react';
import loader from '../images/loading.svg';

const LoadingPage = () => (
  <div className="loading">
    <img src={loader} alt="loading..." />
  </div>
);

export default LoadingPage;
