import produce from "immer";
import { types } from "./constants";

//initial state of the dashboard page
export const initialState = {
  isRequesting: false,
  error: {},
};

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.LOGIN_REQUEST:
      case types.FORGOT_PASSWORD_REQUEST:
      case types.RESET_PASSWORD_REQUEST:
        draft.isRequesting = true;
        break;
      case types.FORGOT_PASSWORD_SUCCESS:
      case types.RESET_PASSWORD_SUCCESS:
        draft.isRequesting = false;
        break;
      case types.LOGIN_SUCCESS:
        draft.isRequesting = false;
        draft.error = {};
        break;
      case types.FORGOT_PASSWORD_FAIL:
      case types.RESET_PASSWORD_FAIL:
        draft.isRequesting = false;
        break;
      case types.LOGIN_FAIL:
        draft.error = action.payload.error;
        draft.isRequesting = false;
        break;
      default:
        break;
    }
  });

export default loginReducer;
