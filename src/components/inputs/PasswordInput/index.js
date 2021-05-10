import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import { TextInput, useStyles } from "./styles";
import { IconButton } from "@material-ui/core";

function PasswordFieldComp(props) {
  const { value, onChange, className, label, errorInput, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={`${classes.formInput} ${className || ""}`}>
      <TextInput
        type={showPassword ? "text" : "password"}
        error={!!errorInput}
        helperText={errorInput}
        className={classes.inputWrapper}
        label={label}
        value={value}
        InputProps={{
          className: classes.heightInput,
        }}
        onChange={onChange}
        variant="outlined"
        size="small"
        {...rest}
      />
      <IconButton
        className={classes.icon}
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </div>
  );
}

export default PasswordFieldComp;
