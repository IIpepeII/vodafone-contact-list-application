/*
* Form for adding and editing contact data.
* Used in ./AddContactPage.js and EditContactPage.js
* props:
* - contact: actual contact data if using the form for editing contact in <EditContactPage />.
* - page: needed to properly render text on form button. 'Save contact' or 'Add contact'.
* - getFormData: function for sending data to parent. <AddContactPage /> or <EditContactPage />
*/
import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  static propTypes = {
    contact: PropTypes.objectOf(PropTypes.string),
    page: PropTypes.string.isRequired,
    getFormData: PropTypes.func.isRequired,
  }

  // If form is child of <AddContactPage /> there is no contact prop.
  static defaultProps = {
    contact: {
      firstName: '',
      lastName: '',
      email: '',
      cell: '',
    },
  };

  state = {
    contact: {
      firstName: this.props.contact.firstName,
      lastName: this.props.contact.lastName,
      email: this.props.contact.email,
      cell: this.props.contact.cell,
    },
    error: false,
  }

  // By onchanging form fields update local state by field name property.
  updateContactState = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      contact: {
        ...prevState.contact,
        [name]: value,
      },
    }));
  }

  // Handle submit form
  handleClickSaveContact = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      cell,
    } = this.state.contact;

    /*
    * Regex for email validation.
    */
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Form validation. Check if any field is empty and email address is valid based on regex
    if (firstName.trim().length === 0
      || lastName.trim().length === 0
      || email.trim().length === 0
      || cell.trim().length === 0) {
      this.setState({ error: 'Please, fill out every field!' });
    } else if (!emailReg.test(email)) {
      this.setState({ error: 'Please, enter a valid email address!' });
    } else {
      this.props.getFormData(this.state.contact);
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleClickSaveContact}>
        <FormGroup>
          <Label for="firstName">First name:</Label>
          <Input
            type="text"
            value={this.state.contact.firstName}
            name="firstName"
            placeholder="Enter First Name"
            onChange={this.updateContactState}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last name:</Label>
          <Input
            type="text"
            value={this.state.contact.lastName}
            name="lastName"
            placeholder="Enter Last Name"
            onChange={this.updateContactState}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">E-mail:</Label>
          <Input
            type="text"
            value={this.state.contact.email}
            name="email"
            placeholder="Enter Email"
            onChange={this.updateContactState}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cell">Phone:</Label>
          <Input
            type="text"
            value={this.state.contact.cell}
            name="cell"
            placeholder="Enter Phone"
            onChange={this.updateContactState}
          />
        </FormGroup>
        {
          this.state.error && <p className="error">{this.state.error}</p>
        }
        <div className="text-center pt-4">
          <Button className="btn btn--empty btn--gray-empty">
            {this.props.page === 'editContact' ? 'Save Contact' : 'Add Contact'}
          </Button>
        </div>
      </Form>
    );
  }
}

export default ContactForm;
