import React from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

const PrivateRoute = ({ component: Component, isPrivate = false, ...rest }) => {
  const userStore = React.useContext(UserContext);

  if (isPrivate && !localStorage.getItem("loged")) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRoute;
