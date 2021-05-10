import { createMuiTheme } from "@material-ui/core/styles";
import { teal, red, grey } from "@material-ui/core/colors";

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: teal[600],
    },
    secondary: {
      main: teal[600],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: grey[50],
      black: "#263238",
      white: "#FFFFFF",
    },
    text: {
      main: grey[50],
      white: "#FFFFFF",
      black: "#263238",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 14,
  },
});

export { muiTheme };
