import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { useStyles } from "../../styles/index";
import CompeletedOrders from "./CompeletedOrders";
import UnCompletedOrders from "./UnCompletedOrders";
const OrdersTable = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(true);
  const [sendCheacked, setSendCheacked] = useState(false);

  const handleChange = (event) => {
    setChecked(true);
    setSendCheacked(false);
  };
  const handleChangesend = () => {
    setSendCheacked(true);
    setChecked(false);
  };
  return (
    <div>
      <div className={classes.ordersTable}>
        <h1>مدیریت سفارش ها</h1>
        <div className={classes.ordersDiv}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "secondary  checkbox" }}
            label="sended message"
          />
          سفارش های تحویل شده
          <Checkbox
            checked={sendCheacked}
            onChange={handleChangesend}
            inputProps={{ "aria-label": "secondary  checkbox" }}
          />
          سفارش های در انتظار ارسال
        </div>
      </div>
      <div>
        {checked && <CompeletedOrders />}
        {sendCheacked && <UnCompletedOrders />}
      </div>
    </div>
  );
};

export default OrdersTable;
