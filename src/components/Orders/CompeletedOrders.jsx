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
import { getAllCart } from "../../api/cart";
import MainModal from "../MainModal";
import CompletedOrdersModal from "./CompletedOrdersModal";
import CancelIcon from "@material-ui/icons/Cancel";

export default function SimpleTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  useEffect(() => {
    getAllCart().then((res) => {
      let compeletedOrders = res.data;
      let newOrders = compeletedOrders.filter(
        (order) => order.compeleted === true
      );
      setOrders(newOrders);
      console.log("data has fetched");
    });
  }, []);
  const getTotal = (products) => {
    let prices = products.map((order, index) => order.price);
    const total = prices
      .reduce((sum, item) => (sum += item), 0)
      .toLocaleString("fa-IR");
    return total;
  };

  const handleClick = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

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
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, orders?.length - page * rowsPerPage);
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>نام کاربر</TableCell>
              <TableCell>مجموع مبلغ</TableCell>
              <TableCell>زمان ثبت سفارش</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.information.customerName}</TableCell>
                  <TableCell>{getTotal(order.orders)}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.tableBtn}
                      onClick={() => handleClick(order, order.userId)}
                    >
                      بررسی سفارش
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
          count={orders?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
      <MainModal open={open} handleClose={handleClose}>
        <Box component="div" className={classes.deliverymodal}>
          <Box component="div" className={classes.checkorders}>
            <Typography variant="h6">نمایش سفارش</Typography>
            <CancelIcon
              className={classes.closeModalIcon}
              onClick={handleClose}
            />
          </Box>
          <Box component="div">
            <CompletedOrdersModal order={selectedOrder} />
          </Box>
        </Box>
      </MainModal>
    </>
  );
}
