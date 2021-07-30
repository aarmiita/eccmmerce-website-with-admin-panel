import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  InputLabel,
  Button,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../../styles";
import { Calendar } from "react-datepicker2";
import moment from "jalali-moment";
import { useHistory } from "react-router-dom";

const OrderInformation = () => {
  let history = useHistory();
  const orders = JSON.stringify({ orders: [] });
  const cartFromLocalStorage = JSON.parse(
    localStorage.getItem("cart") || orders
  );
  let pattern =
    /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
  const classes = useStyles();
  const [minDate, setMinDate] = useState(moment().add("days", 2));
  const [maxDate, setMaxDate] = useState(moment().add("days", 6));
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({});
  const [cart, setCart] = useState(cartFromLocalStorage);
  useEffect(() => {
    // let newDate = moment(date).locale("en").format("YYYY/MM/DD");
    // console.log(newDate);
    // console.log(new Date(newDate));
  }, []);
  const validate = () => {
    let temp = {};
    temp.firstName = firstName ? "" : "لطفا نام خود را به درستی وارد کنید";
    temp.lastName = lastName
      ? ""
      : "لطفا نام خانوادگی خود را به درستی وارد کنید";
    temp.address = address ? "" : "لطفا آدرس خود را به درستی وارد کنید";
    temp.phoneNumber = pattern.test(phoneNumber)
      ? ""
      : "لطفا شماره موبایل خود را به درستی وارد کنید";
    temp.date = date ? "" : "لطفا تاریخ تحویل را به درستی وارد کنید";

    setErrors({ ...temp });

    return Object.values(temp).every((x) => x == "");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(validate());
    if (validate()) {
      let tempCart = { ...cart };
      tempCart = {
        ...tempCart,
        userId: Math.floor(Math.random() * 10000) + 10,
        date: moment().locale("en").format("YYYY/MM/DD"),
        compeleted: false,
        information: {
          customerName: firstName + " " + lastName,
          address: address,
          phoneNumber: phoneNumber,
          deliveryTime: moment(date).locale("en").format("YYYY/MM/DD"),
        },
      };
      localStorage.setItem("cart", JSON.stringify(tempCart));
      setCart(tempCart);
    }
  };

  return (
    <>
      <div className={classes.orderInformation}>
        <div className={classes.formTitle}>
          <Typography variant="h4" component="h3">
            نهایی کردن خرید
          </Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={classes.formControl}>
            <div className={classes.formInput}>
              <InputLabel htmlFor="firstName" className={classes.inputLabel}>
                <strong>نام :</strong>‌
              </InputLabel>
              <TextField
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  validate();
                }}
                {...(errors.firstName && {
                  error: true,
                  helperText: errors.firstName,
                })}
                fullWidth
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                id="firstName"
                autoFocus
                placeholder="نام"
              />
            </div>

            <div className={classes.formInput}>
              <InputLabel htmlFor="lastName" className={classes.inputLabel}>
                <strong>نام خانوادگی :</strong>‌
              </InputLabel>
              <TextField
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  validate();
                }}
                {...(errors.lastName && {
                  error: true,
                  helperText: errors.lastName,
                })}
                fullWidth
                autoComplete="lname"
                name="lastName"
                variant="outlined"
                id="lastName"
                placeholder="نام خانوادگی"
              />
            </div>

            <div className={classes.formInput}>
              <InputLabel htmlFor="address" className={classes.inputLabel}>
                <strong>آدرس :</strong>‌
              </InputLabel>
              <TextField
                onBlure={() => console.log("hello")}
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  validate();
                }}
                {...(errors.address && {
                  error: true,
                  helperText: errors.address,
                })}
                fullWidth
                // autoComplete="address"
                name="address"
                variant="outlined"
                id="address"
                multiline
                rows={2}
                rowsMax={3}
                placeholder="آدرس"
              />
            </div>

            <div className={classes.formInput}>
              <InputLabel htmlFor="phoneNumber" className={classes.inputLabel}>
                <strong>تلفن همراه : </strong>
                <span>
                  &nbsp;&nbsp;<small>جهت هماهنگی ارسال سفارش</small>
                </span>
                ‌
              </InputLabel>
              <TextField
                {...(errors.phoneNumber && {
                  error: true,
                  helperText: errors.phoneNumber,
                })}
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                onKeyPress={() => validate()}
                fullWidth
                autoComplete="fname"
                name="phoneNumber"
                variant="outlined"
                id="phoneNumber"
                placeholder="تلفن همراه"
              />
            </div>
            <div className={classes.formInput}>
              <InputLabel htmlFor="orderTime" className={classes.inputLabel}>
                <strong>تاریخ تحویل :</strong>‌
              </InputLabel>
              <Box component="span">
                <Button onClick={() => setShow(true)}>G</Button>
              </Box>
              <TextField
                {...(errors.date && {
                  error: true,
                  helperText: errors.date,
                })}
                value={
                  date ? moment(date).locale("fa").format("YYYY/MM/DD") : ""
                }
                fullWidth
                autoComplete="orderTime"
                name="orderTime"
                variant="outlined"
                id="orderTime"
                placeholder="تاریخ تحویل سفارش"
              />
              {show && (
                <Calendar
                  persianDigits={false}
                  value={date}
                  onChange={(value) => {
                    setDate(moment(value).locale("en").format("YYYY/MM/DD"));
                    setShow(false);
                    validate();
                  }}
                  isGregorian={false}
                  timePicker={false}
                  min={minDate}
                  max={maxDate}
                  onBlure
                />
              )}
            </div>
          </div>
          <div className={classes.formbtnDiv}>
            <Button
              variant="contained"
              type="submit"
              className={classes.formbtn}
              onClick={() => history.push("/payment")}
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
