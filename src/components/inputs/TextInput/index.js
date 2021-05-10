import React from "react";

import { TextInput, useStyles } from "./styles";

function TextFieldComp(props) {
  const {
    name,
    value,
    label,
    errorInput,
    onChange,
    className,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <TextInput
      error={!!errorInput}
      helperText={errorInput}
      className={`${classes.inputWrapper} ${className || ""}`}
      label={label}
      value={value}
      InputProps={{
        className: classes.heightInput,
      }}
      onChange={onChange}
      FormHelperTextProps={{ classes: { root: classes.errorRoot } }}
      size="small"
      {...rest}
    />
  );
}

export default TextFieldComp;
