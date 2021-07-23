import React, { useContext } from "react";
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

export default function ClippedDrawer() {
  const { categories } = useContext(StateContext);
  const classes = useStyles();
  const renderedList = categories.map((item, index) => {
    return (
      <>
        <div className={classes.categoryToolbar} />
        <List className={classes.categoryList}>
          <ListItemText key={index}>
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
      <Hidden smDown>
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
        <Toolbar />

        <Categories />
      </main>
    </div>
  );
}
