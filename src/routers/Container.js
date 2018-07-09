/*
* This file contains the routes for the app and the setup for the transitions between pages.
*/
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Dashboard from '../components/Dashboard';
import SingleContactPage from '../components/SingleContactPage';
import AddContactPage from '../components/AddContactPage';
import EditContactPage from '../components/EditContactPage';
import PageNotFound from '../components/PageNotFound';

const Container = ({ location }) => (
  <div className="container">
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames="fade"
      >
        <Switch location={location}>
          <Route path="/" component={Dashboard} exact />
          <Route path="/contact/:id" component={SingleContactPage} />
          <Route path="/editcontact/:id" component={EditContactPage} />
          <Route path="/addcontact" component={AddContactPage} />
          <Route component={PageNotFound} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
);

/*
* Component is wrapped in withRouter HOC to have access to React Router's location prop.
*/
export default withRouter(Container);
