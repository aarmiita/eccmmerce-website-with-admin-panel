import React from "react";
import OrdersInformation from "./../components/Carts/OrderInformation";
import { useStyles } from "../styles";
const FinalizeOrder = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.toolbar} />
      <OrdersInformation />
    </>
  );
};

export default FinalizeOrder;
