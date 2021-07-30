import React from "react";
import { Typography } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { useStyles } from "../styles";
const UnSuccessFullPaymentPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.paymentresult}>
      <Typography component="h3" variant="h3">
        نتیجه پرداخت
      </Typography>
      <div className={classes.paymentresultcontent}>
        <CancelIcon className={classes.unsuccessIcon} />
        <Typography component="p" className={classes.paymentparagraph}>
          پرداخت موفقیت آمیز نبود , سفارش شما در انتظار پرداخت است
        </Typography>
      </div>
    </div>
  );
};

export default UnSuccessFullPaymentPage;
