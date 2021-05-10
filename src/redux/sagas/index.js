import { all } from "redux-saga/effects";
import profileSaga from "../../containers/Profile/store/sagas";
import loginSaga from "../../containers/auth/store/sagas";

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield all([profileSaga(), loginSaga()]);
}
