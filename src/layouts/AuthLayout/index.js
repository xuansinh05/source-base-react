import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Snackbar from "../../containers/Snackbar";
import CookieInstance from "../../utils/cookie";
//styles
import { Container, Circles } from "./styles";

export const AuthLayout = (props) => {
  const history = useHistory();
  const isLoggedIn = CookieInstance.checkCookie(
    process.env.REACT_APP_COOKIE_NAME || "userToken"
  );

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/pilot");
    }
  }, [history, isLoggedIn]);

  return (
    <Container>
      {props.children}
      <Circles>
        {Array.from({ length: 50 }).map((i, index) => (
          <li key={index}></li>
        ))}
      </Circles>
      <Snackbar />
    </Container>
  );
};

export default AuthLayout;
