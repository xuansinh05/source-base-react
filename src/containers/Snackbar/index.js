import React from "react";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { clearSnackbar } from "./store/actions";

const vertical = "top";
const horizontal = "right";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SnackContainer(props) {
  const { show, type, message, clearSnackbar, isNotClear } = props;

  const anonymousFunction = () => {};

  const handleClearSnackbar = () => {
    isNotClear ? anonymousFunction() : clearSnackbar();
  };

  return (
    <Snackbar
      open={show}
      autoHideDuration={5000}
      onClose={handleClearSnackbar}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert
        severity={type}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={clearSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

const mapStateToProps = (store) => ({
  show: store.snackbar.show,
  type: store.snackbar.snackType,
  message: store.snackbar.snackMessage,
  isNotClear: store.snackbar.isNotClear,
});

const mapDispatchToProps = (dispatch) => ({
  clearSnackbar: () => dispatch(clearSnackbar()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(SnackContainer);
