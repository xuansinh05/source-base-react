import { types } from "./constants";

export function loginRequest(data, callback) {
  return {
    type: types.LOGIN_REQUEST,
    payload: { data, callback },
  };
}

export function loginSuccess(data) {
  return {
    type: types.LOGIN_SUCCESS,
    payload: { data },
  };
}

export function loginFail(error) {
  return {
    type: types.LOGIN_FAIL,
    payload: { error },
  };
}

export function logoutRequest(callback) {
  return {
    type: types.LOGOUT_REQUEST,
    payload: { callback },
  };
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS,
  };
}

export function logoutFail() {
  return {
    type: types.LOGOUT_FAIL,
  };
}

export function forgotPasswordRequest(email, callback) {
  return {
    type: types.FORGOT_PASSWORD_REQUEST,
    payload: { email, callback },
  };
}

export function forgotPasswordSuccess() {
  return {
    type: types.FORGOT_PASSWORD_SUCCESS,
  };
}

export function forgotPasswordFail() {
  return {
    type: types.FORGOT_PASSWORD_FAIL,
  };
}

export function resetPasswordRequest(token, data, callback) {
  return {
    type: types.RESET_PASSWORD_REQUEST,
    payload: { token, data, callback },
  };
}

export function resetPasswordSuccess() {
  return {
    type: types.RESET_PASSWORD_SUCCESS,
  };
}

export function resetPasswordFail() {
  return {
    type: types.RESET_PASSWORD_FAIL,
  };
}
