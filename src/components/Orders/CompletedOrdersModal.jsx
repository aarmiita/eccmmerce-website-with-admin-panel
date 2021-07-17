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

const CompletedOrdersModal = ({ order }) => {
  const classes = useStyles();

  useEffect(() => {
    console.log(order);
  }, []);
  return (
    <Box>
      <Box className={classes.checkdiv}>
        <Box className={classes.checkdiv__sub}>
          <Box className={classes.__subs}> نام مشتری : </Box>
          <Box>{order.information.customerName}</Box>
        </Box>
        <Box className={classes.checkdiv__sub}>
          <Box className={classes.__subs}>آدرس : </Box>
          <Box>{order.information.address}</Box>
        </Box>
        <Box className={classes.checkdiv__sub}>
          <Box className={classes.__subs}>تلفن : </Box>
          <Box>{order.information.phoneNumber}</Box>
        </Box>
        <Box className={classes.checkdiv__sub}>
          <Box className={classes.__subs}> زمان تحویل : </Box>
          <Box>{order.information.deliveryTime}</Box>
        </Box>
        <Box className={classes.checkdiv__sub}>
          <Box className={classes.__subs}>زمان سفارش : </Box>
          <Box>{order.date}</Box>
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
            {order.orders.map((product, inex) => (
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
        <Box component="span">{order.information.deliveryTime}</Box>
      </Box>
    </Box>
  );
};

export default CompletedOrdersModal;
