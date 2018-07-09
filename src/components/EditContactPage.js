/*
* Edit contact component for update contact data.
* The form is in ./ContactForm.js <ContactForm />
* Props:
* - contact: actual contact data from contacts state by id in URL.
* - dispatchEditContact: it is for sending data to the store via editContact action creator.
* - React Router history for dropping user back to dashboard after saving the form.
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editContact } from '../actions/contacts';
import ContactForm from './ContactForm';

class EditContactPage extends Component {
  static propTypes = {
    contact: PropTypes.objectOf(PropTypes.string).isRequired,
    dispatchEditContact: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  /*
  * Handle form submit.
  * Call dispatchEditContact to send data to store via editContact action creator then drop user to dashboard
  */
  handleEditContact = (data) => {
    this.props.dispatchEditContact(this.props.contact.id, data);
    this.props.history.push('/');
  }

  render() {
    const {
      firstName,
      lastName,
    } = this.props.contact;
    return (
      <div>
        <h1>{firstName} {lastName}&apos;s Profile</h1>
        <div className="edit-contact-page px-lg-7 pb-4">
          <ContactForm
            contact={this.props.contact}
            getFormData={this.handleEditContact}
            page="editContact"
          />
        </div>
      </div>
    );
  }
}

/*
* Based on React Router's match object find contact in contacts state array by id.
*/
const mapStateToProps = (state, props) => ({
  contact: state.contacts.find(contact => contact.id === props.match.params.id),
});

/*
* Create dispatchAEdiContact function to link editContact action creator with the component via props.
*/
const mapDispatchToProps = dispatch => ({
  dispatchEditContact: (id, updatedData) => dispatch(editContact(id, updatedData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContactPage);
