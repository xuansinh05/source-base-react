import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "35px 40px",
    width: 300,
    maxWidth: "100%",
    boxShadow: "1px 1px 15px 1px #000f5d",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.white,
    borderRadius: 8,
    "& > h3": {
      fontSize: 22,
      marginBottom: 40,
    },
    zIndex: 2,
    "& > form": {
      width: "100%",
      textAlign: "center",
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
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > img": {
      height: 100,
      marginBottom: 20,
    },
  },
}));

export { useStyles };
