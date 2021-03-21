import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, isPrivate = false, ...rest }) => {
  const user = useSelector(state => state.user);

  if (isPrivate && !user.isLoged) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default PrivateRoute;
