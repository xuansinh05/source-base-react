import { withStyles, makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const TextInput = withStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      height: "45px",
      color: "#1a1a1a",
    },
    "& .Mui-disabled": {
      color: "#565656f2",
      "&:hover fieldset": {
        borderColor: "#bcbcbc",
      },
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#1a1a1a",
      },
      "&.Mui-focused fieldset": {
        border: `2px solid ${theme.palette.primary.main}`,
      },
      "&.Mui-error fieldset": {
        border: `2px solid ${theme.palette.error.main}`,
      },
    },
    "& .MuiInputLabel-outlined": {
      transform: "translate(14px, 15px) scale(1)",
      "&.MuiInputLabel-shrink": {
        transform: "translate(14px, -6px) scale(0.7)",
      },
    },
    "& > .MuiFormHelperText-root.Mui-error": {},
    "& .MuiFormHelperText-root": {
      marginRight: "0px",
      marginLeft: "0px",
      textAlign: "right",
    },
    "& .MuiOutlinedInput-input": {
      padding: "15.5px 14px",
    },
    "& .MuiFormLabel-root": {
      color: "rgb(95 95 95 / 54%)",
    },
  },
}))(TextField);

const useStyles = makeStyles(() => ({
  formInput: {
    position: "relative",
  },
  heightInput: {
    height: 45,
  },
  inputWrapper: {
    marginTop: 10,
    marginBottom: 5,
    width: "100%",
  },
  error: {
    right: 0,
    marginRight: 0,
    textAlign: "right",
    position: "absolute",
    top: 55,
  },
  icon: {
    position: "absolute !important",
    right: 14,
    top: 9,
  },
}));

export { TextInput, useStyles };
