import axiosClient from "../../../utils/axios";

export const getProfile = (accountId) => {
  return axiosClient.get(`users/${accountId}`);
};

export const changePasswordApi = (accountId, data) => {
  return axiosClient.put(`users/${accountId}/password`, data);
};

export const updateEmailProfile = (accountId, data) => {
  return axiosClient.patch(`users/${accountId}`, data);
};

export const confirmEmailApi = (token) => {
  return axiosClient.get(`users/confirm-email/${token}`);
};
