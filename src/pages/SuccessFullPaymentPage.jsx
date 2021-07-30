import { Typography } from "@material-ui/core";
import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useStyles } from "../styles";
import { useParams } from "react-router";
const SuccessFullPaymentPage = () => {
  const { cartId } = useParams();
  const classes = useStyles();
  return (
    <div className={classes.paymentresult}>
      <Typography component="h3" variant="h3">
        نتیجه پرداخت
      </Typography>
      <div className={classes.paymentresultcontent}>
        <CheckCircleIcon className={classes.successIcon} />
        <Typography component="p" className={classes.paymentparagraph}>
          با تشکر از پرداخت شما سفارش شما با شماره {cartId} ثبت شده و جهت
          هماهنگی ارسال با شما تماس گرفته خواهد شد
        </Typography>
      </div>
    </div>
  );
};

export default SuccessFullPaymentPage;
