import React from "react";
import { Redirect, Route } from "react-router-dom";

const RedirectRoute = (props) => {
  return (
    <Route
      exact={props.exact}
      render={(value) => (
        <Redirect
          to={{
            pathname: props.redirectPath,
            state: { from: value.location },
          }}
        />
      )}
    />
  );
};

export default RedirectRoute;
