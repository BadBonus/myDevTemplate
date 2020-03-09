import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { connect } from 'react-redux';
import App from '../App';
import AuthPage from '../../components/pages/AuthPage';
// import { history } from '../../history';

// eslint-disable-next-line react/prop-types
const Root = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/main" component={App} />
      <Route path="/login" component={AuthPage} />
      <Route exact path="/" render={() => <Redirect to="/main" />} />
    </Switch>
  </ConnectedRouter>
);

// if(!state.loginForm.decodedJWT) createBrowserHistory.push('/login')
const mapStateToProps = (state) => ({
  // isAuthorized: !!state.loginForm.decodedJWT,
});

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators({
//       ...authActions,
//     }, dispatch),
//   });

export default connect(mapStateToProps)(Root);
