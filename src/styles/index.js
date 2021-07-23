import { makeStyles } from "@material-ui/core";
import { COLORS } from "./constantVariables";
import { createMuiTheme } from "@material-ui/core";

const drawerWidth = 240;
export const theme = createMuiTheme({
  direction: "rtl",
  overrides: {
    MuiToolbar: {
      regular: {
        "@media": {
          minHeight: "80px",
        },
      },
    },
  },
});
export const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexGrow: 1,
    minHeight: "300",
  },
  headerbtn: {
    marginRight: theme.spacing(2),
  },
  mainheader: {
    backgroundColor: COLORS.darkGreen,

    zIndex: theme.zIndex.drawer + 1,
  },
  headertitle: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
  },
  logo: {
    cursor: "pointer",
    width: 100,
    color: "white",
  },
  headericon: {
    fontSize: "small",
    margin: theme.spacing(0, 1),
  },
  drawerPaper: {
    width: drawerWidth,
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
    backgroundColor: COLORS.gray,
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
    color: "white",
    backgroundColor: COLORS.gray,
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    color: "white",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: COLORS.gray,
  },
  adminicon: {
    color: "white",
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
    // minWidth: 450,
  },
  tablebody: {
    "&>:nth-child(even)": {
      backgroundColor: COLORS.silver,
    },
  },
  tablehead: {
    backgroundColor: COLORS.gray,
  },
  headcell: {
    color: "white",
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
  headericon: {
    fontSize: "small",
    margin: theme.spacing(0, 1),
  },
  tableInput: {
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    outline: "none",
    border: "none",
  },
  ordersTable: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkorders: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkdiv: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "0 90px",
  },
  checkdiv__sub: {
    display: "flex",
    flexDirection: "row",
  },
  modaltable: {
    height: "20px",
    margin: "auto",
    maxWidth: 500,
    overflowX: "auto",
  },
  newtable: {
    margin: "30px 0 20px 0 ",
  },
  delivery: {
    display: "flex",
    justifyContent: "center",
  },
  deliverymodal: {
    padding: "15px",
  },
  deliverybtn: {
    backgroundColor: COLORS.green,
    color: "white",
  },
  footer: {
    flexGrow: 1,
  },
  footerTitle: {
    flexGrow: 1,
    textAlign: "center",
  },
  footerMain: {
    backgroundColor: COLORS.darkGreen,
  },
  categoryRoot: {
    display: "flex",
  },
  categoryDrawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  categoryDrawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    marginTop: 18,
    overflow: "auto",
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  CategoryContent: {
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
    // flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  categoryList: {
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 10,
  },
  subCategory: {
    marginTop: 4,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 25,
  },
  categoryStrong: {
    fontSize: 20,
  },
  categorySmall: {
    fontWeight: "bold",
  },
}));
