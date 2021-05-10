import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik } from "formik";
import { useRouteMatch } from "react-router-dom";

import { AccountCircle as AccountCircleIcon } from "@material-ui/icons";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import moment from "moment";

//actions
import {
  getProfileRequest,
  changePasswordRequest,
  updateEmailProfileRequest,
  confirmEmailProfileRequest,
} from "./store/actions";
import {
  ChangePasswordSchema,
  initialValuesFormUpdatePassword,
  ProfileFormSchema,
} from "./store/constants";

//components
import TextInput from "../../components/inputs/TextInput";
import PasswordInput from "../../components/inputs/PasswordInput";

import Button from "../../components/Button";
import { useStyles } from "./styles";

const formatDate = (date) =>
  date ? moment.utc(date * 1000).format("DD/MM/YYYY hh:mm A") : "";

export const Profile = (props) => {
  const {
    profile,
    getProfile,
    changePassword,
    isChangingPassword,
    isLoading,
    updateEmailProfile,
    confirmEmailProfile,
  } = props;
  const classes = useStyles();
  const match = useRouteMatch();

  const initialValues = {
    username: profile?.username || "",
    email: profile?.email || "",
    limitation: formatDate(profile?.limitation),
    device: profile?.device || "",
    lastFirmLogin: formatDate(profile?.firm_at),
    lastStationLogin: formatDate(profile?.firm_at),
  };

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    if (
      match.url.includes("/pilot/profile/confirm-email") &&
      !!match.params?.token
    ) {
      confirmEmailProfile(match.params.token);
    }
  }, [match, confirmEmailProfile]);

  //handle update information profile
  const onSubmit = (values) => {
    let submitData = {
      device: values.device,
    };
    if (!profile?.email) {
      submitData = { ...submitData, email: values.email };
    }
    updateEmailProfile(submitData);
  };

  //handle update password
  const onSubmitUpdatePassword = (values) => {
    const submitData = {
      curr_password: values.currentPassword,
      new_password: values.password,
      password_confirmation: values.confirmPassword,
    };
    changePassword(submitData);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <AccountCircleIcon />
        <span>Profile</span>
      </div>
      <div className={classes.content}>
        <Paper className={classes.sectionGeneral}>
          <div className={classes.title}>General</div>
          {isLoading ? (
            <div className={classes.boxLoading}>
              <CircularProgress className={classes.progress} />
            </div>
          ) : (
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={ProfileFormSchema}
            >
              {({
                values,
                errors,
                handleChange,
                handleSubmit,
                handleBlur,
                touched,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className={classes.form}>
                    <TextInput
                      id="username"
                      className={classes.textInput}
                      label="Username"
                      name="username"
                      type="text"
                      value={values.username}
                      onChange={handleChange("username")}
                      errorInput={errors.username}
                      onBlur={handleBlur("username")}
                      variant="outlined"
                      autoComplete="off"
                      disabled
                    />
                    <TextInput
                      id="email"
                      className={classes.textInput}
                      label="Email"
                      name="email"
                      type="text"
                      value={values.email}
                      onChange={handleChange("email")}
                      errorInput={touched.email && errors.email}
                      onBlur={handleBlur("email")}
                      variant="outlined"
                      autoComplete="off"
                      disabled={profile?.email}
                    />
                    <TextInput
                      id="limitation"
                      className={classes.textInput}
                      label="Limitation"
                      name="limitation"
                      type="text"
                      value={values.limitation}
                      onChange={handleChange("limitation")}
                      errorInput={touched.limitation && errors.limitation}
                      onBlur={handleBlur("limitation")}
                      variant="outlined"
                      autoComplete="off"
                      disabled
                    />
                    <TextInput
                      id="device"
                      className={classes.textInput}
                      label="Device"
                      name="device"
                      type="text"
                      value={values.device}
                      onChange={handleChange("device")}
                      errorInput={errors.device}
                      onBlur={handleBlur("device")}
                      variant="outlined"
                      autoComplete="off"
                    />
                    <TextInput
                      id="lastFirmLogin"
                      className={classes.textInput}
                      label="Last Firm Login"
                      name="lastFirmLogin"
                      type="text"
                      value={values.lastFirmLogin}
                      onChange={handleChange("lastFirmLogin")}
                      errorInput={errors.lastFirmLogin}
                      onBlur={handleBlur("lastFirmLogin")}
                      variant="outlined"
                      autoComplete="off"
                      disabled
                    />
                    <TextInput
                      id="lastStationLogin"
                      className={classes.textInput}
                      label="Last Station Login"
                      name="lastStationLogin"
                      type="text"
                      value={values.lastStationLogin}
                      onChange={handleChange("lastStationLogin")}
                      errorInput={errors.lastStationLogin}
                      onBlur={handleBlur("lastStationLogin")}
                      variant="outlined"
                      autoComplete="off"
                      disabled
                    />
                  </div>

                  <div className={classes.center}>
                    <Button
                      className={`${classes.margin} ${classes.btn}`}
                      color="primary"
                      type="submit"
                      isLoading={false}
                      variant="outlined"
                      text="Update"
                    />
                  </div>
                </form>
              )}
            </Formik>
          )}
        </Paper>
        <Paper className={classes.sectionUpdatePassword}>
          <div className={classes.title}>Update Password</div>
          <Formik
            initialValues={initialValuesFormUpdatePassword}
            onSubmit={onSubmitUpdatePassword}
            validationSchema={ChangePasswordSchema}
          >
            {({
              values,
              errors,
              handleChange,
              handleSubmit,
              handleBlur,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className={classes.form}>
                  <PasswordInput
                    id="currentPassword"
                    className={classes.passwordInput}
                    label="Current Password"
                    name="currentPassword"
                    value={values.currentPassword}
                    onChange={handleChange("currentPassword")}
                    errorInput={
                      errors.currentPassword &&
                      touched.currentPassword &&
                      "Required"
                    }
                    onBlur={handleBlur("currentPassword")}
                    variant="outlined"
                    autoComplete="off"
                  />
                  <PasswordInput
                    className={classes.passwordInput}
                    label="New Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange("password")}
                    errorInput={touched.password && errors.password}
                    onBlur={handleBlur("password")}
                    variant="outlined"
                    autoComplete="off"
                  />
                  <PasswordInput
                    id="confirmPassword"
                    className={classes.passwordInput}
                    label="Confirm New Password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    errorInput={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    onBlur={handleBlur("confirmPassword")}
                    variant="outlined"
                    autoComplete="off"
                  />
                </div>
                <div className={classes.center}>
                  <Button
                    className={`${classes.margin} ${classes.btn}`}
                    color="primary"
                    type="submit"
                    isLoading={isChangingPassword}
                    variant="outlined"
                    text="Update Password"
                  />
                </div>
              </form>
            )}
          </Formik>
        </Paper>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  const { profile, isLoading, isChangingPassword } = store.profile;
  return {
    profile,
    isLoading,
    isChangingPassword,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getProfile: getProfileRequest,
      changePassword: changePasswordRequest,
      updateEmailProfile: updateEmailProfileRequest,
      confirmEmailProfile: confirmEmailProfileRequest,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
