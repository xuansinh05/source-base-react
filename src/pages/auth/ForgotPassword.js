import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import ForgotPassword from "../../containers/auth/ForgotPassword";

function Login() {
  return (
    <AuthLayout>
      <ForgotPassword />
    </AuthLayout>
  );
}

export default Login;
