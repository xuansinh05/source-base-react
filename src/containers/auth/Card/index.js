import React from "react";

import { Typography } from "@material-ui/core";
//styles
import { useStyles } from "./styles";

import logo from "../../../assets/images/logo-green.png";

export const CardAuth = (props) => {
  const { title, subTitle } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <img src={logo} alt="" className={classes.logo} />
        <Typography variant="h3" className={classes.typography}>
          {title}
        </Typography>
        {!!subTitle && (
          <Typography variant="h6" className={classes.typography6}>
            {subTitle}
          </Typography>
        )}
      </div>
      {props.children}
    </div>
  );
};

export default CardAuth;
