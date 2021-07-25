import React, { useContext, useEffect, useState } from "react";
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
  Hidden,
  ListItem,
  ListItemText,
  List,
  Divider,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import { isLogggedIn } from "../utils/auth";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import logo from "../assets/images/logo.png";
import { useStyles } from "../styles";
import { StateContext } from "../context/StateContext";

const Header = (props) => {
  const { categories } = useContext(StateContext);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  let history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showCategoryDrawer, setShowCategoryDrawer] = useState(false);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const locations = history.location.pathname;
  useEffect(() => {
    if (
      history.location.pathname === "/home/dairy" ||
      history.location.pathname === "/home/protein" ||
      history.location.pathname === "/home/drinks"
    ) {
      setShowCategoryDrawer(true);
    } else {
      setShowCategoryDrawer(false);
    }
  }, [locations]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const renderedList = categories?.map((item, index) => {
    return (
      <>
        <div className={classes.categoryToolbar} />
        <List className={classes.categoryList}>
          <ListItemText key={index}>
            <strong className={classes.categoryStrong}>{item.name}</strong>
          </ListItemText>
          {item.subCategory?.map((category, index) => {
            return (
              <ListItem key={index}>
                <ListItemText>
                  <small className={classes.categorySmall}>{category}</small>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </>
    );
  });
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
    history.push("/home/cart");
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.header}>
        <AppBar position="fixed" className={classes.mainheader}>
          <Toolbar>
            <Box variant="h6" className={classes.headertitle}>
              <img
                src={logo}
                alt="logo"
                className={classes.logo}
                onClick={() => history.push("/")}
              />
              <span>
                <h1>سوپر مارکت</h1>
              </span>
            </Box>

            <div>
              {isMobile ? (
                <>
                  {showCategoryDrawer ? (
                    <div>
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.headerbtn}
                      >
                        <MenuIcon />
                      </IconButton>
                      <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                          paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                          keepMounted: true, // Better open performance on mobile.
                        }}
                      >
                        <div className={classes.drawerContainer}>
                          <Button
                            color="inherit"
                            onClick={() => handleManageClick()}
                          >
                            مدیریت
                          </Button>
                          <Button
                            className={classes.headertoolbar}
                            color="inherit"
                            onClick={() => handleCartClick()}
                          >
                            <ShoppingCartIcon className={classes.headericon} />
                            سبد خرید
                          </Button>
                          <Divider />
                          <div className={classes.lists}>{renderedList}</div>
                        </div>
                      </Drawer>
                    </div>
                  ) : (
                    <>
                      <IconButton
                        edge="start"
                        className={classes.headerbtn}
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
                  )}
                </>
              ) : (
                <>
                  <Button color="inherit" onClick={() => handleManageClick()}>
                    مدیریت
                  </Button>
                  <Button
                    className={classes.headertoolbar}
                    color="inherit"
                    onClick={() => handleCartClick()}
                  >
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
