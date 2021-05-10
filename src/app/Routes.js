import React from "react";
import { Switch, Route } from "react-router-dom";
//routes
import AuthenticatedRoute from "./AuthenticatedRoute";
import RedirectRoute from "./RedirectRoute";

//components
import Profile from "../pages/Profile";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import NotFoundPage from "../pages/NotFoundPage";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Switch>
      <RedirectRoute exact path="/" redirectPath="/pilot/profile" />
      <RedirectRoute exact path="/pilot" redirectPath="/pilot/profile" />
      <Route exact path="/pilot/login" component={Login} />
      <Route exact path="/pilot/forgot-password" component={ForgotPassword} />
      <Route
        exact
        path="/pilot/forgot-password/reset-password/:token"
        component={ResetPassword}
      />
      <AuthenticatedRoute exact path="/pilot/profile" component={Profile} />
      <AuthenticatedRoute
        exact
        path="/pilot/profile/confirm-email/:token"
        component={Profile}
      />
      <Route path="*" exact component={NotFoundPage} />
    </Switch>
  );
};
