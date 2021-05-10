import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import LoginContainer from "../../containers/auth/Login";

function Login() {
  return (
    <AuthLayout>
      <LoginContainer />
    </AuthLayout>
  );
}

export default Login;
