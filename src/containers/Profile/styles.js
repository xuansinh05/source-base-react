import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 30,
  },
  header: {
    display: "flex",
    alignItems: "center",
    "& > svg": {
      fontSize: 25,
      color: theme.palette.primary.main,
      marginRight: 5,
    },
    "& > span": {
      fontSize: 22,
      color: theme.palette.primary.main,
    },
  },
  content: {
    marginTop: 30,
  },
  sectionGeneral: {
    marginBottom: 20,
    padding: 20,
  },
  sectionUpdatePassword: {
    padding: 20,
  },
  btn: {
    width: 250,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary,
      color: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  textInput: {
    width: "49%",
    marginTop: 10,
    marginBottom: 5,
  },
  passwordInput: {
    width: "49%",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 15,
  },
  boxLoading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 135,
  },
  progress: {
    width: 50,
    height: 50,
  },
}));

export { useStyles };
