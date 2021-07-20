import React, { useEffect, useState } from "react";
import { useStyles } from "../../styles";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Box,
  Button,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { changeCart } from "../../redux/actions/productActions";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const CompletedOrdersModal = ({ closeModal, changeOrder }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedCart = useSelector(
    (state) => state.allProducts.selectedProduct
  );
  const handleDelivery = () => {
    let newObj = { ...selectedCart };
    newObj.compeleted = true;
    dispatch(changeCart(newObj.id, newObj));
    closeModal();
  };
  return (
    <Box>
      <Box className={classes.checkdiv}>
        <Box className={classes.checkdiv__sub}>
          <Box className={classes.__subs}> نام مشتری : </Box>
          <Box>{selectedCart.information.customerName}</Box>
        </Box>
        <Box className={classes.checkdiv__sub}>
          <Box className={classes.__subs}>آدرس : </Box>
          <Box>{selectedCart.information.address}</Box>
        </Box>
        <Box className={classes.checkdiv__sub}>
          <Box className={classes.__subs}>تلفن : </Box>
          <Box>{selectedCart.information.phoneNumber}</Box>
        </Box>
        <Box className={classes.checkdiv__sub}>
          <Box className={classes.__subs}> زمان تحویل : </Box>
          <Box>{selectedCart.information.deliveryTime}</Box>
        </Box>
        <Box className={classes.checkdiv__sub}>
          <Box className={classes.__subs}>زمان سفارش : </Box>
          <Box>{selectedCart.date}</Box>
        </Box>
      </Box>
      <TableContainer className={classes.newtable}>
        <Table className={classes.modaltable}>
          <TableHead>
            <TableRow>
              <StyledTableCell>کالا</StyledTableCell>
              <StyledTableCell>قیمت</StyledTableCell>
              <StyledTableCell>تعداد</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedCart.orders.map((product, inex) => (
              <StyledTableRow key={product.productId}>
                <StyledTableCell component="th" scope="row">
                  {product.title}
                </StyledTableCell>
                <StyledTableCell>{product.price}</StyledTableCell>
                <StyledTableCell>{product.quantity}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box component="div" className={classes.delivery}>
        <Button
          variant="contained"
          className={classes.deliverybtn}
          onClick={handleDelivery}
        >
          تحویل شد
        </Button>
      </Box>
    </Box>
  );
};

export default CompletedOrdersModal;
