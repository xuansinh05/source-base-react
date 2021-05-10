import * as Yup from "yup";

export const types = {
  GET_PROFILE_REQUEST: "GET_PROFILE_REQUEST",
  GET_PROFILE_SUCCESS: "GET_PROFILE_SUCCESS",
  GET_PROFILE_FAIL: "GET_PROFILE_FAIL",

  CHANGE_PASSWORD_REQUEST: "CHANGE_PASSWORD_REQUEST",
  CHANGE_PASSWORD_SUCCESS: "CHANGE_PASSWORD_SUCCESS",
  CHANGE_PASSWORD_FAIL: "CHANGE_PASSWORD_FAIL",

  UPDATE_EMAIL_PROFILE_REQUEST: "UPDATE_EMAIL_PROFILE_REQUEST",
  UPDATE_EMAIL_PROFILE_SUCCESS: "UPDATE_EMAIL_PROFILE_SUCCESS",
  UPDATE_EMAIL_PROFILE_FAIL: "UPDATE_EMAIL_PROFILE_FAIL",

  CONFIRM_EMAIL_REQUEST: "CONFIRM_EMAIL_REQUEST",
  CONFIRM_EMAIL_SUCCESS: "CONFIRM_EMAIL_SUCCESS",
  CONFIRM_EMAIL_FAIL: "CONFIRM_EMAIL_FAIL",
};

export const initialValuesFormUpdatePassword = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};

export const ChangePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm password is not matching")
    .required("Required"),
});

export const ProfileFormSchema = Yup.object().shape({
  email: Yup.string().email("Email invalid"),
});
