import axiosClient from "../../../utils/axios";

export const loginApi = (data) => {
  return axiosClient.post("users/login", data);
};

export const forgotPasswordApi = (data) => {
  return axiosClient.post("users/forgot-password", data);
};

export const resetPassword = (token, data) => {
  return axiosClient.post(`users/reset-password/${token}`, data);
};
