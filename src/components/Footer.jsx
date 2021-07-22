import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "../styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.footerTitle}>
            Designed By © 2021 Romina Farokhzad
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Footer;
