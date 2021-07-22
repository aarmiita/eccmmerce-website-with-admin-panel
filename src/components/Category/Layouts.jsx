import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,

    // [theme.breakpoints.up("sm")]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  lists: {
    paddingLef: 10,
    paddingright: 10,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  categoryList: {
    margin: `${theme.spacing(7)}px 10px 10px 15px`,
  },
  subCategory: {
    marginTop: 4,
    marginLeft: 15,
    marginRight: 12,
    marginBottom: 15,
  },
}));

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.lists}>
      <div className={classes.toolbar} />
      <Divider />
      <List className={classes.categoryList}>
        <ListItemText>لبنیات</ListItemText>
        <ListItem>
          <ListItemText>شیر</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>کره حیوانی و گیاهی</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>دوغ</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>ماست</ListItemText>
        </ListItem>
      </List>
      <List className={classes.subCategory}>
        <ListItemText>محصولات پروتئینی</ListItemText>
        <ListItem>
          <ListItemText>گوشت گاو و گوساله</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>گوشت مرغ</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>تخم مرغ</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>ماهی , میگو و خاویار</ListItemText>
        </ListItem>
      </List>
      <List className={classes.subCategory}>
        <ListItemText>نوشیدنی</ListItemText>
        <ListItem>
          <ListItemText>قهوه</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>قهوه فوری و هات چاکلت</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>چای</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>شربت و آبمیوه</ListItemText>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
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
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
