import React from "react";
//dependencies
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
//actions
import { loginRequest } from "../store/actions";

//validation,
import { LoginSchema, initialValuesFormLogin } from "../store/constants";
//components
import TextInput from "../../../components/inputs/TextInput";
import PasswordInput from "../../../components/inputs/PasswordInput";
import Button from "../../../components/Button";
import CardAuth from "../Card";
//styles
import { useStyles } from "./styles";

export const LoginContainer = (props) => {
  const { login, error: errorSubmit, isRequesting } = props;
  const classes = useStyles();
  const history = useHistory();

  const redirectToProfilePage = () => {
    history.push("/pilot/profile");
  };

  const submitForm = (values) => {
    login(values, redirectToProfilePage);
  };

  return (
    <CardAuth title="Log In">
      <Formik
        initialValues={initialValuesFormLogin}
        onSubmit={submitForm}
        validationSchema={LoginSchema}
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
            <TextInput
              id="username"
              className={classes.margin}
              label="Username"
              name="username"
              type="text"
              value={values.username}
              errorInput={touched.username && errors.username}
              onChange={handleChange("username")}
              onBlur={handleBlur("username")}
              variant="outlined"
              autoComplete="off"
            />
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
            {errorSubmit?.message && (
              <div className={classes.error}>{errorSubmit.message}</div>
            )}
            <Button
              className={`${classes.margin} ${classes.btn}`}
              color="primary"
              type="submit"
              isLoading={isRequesting}
              variant="outlined"
              text="Log In"
            />
            <Link to="/pilot/forgot-password" className={classes.link}>
              Forgot password?
            </Link>
          </form>
        )}
      </Formik>
    </CardAuth>
  );
};

const mapStateToProps = (store) => {
  const { error, isRequesting } = store.auth;
  return {
    error,
    isRequesting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      login: loginRequest,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
