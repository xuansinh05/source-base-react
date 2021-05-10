import { takeLatest, call, put } from "redux-saga/effects";
import { types } from "./constants";
import * as actions from "./actions";
import * as services from "./services";
import CookieInstance from "../../../utils/cookie";
import AxiosClient from "../../../utils/axios";
import * as localStorage from "../../../utils/localStorage";

import { showSnackbar } from "../../Snackbar/store/actions";

function* loginSaga(action) {
  const { data: dataSubmit, callback } = action.payload;

  try {
    const { data } = yield call(services.loginApi, dataSubmit);
    CookieInstance.setCookie(
      process.env.REACT_APP_COOKIE_NAME || "userToken",
      data.data.token
    );
    AxiosClient.setHeader(data.data.token);
    localStorage.setItem("profile", data.data);
    yield put(actions.loginSuccess(data));
    callback();
  } catch (error) {
    const { data = {} } = error;
    yield put(actions.loginFail(data));
  }
}

function* logoutSaga(action) {
  const { callback } = action.payload;
  try {
    CookieInstance.removeCookie(
      process.env.REACT_APP_COOKIE_NAME || "userToken"
    );
    localStorage.removeItem("profile");
    yield put(actions.logoutSuccess());
    callback(true);
  } catch (error) {
    yield put(actions.logoutFail());
  }
}

function* forgotPasswordSaga(action) {
  const { email, callback } = action.payload;
  try {
    const { data } = yield call(services.forgotPasswordApi, email);
    yield put(
      showSnackbar({
        snackType: "success",
        snackMessage: "Check your email to confirm",
      })
    );
    yield put(actions.forgotPasswordSuccess(data));
    callback();
  } catch (error) {
    const { data = {} } = error;
    yield put(
      showSnackbar({
        snackType: "error",
        snackMessage: `${data.message}`,
      })
    );
    yield put(actions.forgotPasswordFail(data));
  }
}

function* resetPasswordSaga(action) {
  const { token, data: submitData, callback } = action.payload;
  try {
    const { data } = yield call(services.resetPassword, token, submitData);
    console.log("resetPasswordSaga => data", data);
    yield put(
      showSnackbar({
        snackType: "success",
        snackMessage: "Reset password successfully",
      })
    );
    yield put(actions.resetPasswordSuccess(data));
    callback();
  } catch (error) {
    const { data = {} } = error;
    yield put(
      showSnackbar({
        snackType: "error",
        snackMessage: `Reset password fail: ${data.message}`,
      })
    );
    yield put(actions.resetPasswordFail(data));
  }
}

export default function* loginWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga);
  yield takeLatest(types.LOGOUT_REQUEST, logoutSaga);
  yield takeLatest(types.FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
  yield takeLatest(types.RESET_PASSWORD_REQUEST, resetPasswordSaga);
}
