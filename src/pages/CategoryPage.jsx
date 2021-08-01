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
export default function ClippedDrawer() {
  let history = useHistory();
  const { categories } = useContext(StateContext);
  const classes = useStyles();
  const [routes, setRoutes] = useState("");
  const handleGoToCategory = (title) => {
    if (title === "لبنیات") {
      setRoutes("/home/dairy");
      history.push("/home/dairy");
    } else if (title === "محصولات پروتئینی") {
      setRoutes("/home/protein");
      history.push("/home/protein");
    } else if (title === "نوشیدنی") {
      history.push("/home/drinks");
      window.location.reload();
    }
  };
  const renderedList = categories.map((item, index) => {
    return (
      <>
        <div className={classes.categoryToolbar} />
        <List className={classes.categoryList}>
          <ListItemText
            key={index}
            onClick={() => handleGoToCategory()}
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
      </>
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
