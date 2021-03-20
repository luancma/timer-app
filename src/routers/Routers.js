import React from "react";
import PrivateRouter from "./PrivateRouter";
import { Route, Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

const Routers = () => {
  return (
    <Switch>
      <PrivateRouter exact path="/" component={Login} />
      <PrivateRouter path="/logado" component={Home} isPrivate />
      <PrivateRouter path="/login" component={Login} />
      <PrivateRouter component={() => <h1>404</h1>} />
    </Switch>
  );
};

export default Routers;
