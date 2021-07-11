import { createStyle, makeStyles } from "@material-ui/core";
import { COLORS } from "./constantVariables";
const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  header: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navitem: {
    textDecoration: "none",
    color: "white",
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  back: {
    margin: theme.spacing(0),
  },
  adminpanel: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  mainDashboard: {
    margin: theme.spacing(10, 0, 0, 30),
  },
  notfound: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    padding: theme.spacing(20),
  },
  table: {
    minWidth: 550,
  },
  tableImage: {
    width: 44,
  },
  tableBtn: {
    margin: theme.spacing(2, 2),
  },
  tableDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: COLORS.green,
    color: "white",
  },
  modalcontent: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  formBoxUpload: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  uploadBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalTitle: {
    padding: theme.spacing(0),
  },
  savebtn: {
    display: "flex",
    justifyContent: "center",
  },
  save: {
    backgroundColor: COLORS.green,
    color: "#f5f5f5",
    margin: theme.spacing(4, 0),
  },
  formInput: {
    height: 40,
  },
  editImage: {
    width: 34,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 2, 1),
    maxWidth: 520,
    minWidth: 550,
    maxHeight: 600,
    minHeight: 400,
  },
  backtoSite: {
    marginLeft: "auto",
    margin: theme.spacing(0, 5),
    color: "white",
  },
  adminHeader: {
    display: "flex",
  },
  closeModalIcon: {
    fontSize: "medium",
    float: "right",
    cursor: "pointer",
  },
  footer: {
    overflowY: "hidden",
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    height: "100",
    backgroundColor: "#3f51b5",
  },
  headericon: {
    fontSize: "small",
    margin: theme.spacing(0, 1),
  },
}));
