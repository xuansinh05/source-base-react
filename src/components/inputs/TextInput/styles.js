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
      transform: "translate(14px, 14px) scale(1)",
      "&.MuiInputLabel-shrink": {
        transform: "translate(14px, -6px) scale(0.7)",
      },
    },
    "& > .MuiFormHelperText-root.Mui-error": {
      position: "absolute",
      top: "40px !important",
    },
    "& .MuiOutlinedInput-input": {
      padding: "15.5px 14px",
    },
    "& .MuiFormLabel-root": {
      color: "rgb(95 95 95 / 54%)",
    },
  },
}))(TextField);

const useStyles = makeStyles((theme) => ({
  heightInput: {
    height: 45,
  },
  inputWrapper: {
    marginTop: 15,
    marginBottom: 15,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
      marginBottom: 10,
    },
  },
  errorRoot: {
    right: 0,
    marginRight: 0,
  },
}));

export { TextInput, useStyles };
