import React from "react";
//dependencies
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik } from "formik";
import { useHistory, useRouteMatch } from "react-router-dom";
//actions
import { resetPasswordRequest } from "../store/actions";
//constants,
import {
  ResetPasswordSchema,
  initialValuesFormResetPassword,
} from "../store/constants";
//components
import PasswordInput from "../../../components/inputs/PasswordInput";
import Button from "../../../components/Button";
import CardAuth from "../Card";
//styles
import { useStyles } from "./styles";

export const ResetPassword = (props) => {
  const { isRequesting, resetPassword } = props;
  const classes = useStyles();
  const history = useHistory();
  const match = useRouteMatch();

  const submitFormResetPassword = (values) => {
    const token = match.params?.token || "";
    token &&
      resetPassword(token, values, () => {
        history.push("/pilot/login");
      });
  };

  return (
    <CardAuth title="Pick a new password">
      <Formik
        initialValues={initialValuesFormResetPassword}
        onSubmit={submitFormResetPassword}
        validationSchema={ResetPasswordSchema}
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
            <PasswordInput
              id="password"
              label="Password"
              name="password"
              errorInput={touched.password && errors.password}
              value={values.password}
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              variant="outlined"
              autoComplete="off"
            />
            <PasswordInput
              id="password_confirmation"
              label="Confirm Password"
              name="password_confirmation"
              errorInput={
                touched.password_confirmation && errors.password_confirmation
              }
              value={values.password_confirmation}
              onChange={handleChange("password_confirmation")}
              onBlur={handleBlur("password_confirmation")}
              variant="outlined"
              autoComplete="off"
            />
            <Button
              className={`${classes.margin} ${classes.btn}`}
              color="primary"
              type="submit"
              isLoading={isRequesting}
              variant="outlined"
              text="Change password"
            />
          </form>
        )}
      </Formik>
    </CardAuth>
  );
};

const mapStateToProps = (store) => ({
  isRequesting: store.auth.isRequesting,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      resetPassword: resetPasswordRequest,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
