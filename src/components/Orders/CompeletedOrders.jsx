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
import CompletedOrdersModal from "./CompletedOrdersModal";
import CancelIcon from "@material-ui/icons/Cancel";
import { useSelector, useDispatch } from "react-redux";
import {
  getCarts,
  SetselectedProduct,
  setCompeletedCarts,
} from "../../redux/actions/productActions";
import { TableSortLabel } from "@material-ui/core";

export default function SimpleTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [sort, setSort] = useState({ direction: "asc" });
  const dispatch = useDispatch();
  const selectedCart = useSelector(
    (state) => state.allProducts.selectedProduct
  );
  useEffect(() => {
    dispatch(getCarts());
  }, []);
  const compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  };
  const sortBy = (key) => {
    const direction = sort
      ? sort.direction === "asc"
        ? "desc"
        : "asc"
      : "desc";

    let arrayCopy = [...compeletedCarts];
    arrayCopy.sort(compareBy(key));
    dispatch(setCompeletedCarts(arrayCopy));
    if (direction === "asc") {
      arrayCopy.reverse();
    }
    dispatch(setCompeletedCarts(arrayCopy));
    setSort({ direction });
  };

  const compeletedCarts = useSelector(
    (state) => state.allProducts.compeletedCarts
  );
  const getTotal = (products) => {
    let prices = products?.map((order, index) => order.price);
    const total = prices
      .reduce((sum, item) => (sum += item), 0)
      .toLocaleString("fa-IR");
    return total;
  };

  const handleClick = (order) => {
    dispatch(SetselectedProduct(order));
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
    rowsPerPage -
    Math.min(rowsPerPage, compeletedCarts?.length - page * rowsPerPage);
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tablehead}>
            <TableRow>
              <TableCell className={classes.headcell}>نام کاربر</TableCell>
              <TableCell className={classes.headcell}>مجموع مبلغ</TableCell>
              <TableCell onClick={() => sortBy("date")}>
                <TableSortLabel direction={sort.direction} active={true}>
                  زمان ثبت سفارش
                </TableSortLabel>
              </TableCell>
              <TableCell className={classes.headcell}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tablebody}>
            {compeletedCarts
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.information.customerName}</TableCell>
                  <TableCell>{getTotal(order?.orders)}</TableCell>
                  <TableCell>{order?.date}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.tableBtn}
                      onClick={() => handleClick(order)}
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
          count={compeletedCarts?.length}
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
            <CompletedOrdersModal />
          </Box>
        </Box>
      </MainModal>
    </>
  );
}
