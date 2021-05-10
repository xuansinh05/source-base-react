import { takeLatest, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  getProfile,
  changePasswordApi,
  updateEmailProfile,
  confirmEmailApi,
} from "./services";
import { types } from "./constants";
import {
  getProfileSuccess,
  getProfileFail,
  changePasswordSuccess,
  changePasswordFail,
  updateEmailProfileFail,
  updateEmailProfileSuccess,
  confirmEmailProfileSuccess,
  confirmEmailProfileFail,
} from "./actions";
import { showSnackbar } from "../../Snackbar/store/actions";

import * as localStorage from "../../../utils/localStorage";

function* getProfileSaga() {
  try {
    const { id } = localStorage.getItem("profile");
    const {
      data: { data },
    } = yield call(getProfile, id);
    if (!data.email) {
      yield put(
        showSnackbar({
          snackType: "warning",
          snackMessage: "Email is empty, please update your email",
        })
      );
    }
    yield put(getProfileSuccess(data));
  } catch (error) {
    const { data = {} } = { ...error };
    const payload = {
      ...data,
      errors: { ...data.message },
    };
    yield put(getProfileFail(payload));
  }
}

function* changePasswordSaga(action) {
  const { submitData } = action.payload;
  try {
    const { id } = localStorage.getItem("profile");
    const {
      data: { data },
    } = yield call(changePasswordApi, id, submitData);
    yield put(
      showSnackbar({
        snackType: "success",
        snackMessage: "Change password successfully",
      })
    );
    yield put(changePasswordSuccess(data));
  } catch (error) {
    const { data = {} } = { ...error };
    const payload = {
      ...data,
      errors: { ...data.message },
    };
    yield put(
      showSnackbar({
        snackType: "error",
        snackMessage: "Change password fail",
      })
    );
    yield put(changePasswordFail(payload));
  }
}

function* updateEmailProfileSaga(action) {
  const { submitData } = action.payload;
  try {
    const { id } = localStorage.getItem("profile");
    const {
      data: { data },
    } = yield call(updateEmailProfile, id, submitData);
    yield put(
      showSnackbar({
        snackType: "success",
        snackMessage: "Check your email to confirm update email",
      })
    );
    yield put(updateEmailProfileSuccess(data));
  } catch (error) {
    const { data = {} } = { ...error };
    const payload = {
      ...data,
      errors: { ...data.message },
    };
    yield put(
      showSnackbar({
        snackType: "error",
        snackMessage: "Update user profile fail",
      })
    );
    yield put(updateEmailProfileFail(payload));
  }
}

function* confirmEmailSaga(action) {
  const { token } = action.payload;
  try {
    const { data } = yield call(confirmEmailApi, token);
    yield put(
      showSnackbar({
        snackType: "success",
        snackMessage: "Update your email successfully",
      })
    );
    yield fork(getProfileSaga);
    yield put(confirmEmailProfileSuccess(data));
  } catch (error) {
    const { data = {} } = { ...error };
    const payload = {
      ...data,
      errors: { ...data.message },
    };
    yield put(
      showSnackbar({
        snackType: "error",
        snackMessage: "Update your email fail",
      })
    );
    yield put(confirmEmailProfileFail(payload));
  }
}

export default function* profileWatcher() {
  yield takeLatest(types.GET_PROFILE_REQUEST, getProfileSaga);
  yield takeLatest(types.CHANGE_PASSWORD_REQUEST, changePasswordSaga);
  yield takeLatest(types.UPDATE_EMAIL_PROFILE_REQUEST, updateEmailProfileSaga);
  yield takeEvery(types.CONFIRM_EMAIL_REQUEST, confirmEmailSaga);
}
