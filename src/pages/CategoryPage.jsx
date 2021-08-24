import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItemText,
  ListItem,
  Hidden,
} from "@material-ui/core";
import Categories from "../components/Category/Categories";
import { StateContext } from "../context/StateContext";
import { useStyles } from "../styles";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
export default function ClippedDrawer() {
  let history = useHistory();
  const { categories } = useContext(StateContext);
  const classes = useStyles();
  const [routes, setRoutes] = useState("");
  const handleGoToCategory = (category) => {
    history.push(`/home/${category}`);
    // window.location.reload();
  };
  const renderedList = categories.map((item, index) => {
    return (
      <div key={index}>
        <div className={classes.categoryToolbar} />
        <List className={classes.categoryList}>
          <ListItemText
            onClick={() => handleGoToCategory(item.category)}
            style={{ cursor: "pointer" }}
          >
            <strong className={classes.categoryStrong}>{item.name}</strong>
          </ListItemText>
          {item.subCategory.map((category, index) => {
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
      </div>
    );
  });
  return (
    <div className={classes.categoryRoot}>
      <CssBaseline />
      <Hidden xsDown>
        <Drawer
          className={classes.categoryDrawer}
          variant="permanent"
          classes={{
            paper: classes.categoryDrawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <div className={classes.lists}>{renderedList}</div>
          </div>
        </Drawer>
      </Hidden>
      <main className={classes.CategoryContent}>
        <div className={classes.toolbar} />
        <Categories />
      </main>
    </div>
  );
}
