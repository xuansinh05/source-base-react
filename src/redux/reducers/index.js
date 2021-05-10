import { combineReducers } from "redux";
import profileReducer from "../../containers/Profile/store/reducers";
import loginReducer from "../../containers/auth/store/reducers";
import snackbar from "../../containers/Snackbar/store/reducers";

export const rootReducer = combineReducers({
  profile: profileReducer,
  auth: loginReducer,
  snackbar,
});
