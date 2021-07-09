import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import { useStyles } from "../styles";
import { isLogggedIn } from "../utils/auth";

export default function ButtonAppBar() {
  let history = useHistory();
  const classes = useStyles();
  const handleClick = () => {
    if (isLogggedIn) {
      history.push("/admin/dashboard");
    } else {
      history.push("/admin/login");
    }
  };
  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">سبد خرید</Button>
          <Button color="inherit" onClick={handleClick}>
            مدیریت
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
