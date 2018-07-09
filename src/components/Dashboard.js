/*
* Dashboard component. It is the initial page.
* Props:
* - filteredContacts: contacts state from store filtered with function in selectors/contacts.js
* - contacts: unfiltered contacts state from store. Needed to display letters for filter
* - filter: filter state to add active class to filter letters
* - loading: loading state to decide whether display <Loading /> or contact list
* - dispatchTextFilter: send filter text to store via setTextFilter action creator
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterContacts from '../selectors/contacts';
import ContactCard from './ContactCard';
import Loading from './Loading';
import setTextFilter from '../actions/filters';

export class Dashboard extends Component {
  static propTypes = {
    filteredContacts: PropTypes.arrayOf(PropTypes.object),
    contacts: PropTypes.arrayOf(PropTypes.object),
    filter: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    dispatchTextFilter: PropTypes.func.isRequired,
  }

  static defaultProps = {
    filteredContacts: [],
    contacts: [],
    filter: '',
  }

  // Method for getting individual first letters from last names for filtering
  getFirstLettersFromLastNames = () => {
    const letters = this.props.contacts
      .map(contact => contact.lastName.charAt(0))
      .sort();
    return [...new Set(letters)];
  }

  render() {
    const {
      filteredContacts,
      dispatchTextFilter,
      filter,
    } = this.props;

    return (
      <div className="dashboard">
        <h1 className="text-center">Contacts</h1>
        <div className="text-center pt-3">
          {
            this.props.contacts.length > 0
            && this.getFirstLettersFromLastNames().map(letter => (
              <button
                type="button"
                className={`text-uppercase btn--filter mx-2 ${filter === letter ? 'active' : ''}`}
                id={`filter-${letter}`}
                key={letter}
                onClick={() => dispatchTextFilter(letter)}
              >
                { letter }
              </button>
            ))
          }
        </div>
        {/* Display 'Clear filter' button if contacts are filtered */}
        {
          filter.length > 0 && (
          <div className="text-center py-3">
            <button
              type="button"
              className="btn btn--empty btn--red-empty"
              onClick={() => dispatchTextFilter('')}
            >
            Clear filter
            </button>
          </div>
          )
        }
        {/* If contactsAreLoading state is true display <Loading /> else display contacts */}
        <div className="row mt-5">
          {
            this.props.loading
              ? <Loading />
              : filteredContacts.map(contact => <ContactCard data={contact} key={contact.id} />)
          }
        </div>
      </div>
    );
  }
}

/*
* Get states from the Redux store to add as props to the component
*/
const mapStateToProps = state => ({
  filteredContacts: filterContacts(state.contacts, state.filters.text),
  contacts: state.contacts,
  filter: state.filters.text,
  loading: state.contactsAreLoading,
});

/*
* Create dispatchTextFilter function to link setTextFilter action creator with the component via props
*/
const mapDispatchToProps = dispatch => ({
  dispatchTextFilter: text => dispatch(setTextFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
