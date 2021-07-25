import React from "react";
import { Toolbar } from "@material-ui/core";
import CartTable from "../components/Carts/CartTable";
import { useStyles } from "../styles";
const CartPage = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar />
      <div className={classes.cartDiv}>
        <CartTable />
      </div>
    </>
  );
};

export default CartPage;
