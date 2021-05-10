import React, { useState } from "react";
import { Toolbar, AppBar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  AccountCircle as AccountCircleIcon,
  // Store as StoreIcon,
  // Contacts as ContactsIcon,
  // Book as BookIcon,
} from "@material-ui/icons";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
//components
import Menu from "../Menu";
//styles
import { useStyles } from "./styles";
//logo
import logo from "../../../assets/images/logo-icon-white.png";

//routes
const routes = [
  {
    index: 0,
    label: "Profile",
    icon: <AccountCircleIcon style={{ width: "24px", height: "24px" }} />,
    link: "/pilot/profile",
  },
  // {
  //   index: 1,
  //   label: "Store",
  //   icon: <StoreIcon style={{ width: "24px", height: "24px" }} />,
  //   link: "/pilot/profile",
  // },
  // {
  //   index: 2,
  //   label: "Blog",
  //   icon: <BookIcon style={{ width: "24px", height: "24px" }} />,
  //   link: "/pilot/profile",
  // },
  // {
  //   index: 3,
  //   label: "Contact",
  //   icon: <ContactsIcon style={{ width: "24px", height: "24px" }} />,
  //   link: "/pilot/profile",
  // },
];

export default function Header() {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState(0);
  const history = useHistory();

  const onClickTab = (r) => () => {
    setCurrentTab(r.index);
    history.push(r.link);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar className={classes.wrapper}>
          <div className={classes.flexColumn}>
            <div
              className={classes.logoWrapper}
              onClick={onClickTab(routes[0])}
            >
              <img src={logo} alt="" className={classes.logo} />
            </div>
            <Tabs
              orientation="vertical"
              value={currentTab}
              indicatorColor="primary"
              textColor="primary"
              aria-label="tabs menu"
              classes={{ root: classes.tabRoot }}
            >
              {routes.map((r) => (
                <Tab
                  key={r.index}
                  value={r.index}
                  onClick={onClickTab(r)}
                  icon={r.icon}
                  label={r.label}
                  classes={{
                    root: classes.tabItemRoot,
                    labelIcon: classes.tabIcon,
                    selected: classes.isActive,
                  }}
                />
              ))}
            </Tabs>
          </div>
          <Menu />
        </Toolbar>
      </AppBar>
    </div>
  );
}
