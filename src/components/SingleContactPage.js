/*
* Single Contact Page
* Props:
* - contact: actual contact data from contacts state by id in URL.
* - dispatchDeleteContact for sending contact id to store via deleteContact action creator to delete the contact
* - React Router history for dropping user back to dashboard after deleting the contact
* Bootstrap 4 modal is used to confirm delete intention.
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteContact } from '../actions/contacts';

export class SingleContactPage extends Component {
  static propTypes = {
    contact: PropTypes.objectOf(PropTypes.string),
    dispatchDeleteContact: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
  }

  static defaultProps = {
    contact: {},
  }

  // By clicking delete button change state to true in order to open modal
  state = {
    modal: false,
  }

  // Changing modal state to open and close modal
  toggleModal = () => {
    this.setState(prevState => ({ modal: !prevState.modal }));
  }

  render() {
    const {
      id,
      firstName,
      lastName,
      email,
      cell,
    } = this.props.contact;

    return (
      <div className="single-contact">
        <h1>{firstName} {lastName}&apos;s Profile</h1>
        <div className="single-contact__data px-lg-7 pb-5">
          <p><span className="label-color">Name:</span> {firstName} {lastName}</p>
          <p><span className="label-color">E-mail:</span> <a href={`mailto:${email}`}>{email}</a></p>
          <p><span className="label-color">Phone:</span> {cell}</p>
        </div>
        <div className="text-center">
          {/* By clicking delete button we open modal to confirm */}
          <button
            type="button"
            className="btn btn--empty btn--red-empty mr-4"
            onClick={this.toggleModal}
          >
            Delete
          </button>
          <Link
            className="btn btn--empty btn--gray-empty"
            to={`/editcontact/${id}`}
          >
            Edit
          </Link>
        </div>
        {/* Bootstrap 4 modal */}
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} className="">
          <ModalHeader toggle={this.toggleModal}>Delete contact</ModalHeader>
          <ModalBody>
            Are you sure you want to delete {firstName} {lastName}&apos;s Profile?
          </ModalBody>
          <ModalFooter>
            {/* By clicking delete button in modal we actually delete the contact */}
            <Button
              className="btn btn--empty btn--red-empty"
              id="delete"
              onClick={() => {
                this.props.dispatchDeleteContact(this.props.contact.id);
                this.props.history.push('/');
              }}
            >
              Delete
            </Button>{' '}
            <Button
              className="btn btn--empty btn--gray-empty"
              onClick={this.toggleModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
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
* Create dispatchDeleteContact function to link deleteContact action creator with the component via props.
*/
const mapDispatchToProps = dispatch => ({
  dispatchDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleContactPage);
