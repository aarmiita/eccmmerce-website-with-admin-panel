import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../styles";
import OrdersTable from "../components/Orders/OrdersTable";
const Orders = () => {
  const classes = useStyles();

  return (
    <>
      <OrdersTable />
    </>
  );
};
export default Orders;
