/*
* Router for the App. Find the routes and the transition setup in ./Container.js
*/
import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetContacts } from '../actions/contacts';
import Container from './Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const history = createHistory();

class AppRouter extends Component {
  static propTypes = {
    fetchContacts: PropTypes.func.isRequired,
  }

  // Call fetchContacts function to get contacts from https://randomuser.me/ and dispatch to Redux store via startSetContacts action creator.
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Router history={history}>
        <div className="site">
          <Header />
          <Container />
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(startSetContacts()),
});

export default connect(null, mapDispatchToProps)(AppRouter);
