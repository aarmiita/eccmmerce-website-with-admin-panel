import React from "react";
import { TextField, InputLabel, Button, Typography } from "@material-ui/core";
import { useStyles } from "../../styles";
const OrderInformation = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.orderInformation}>
        <div className={classes.formTitle}>
          <Typography variant="h4" component="h3">
            نهایی کردن خرید
          </Typography>
        </div>
        <form>
          <div className={classes.formControl}>
            <div className={classes.formInput}>
              <InputLabel htmlFor="firstName" className={classes.inputLabel}>
                <strong>نام :</strong>‌
              </InputLabel>
              <TextField
                fullWidth
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                id="firstName"
                autoFocus
              />
            </div>

            <div className={classes.formInput}>
              <InputLabel htmlFor="lastName" className={classes.inputLabel}>
                <strong>نام خانوادگی :</strong>‌
              </InputLabel>
              <TextField
                fullWidth
                autoComplete="lname"
                name="lastName"
                variant="outlined"
                id="lastName"
              />
            </div>

            <div className={classes.formInput}>
              <InputLabel htmlFor="address" className={classes.inputLabel}>
                <strong>آدرس :</strong>‌
              </InputLabel>
              <TextField
                fullWidth
                autoComplete="address"
                name="address"
                variant="outlined"
                id="address"
                multiline
                rows={2}
                rowsMax={3}
              />
            </div>

            <div className={classes.formInput}>
              <InputLabel htmlFor="firstName" className={classes.inputLabel}>
                <strong>تلفن همراه : </strong>
                <span>
                  &nbsp;&nbsp;<small>جهت هماهنگی ارسال سفارش</small>
                </span>
                ‌
              </InputLabel>
              <TextField
                fullWidth
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                id="firstName"
              />
            </div>
            <div className={classes.formInput}>
              <InputLabel htmlFor="orderTime" className={classes.inputLabel}>
                <strong>تاریخ تحویل :</strong>‌
              </InputLabel>
              <TextField
                fullWidth
                autoComplete="orderTime"
                name="orderTime"
                variant="outlined"
                id="orderTime"
              />
            </div>
          </div>
          <div className={classes.formbtnDiv}>
            <Button
              variant="contained"
              type="submit"
              className={classes.formbtn}
            >
              <strong>پرداخت</strong>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderInformation;
