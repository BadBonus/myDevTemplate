import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';
import customerRoutes from '../../routes';
import './style.css';

const renderRoutes = ({ path, component, exact }) => (
  <Route key={path} exact={exact} path={path} component={component} />
);

renderRoutes.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
  exact: PropTypes.bool.isRequired,
};

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <section className="main">
        <Switch>
          {
            customerRoutes.map((route) => renderRoutes(route))
          }
        </Switch>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  // const { decodedJWT } = state.loginForm;
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    // ...authActions,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
