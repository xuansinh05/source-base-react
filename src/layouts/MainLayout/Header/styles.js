import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.black,
    boxShadow: "0 5px 15px 0 rgba(210, 210, 210, 0.3)",
    height: "100vh",
    width: 80,
    maxWidth: 80,
    position: "fixed",
    left: 0,
    "& > header": {
      height: "100%",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    padding: "20px 0",
  },
  tabRoot: {
    marginTop: 20,
    "& .Mui-selected": {
      "& .MuiTab-wrapper": {
        color: "#FFFFFF !important",
        "& > svg": {
          fill: "#FFFFFF !important",
        },
      },
    },
    "& .PrivateTabIndicator-colorPrimary-13": {
      backgroundColor: theme.palette.background.white,
    },
  },
  tabItemRoot: {
    minWidth: 70,
    padding: "6px 0",
    textTransform: "none",
    fontWeight: 400,
    fontSize: 13,
    "& .MuiTab-wrapper": {
      color: "#999999",
    },
    "& > svg": {
      fill: theme.palette.background.white,
    },
  },
  tabIcon: {
    fontSize: 12,
    fontWeight: 300,
    "& svg": {
      fontSize: 24,
      color: "#999999",
      fill: "#999999",
    },
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  logoWrapper: {
    cursor: "pointer",
    alignSelf: "center",
  },
  logo: {
    objectFit: "contain",
    height: 35.4,
  },
  isActive: {
    "& > .MuiTab-wrapper > svg": {
      fill: theme.palette.primary.main,
    },
  },
}));

export { useStyles };
