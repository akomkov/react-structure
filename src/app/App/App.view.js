// @flow
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import NoMatch from '../NoMatch';

import './App.view.scss';

/**
 * View part of App component.
 *
 * @module App/App/view
 */

/**
 * Shape of AppView's props.
 *
 * @memberof App/App/view
 */

/**
 * Plain part of App component's View.
 *
 * @returns {?React.Node} Rendered App.
 * @memberof App/App/view
 */
const AppView = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </Router>
);

// AppView.defaultProps = {}

/**
 * View part of App exported as PureComponent to prevent extra re-renders.
 *
 * @memberof App/App/view
 */
export default AppView;
