import React from "react";
import Header from "./Header";
import SnackContainer from "../../containers/Snackbar";

import { useStyles } from "./styles";

function MainLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.rootContent}>{props.children}</div>
      <SnackContainer />
    </div>
  );
}

export default MainLayout;
