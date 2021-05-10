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
  footer: {
    display: "flex",
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    cursor: "pointer",
  },
  boxSentEmail: {
    lineHeight: 1.7,
  },
}));

export { useStyles };
