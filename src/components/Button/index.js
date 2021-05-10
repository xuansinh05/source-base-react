import React from "react";
import { CircularProgress } from "@material-ui/core";

import { ButtonStyle, useStyles } from "./styles";

const ButtonComp = (props) => {
  const styles = useStyles();
  const { text, classes, onClick, isLoading, disabled, ...rest } = props;

  return (
    <ButtonStyle
      className={classes || ""}
      onClick={onClick}
      disabled={isLoading || disabled}
      startIcon={
        isLoading ? (
          <CircularProgress size="sm" className={styles.loading} />
        ) : undefined
      }
      {...rest}
    >
      {text}
    </ButtonStyle>
  );
};

export default ButtonComp;
