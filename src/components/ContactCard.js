/*
* Contact item for Dashboard contacts grid.
* props:
* - data: individual contact object from contacts state getting in Dashboard component.
*/
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContactCard = (props) => {
  const {
    id,
    firstName,
    lastName,
    email,
    cell,
  } = props.data;

  return (
    <div className="contact-card col-sm-6 col-md-4 text-center">
      <Link to={`/contact/${id}`} className="contact-card__clickwrapper">
        <header className="contact-card__header py-3">
          { lastName }, { firstName }
        </header>
        <div className="contact-card__content">
          <small className="pt-2">{ email }</small>
          <small className="py-2">{ cell }</small>
        </div>
      </Link>
    </div>
  );
};

ContactCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ContactCard;
