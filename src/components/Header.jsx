import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import { useStyles } from "../styles";
import { isLogggedIn } from "../utils/auth";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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
          <Box component="div" className={classes.headertoolbar}>
            <Button color="inherit" onClick={handleClick}>
              مدیریت
            </Button>
            <Button className={classes.headertoolbar} color="inherit">
              <ShoppingCartIcon className={classes.headericon} />
              سبد خرید
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
