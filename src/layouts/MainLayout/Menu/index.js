import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Menu, ListItemIcon, ListItemText } from "@material-ui/core";
import { connect } from "react-redux";
import {
  Menu as MenuIcon,
  Clear as ClearIcon,
  Call as CallIcon,
  PowerSettingsNew as LogoutIcon,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { logoutRequest } from "../../../containers/auth/store/actions";
import { useStyles, StyledMenuItem } from "./styles";

const StyledMenu = withStyles({
  paper: {
    boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    "& ul": {
      "& li": {
        height: 33,
      },
    },
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

function CustomizedMenus(props) {
  const { logout } = props;

  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout(() => history.push("/pilot/login"));
  };

  return (
    <div className={classes.flexBox}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        classes={{ root: classes.btnRoot, label: classes.btnLabel }}
        onClick={openMenu}
      >
        <>
          {anchorEl ? (
            <ClearIcon className={classes.menuRightIcon} />
          ) : (
            <MenuIcon className={classes.menuRightIcon} />
          )}
          <span className={classes.menuRightLabel}>Menu</span>
        </>
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <StyledMenuItem>
          <ListItemIcon className={classes.menuItemIcon}>
            <CallIcon className={classes.menuIcon} />
          </ListItemIcon>
          <ListItemText primary="Contact Us" className={classes.menuText} />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleLogout}>
          <ListItemIcon className={classes.menuItemIcon}>
            <LogoutIcon className={classes.menuIcon} />
          </ListItemIcon>
          <ListItemText primary="Logout" className={classes.menuText} />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  logout: (callback) => dispatch(logoutRequest(callback)),
});
export default connect(null, mapDispatchToProps)(CustomizedMenus);
