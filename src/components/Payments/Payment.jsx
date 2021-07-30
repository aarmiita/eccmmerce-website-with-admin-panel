import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import payment from "../../assets/images/payment.png";
import { useStyles } from "../../styles";
const Payment = () => {
  const history = useHistory();
  const classes = useStyles();
  const orders = JSON.stringify({ orders: [] });
  const cartFromLocalStorage = JSON.parse(
    localStorage.getItem("cart") || orders
  );
  const [cart, setCart] = useState({});
  const handleSuccessPayment = () => {};
  const handleUnsuccessPayment = () => {
    history.push("/payment/unsuccess");
  };
  return (
    <div className="payment">
      <div className="payment__pic__div">
        <img src={payment} alt="payment" className="payment__pic__div__img" />
      </div>
      <div className="payment__btn__div">
        <Button
          variant="contained"
          className="payment__btn__div__successbtn"
          onClick={() => handleSuccessPayment()}
        >
          <strong>پرداخت موفق</strong>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="payment__btn__div__unsuccessbtn"
          onClick={() => handleUnsuccessPayment()}
        >
          <strong>پرداخت ناموفق</strong>
        </Button>
      </div>
    </div>
  );
};

export default Payment;
