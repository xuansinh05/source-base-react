import produce from "immer";

import { types } from "./constants";

export const initialState = {
  show: false,
  snackType: "success",
  snackMessage: "",
  isNotClear: false,
};

const snackbar = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case types.SHOW_SNACKBAR:
        draft.show = true;
        draft.snackType = payload.snackType;
        draft.snackMessage = payload.snackMessage;
        draft.isNotClear = !!payload?.isNotClear;
        break;
      case types.CLEAR_SNACKBAR:
        draft.show = false;
        draft.snackType = "success";
        draft.snackMessage = "";
        break;
      default:
        break;
    }
  });

export default snackbar;
