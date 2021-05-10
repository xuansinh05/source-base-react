import React, { useState } from "react";
//dependencies
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { InputAdornment } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
//actions
import { forgotPasswordRequest } from "../store/actions";
//constants,
import {
  ForgotPasswordScherma,
  initialValuesFormForgotPassword,
} from "../store/constants";
//components
import TextInput from "../../../components/inputs/TextInput";
import Button from "../../../components/Button";
import CardAuth from "../Card";
//styles
import { useStyles } from "./styles";

export const ForgotPassword = (props) => {
  const { isRequesting, forgotPassword } = props;

  const classes = useStyles();
  const history = useHistory();

  const [isSentFortgotPassword, setIsSentForgotPassword] = useState(false);
  const [email, setEmail] = useState("");

  const submitFormForgotPassword = (values) => {
    setEmail(values.email);
    forgotPassword({ email: values.email }, () => {
      setIsSentForgotPassword(true);
    });
  };

  const handleBackLogin = () => history.push("/pilot/login");

  const onBackToForgotPassword = () => setIsSentForgotPassword(false);

  const renderFormSentForgotPassword = () => {
    return (
      <div className={classes.boxSentEmail}>
        <div>
          We sent a message to {email} so you can pick your new password. <br />{" "}
          Not your email address?{" "}
          <div onClick={onBackToForgotPassword} className={classes.link}>
            Try again
          </div>
        </div>
      </div>
    );
  };

  return (
    <CardAuth
      title="Forgot Password"
      subTitle={
        isSentFortgotPassword
          ? ""
          : "We will send you instructions to reset your password"
      }
    >
      {isSentFortgotPassword ? (
        renderFormSentForgotPassword()
      ) : (
        <Formik
          initialValues={initialValuesFormForgotPassword}
          onSubmit={submitFormForgotPassword}
          validationSchema={ForgotPasswordScherma}
        >
          {({ values, errors, handleChange, handleSubmit, handleBlur }) => (
            <form onSubmit={handleSubmit}>
              <TextInput
                id="email"
                className={classes.margin}
                label="Email"
                name="email"
                type="text"
                value={values.email}
                onChange={handleChange("email")}
                errorInput={errors.email}
                onBlur={handleBlur("email")}
                variant="outlined"
                autoComplete="off"
                placeholder="Enter email to retrieve your password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <div className={classes.footer}>
                <Button
                  className={`${classes.margin} ${classes.btnBack}`}
                  color="primary"
                  isLoading={isRequesting}
                  variant="outlined"
                  onClick={handleBackLogin}
                  text="Back To Login"
                />
                <Button
                  className={`${classes.margin} ${classes.btn}`}
                  color="primary"
                  type="submit"
                  isLoading={isRequesting}
                  variant="outlined"
                  text="Next"
                />
              </div>
            </form>
          )}
        </Formik>
      )}
    </CardAuth>
  );
};

const mapStateToProps = (store) => ({
  isRequesting: store.auth.isRequesting,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      forgotPassword: forgotPasswordRequest,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
