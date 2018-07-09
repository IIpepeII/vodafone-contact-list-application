/*
* Footer for the app.
* Component is wrapped in withRouter HOC to have access to React Router's history object.
* History object is needed to get actual pathname.
* Based on actual path we display or hide add new contact button.
*/
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Footer = ({ history }) => (
  <footer className="footer text-center py-5">
    All Rights Reserved VSSB 2018.
    {/* On addcontact page do not display add new button */}
    {
      !(history.location.pathname === '/addcontact')
      && (
      <Link
        className="btn btn--red btn--rounded btn--addnew"
        to="/addcontact"
      >
        &#43;
      </Link>
      )
    }
  </footer>
);

export default withRouter(Footer);
