/*
* Header of the app.
* Props:
* - dispatchTextFilter: it is for sending filter text from search input to store via setTextFilter action creator
*/
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
import setTextFilter from '../actions/filters';
import logo from '../images/vodafone_logo.svg';

export const Header = (props) => {
  const { dispatchTextFilter } = props;

  return (
    <header className="header container py-4">
      <div className="header__logo">
        <Link to="/"><img src={logo} alt="Vodafone" /></Link>
      </div>
      <div className="header__search d-none d-sm-block">
        <FormGroup>
          <Label for="search" className="sr-only">Search for contact</Label>
          <Input
            type="text"
            placeholder="Search for contact"
            onChange={e => dispatchTextFilter(e.target.value)}
          />
        </FormGroup>
      </div>
    </header>
  );
};

Header.propTypes = {
  dispatchTextFilter: PropTypes.func.isRequired,
};

/*
* Create dispatchTextFilter function to link setTextFilter action creator with the component via props.
*/
const mapDispatchToProps = dispatch => ({
  dispatchTextFilter: text => dispatch(setTextFilter(text)),
});

export default connect(null, mapDispatchToProps)(Header);
