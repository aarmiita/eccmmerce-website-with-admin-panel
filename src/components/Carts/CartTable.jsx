import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { Button, Box, Typography } from "@material-ui/core";
import { useStyles } from "../../styles/index";
import MainModal from "../MainModal";
import CancelIcon from "@material-ui/icons/Cancel";
import { CallMissedSharp } from "@material-ui/icons";
const CartTable = () => {
  const classes = useStyles();
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [total, setTotal] = useState("");
  const [selectedOrder, setSelectedOrder] = useState({});
  const getTotal = (cart) => {
    let prices = cart?.map((order) => order.price * order.quantity);
    console.log(prices);
    const tempTotal = prices
      .reduce((sum, item) => (sum += item), 0)
      .toLocaleString("fa-IR");
    setTotal(tempTotal);
  };
  useEffect(() => {
    console.log(cart);
    getTotal(cart);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleDelete = (order) => {
    let temoDeletedOrder = { ...order };
    setSelectedOrder(temoDeletedOrder);
    setOpen(true);
  };
  const handleYes = () => {
    let tempCart = [...cart];
    let newCart = tempCart.filter(
      (item) => item.productId !== selectedOrder.productId
    );
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    setSelectedOrder({});
    handleClose();
  };
  const handleNo = () => {
    setSelectedOrder({});
    handleClose();
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, cart?.length - page * rowsPerPage);
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tablehead}>
            <TableRow>
              <TableCell className={classes.headcell}>کالا</TableCell>
              <TableCell className={classes.headcell}>قیمت</TableCell>
              <TableCell className={classes.headcell}>تعداد</TableCell>
              <TableCell className={classes.headcell}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tablebody}>
            {cart
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <strong>{order.title}</strong>
                  </TableCell>
                  <TableCell>
                    <strong>{order.price.toLocaleString("fa-IR")}</strong>
                  </TableCell>
                  <TableCell>
                    <strong>{order.quantity}</strong>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.tableBtn}
                      onClick={() => handleDelete(order)}
                    >
                      <strong>حذف</strong>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={cart?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
      <Box className={classes.cartBox}>
        <Box component="div">
          <Typography component="h6" variant="h6">
            <strong>جمع کل :{total} </strong>
          </Typography>
        </Box>
        <Box component="div" className={classes.totalDiv}>
          <Button variant="contained" className={classes.cartTableBtn}>
            <strong>نهایی کردن سبد خرید</strong>
          </Button>
        </Box>
      </Box>
      <MainModal open={open} handleClose={handleClose}>
        <div className={classes.detailesModal}>
          <Typography component="h5" variant="h5">
            <strong>آیا میخواهید این محصول را از سبد خرید حذف کنید ؟ </strong>
          </Typography>

          <Box component="div">
            <Button
              variant="contained"
              className={classes.cartTableBtn}
              onClick={() => handleYes()}
            >
              بله
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleNo()}
            >
              خیر
            </Button>
          </Box>
        </div>
      </MainModal>
    </>
  );
};
export default CartTable;
