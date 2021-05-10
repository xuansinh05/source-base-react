import { types } from "./constants";

export const showSnackbar = (payload) => ({
  type: types.SHOW_SNACKBAR,
  payload,
});

export const clearSnackbar = () => ({ type: types.CLEAR_SNACKBAR });
