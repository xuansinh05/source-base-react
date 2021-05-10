import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import ResetPassword from "../../containers/auth/ResetPassword";

function Login() {
  return (
    <AuthLayout>
      <ResetPassword />
    </AuthLayout>
  );
}

export default Login;
