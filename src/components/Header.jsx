import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  CssBaseline,
  Button,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import { isLogggedIn } from "../utils/auth";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import logo from "../assets/images/logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "300",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: 100,
    color: "white",
  },
  headericon: {
    fontSize: "small",
    margin: theme.spacing(0, 1),
  },
}));

const Header = () => {
  let history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  console.log(isMobile);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleManageClick = () => {
    setAnchorEl(null);
    if (isLogggedIn) {
      history.push("/admin/dashboard");
    } else {
      history.push("/admin/login");
    }
  };
  const handleCartClick = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Box variant="h6" className={classes.title}>
              {/* <ReactSVG src={Logo} /> */}
              <img src={logo} alt="logo" className={classes.logo} />
            </Box>

            <div>
              {isMobile ? (
                <>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                  >
                    <MenuItem onClick={() => handleManageClick()}>
                      مدیریت
                    </MenuItem>
                    <MenuItem onClick={() => handleCartClick()}>
                      سبد خرید
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <>
                  <Button color="inherit" onClick={() => handleManageClick()}>
                    مدیریت
                  </Button>
                  <Button className={classes.headertoolbar} color="inherit">
                    <ShoppingCartIcon className={classes.headericon} />
                    سبد خرید
                  </Button>
                </>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
export default Header;
