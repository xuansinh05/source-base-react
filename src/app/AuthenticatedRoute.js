import React from "react";
import { Route, Redirect } from "react-router-dom";

import CookieInstance from "../utils/cookie";

const AuthenticatedRoute = ({ component: Component, location, ...rest }) => {
  if (
    CookieInstance.checkCookie(process.env.REACT_APP_COOKIE_NAME || "userToken")
  ) {
    return (
      <Route {...rest} render={(props) => <Component {...props} {...rest} />} />
    );
  }
  return (
    <Route
      {...rest}
      render={(props) => (
        <Redirect
          to={{
            pathname: "/pilot/login",
            state: { from: props.locations },
          }}
          {...rest}
        />
      )}
    />
  );
};

export default AuthenticatedRoute;
