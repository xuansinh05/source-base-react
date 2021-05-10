import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: 15,
    marginBottom: 5,
  },
  btn: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginBottom: "1em",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary,
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
  },
  btnBack: {
    width: "100%",
    backgroundColor: theme.palette.secondary,
    color: theme.palette.primary.main,
    marginBottom: "1em",
    textTransform: "none",
    marginRight: 15,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  typography: {
    fontWeight: 500,
    fontSize: 25,
    marginBottom: "10px !important",
  },
  typography6: {
    fontSize: 16,
  },
  error: {
    color: theme.palette.error.main,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    cursor: "pointer",
  },
  footer: {
    display: "flex",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > img": {
      height: 100,
      marginBottom: 30,
    },
  },
  boxSentEmail: {
    lineHeight: 1.7,
  },
}));

export {  useStyles };
