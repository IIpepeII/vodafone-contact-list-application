/*
* Add new contact component. I use shortid package to generate id.
* The form is in ./ContactForm.js <ContactForm />
* Props:
* - dispatchAddContact for sending data to the store via addContact action creator.
* - React Router history object for dropping user back to dashboard after saving the form.
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { addContact } from '../actions/contacts';
import ContactForm from './ContactForm';

class AddContactPage extends Component {
  static propTypes = {
    dispatchAddContact: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  // Create contact object then sending data to the store then drop to dashboard.
  handleAddContact = (data) => {
    const contact = {
      id: shortid.generate(),
      ...data,
    };

    this.props.dispatchAddContact(contact);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Add New Contact</h1>
        {/* ContactForm component render text on form button based on page prop. */}
        <ContactForm
          getFormData={this.handleAddContact}
          page="addContact"
        />
      </div>
    );
  }
}

/*
* Create dispatchAddContact function to link addContact action creator with the component via props.
*/
const mapDispatchToProps = dispatch => ({
  dispatchAddContact: contact => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(AddContactPage);
