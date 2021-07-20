import React, { useEffect } from "react";
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
} from "@material-ui/core";
import { useSelector } from "react-redux";
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

const CompletedOrdersModal = () => {
  const selectedCart = useSelector(
    (state) => state.allProducts.selectedProduct
  );
  const classes = useStyles();
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
        <Box component="span">
          <Typography>زمان تحویل : </Typography>
        </Box>
        <Box component="span">{selectedCart.information.deliveryTime}</Box>
      </Box>
    </Box>
  );
};

export default CompletedOrdersModal;
