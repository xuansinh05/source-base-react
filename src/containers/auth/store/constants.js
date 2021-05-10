import * as Yup from "yup";

export const types = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",

  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAIL: "LOGOUT_FAIL",

  FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_FAIL: "FORGOT_PASSWORD_FAIL",

  RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAIL: "RESET_PASSWORD_FAIL",
};

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export const ForgotPasswordScherma = Yup.object().shape({
  email: Yup.string().email("Email invalid").required("Required"),
});

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm password is not matching")
    .required("Required"),
});

export const initialValuesFormResetPassword = {
  password: "",
  password_confirmation: "",
};

export const initialValuesFormForgotPassword = {
  email: "",
};

export const initialValuesFormLogin = {
  username: "",
  password: "",
};
