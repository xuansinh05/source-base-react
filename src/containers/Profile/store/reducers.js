import produce from "immer";
import { types } from "./constants";

//initial state of the profile page
export const initialState = {
  profile: {},
  isLoading: true,
  isChangingPassword: false,
};

const profileReducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case types.GET_PROFILE_REQUEST:
        draft.isLoading = true;
        break;
      case types.CHANGE_PASSWORD_REQUEST:
        draft.isChangingPassword = true;
        break;
      case types.GET_PROFILE_SUCCESS:
        draft.profile = payload.data;
        draft.isLoading = false;
        break;
      case types.CHANGE_PASSWORD_SUCCESS:
        draft.isChangingPassword = false;
        break;
      case types.CHANGE_PASSWORD_FAIL:
        draft.isChangingPassword = false;
        break;
      default:
        break;
    }
  });

export default profileReducer;
