import { types } from "./constants";

export function getProfileRequest() {
  return {
    type: types.GET_PROFILE_REQUEST,
  };
}

export function getProfileSuccess(data) {
  return {
    type: types.GET_PROFILE_SUCCESS,
    payload: { data },
  };
}

export function getProfileFail(error) {
  return {
    type: types.GET_PROFILE_FAIL,
    payload: { error },
  };
}

export function changePasswordRequest(submitData) {
  return {
    type: types.CHANGE_PASSWORD_REQUEST,
    payload: { submitData },
  };
}

export function changePasswordSuccess(data) {
  return {
    type: types.CHANGE_PASSWORD_SUCCESS,
    payload: { data },
  };
}

export function changePasswordFail(error) {
  return {
    type: types.CHANGE_PASSWORD_FAIL,
    payload: { error },
  };
}

export function updateEmailProfileRequest(submitData) {
  return {
    type: types.UPDATE_EMAIL_PROFILE_REQUEST,
    payload: { submitData },
  };
}

export function updateEmailProfileSuccess(data) {
  return {
    type: types.UPDATE_EMAIL_PROFILE_SUCCESS,
    payload: { data },
  };
}

export function updateEmailProfileFail(error) {
  return {
    type: types.UPDATE_EMAIL_PROFILE_FAIL,
    payload: { error },
  };
}

export function confirmEmailProfileRequest(token) {
  return {
    type: types.CONFIRM_EMAIL_REQUEST,
    payload: { token },
  };
}

export function confirmEmailProfileSuccess(data) {
  return {
    type: types.CONFIRM_EMAIL_SUCCESS,
    payload: { data },
  };
}

export function confirmEmailProfileFail(error) {
  return {
    type: types.CONFIRM_EMAIL_FAIL,
    payload: { error },
  };
}
