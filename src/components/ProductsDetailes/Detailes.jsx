import React, { useEffect, useState } from "react";
import {
  CardMedia,
  Toolbar,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useStyles } from "../../styles";
import { useParams } from "react-router";
import { getAProductById } from "../../api/products";
import TabContent from "./TabContent";
import Loading from "../Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import MainModal from "./../MainModal";
const Detailes = () => {
  const classes = useStyles();
  const orders = JSON.stringify({ orders: [] });
  const cartFromLocalStorage = JSON.parse(
    localStorage.getItem("cart") || orders
  );
  const { id } = useParams();
  const [detailes, setDetailes] = useState({});
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [numbers, setNumbers] = useState(1);
  const [newCart, setNewCart] = useState(cartFromLocalStorage);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getAProductById(id).then((res) => {
      setDetailes(res.data);
      if (res.data.category === "dairy") {
        setCategory("لبنیات");
      } else if (res.data.category === "protein") {
        setCategory("محصولات پروتئینی");
      } else if (res.data.category === "drinks") {
        setCategory("نوشیدنی");
      }
      const newPrice = res.data.price.toLocaleString("fa-IR");
      setPrice(newPrice);
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
    console.log(newCart);
  }, []);

  const updateNumbers = (e) => {
    if (e.target.value < 1) {
      setNumbers(1);
    } else if (e.target.value > detailes.stock) {
      setNumbers(detailes.stock);
    } else {
      setNumbers(e.target.value);
    }
  };
  const handleAddToCart = (detailes) => {
    let tempCart = { ...newCart };
    let tempIndex = newCart.orders.findIndex(
      (item) => item.productId === detailes.id
    );
    // console.log(tempIndex);
    let tempItem = newCart.orders[tempIndex];
    // console.log(tempItem);
    if (tempIndex === -1) {
      let newItem = {
        productId: detailes.id,
        title: detailes.title,
        price: detailes.price,
        quantity: Number(numbers),
      };
      tempCart.orders = [...newCart.orders, newItem];
      // console.log(tempCart);
      // tempCart = [...tempCart, newItem];
      setNewCart(tempCart);
      localStorage.setItem("cart", JSON.stringify(tempCart));
      console.log("fnished");
    } else {
      let newQuantity = Number(numbers) + tempItem.quantity;
      // console.log(newQuantity);
      if (newQuantity > detailes.stock) {
        toast.error("شما نمیتوانید از موجودی محصول بیشتر سفارش دهید ");
      } else {
        tempItem.quantity = newQuantity;
        tempCart.orders[tempIndex] = tempItem;
        setNewCart(tempCart);
        localStorage.setItem("cart", JSON.stringify(tempCart));
        console.log("fnished part 2 ");
      }
    }
    handleOpenModal();
  };
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.detailesMain}>
      <ToastContainer />
      <Toolbar />
      <div></div>

      <Card className={classes.detailesCard}>
        <CardMedia className={classes.detailesImage} image={detailes.image} />
        <CardContent className={classes.detailesContent}>
          <Typography component="h6" variant="h6">
            <strong>{detailes.title}</strong>
          </Typography>
          <Typography component="p" variant="p">
            <strong>{category}</strong>
          </Typography>
          <Typography component="p">
            <strong>{price} تومان</strong>
          </Typography>
          <div className={classes.detailesActions}>
            <TextField
              className={classes.detailesInput}
              variant="outlined"
              inputProps={{ type: "number" }}
              value={detailes.stock === 0 ? 0 : numbers}
              onChange={updateNumbers}
            />

            {detailes.stock === 0 ? (
              <Button
                style={{ marginRight: "10px" }}
                variant="contained"
                color="secondary"
                onClick={() => handleOpenModal()}
              >
                موجود نیست
              </Button>
            ) : (
              <Button
                variant="contained"
                className={classes.detailesbtn}
                onClick={() => handleAddToCart(detailes)}
              >
                افزودن به سبد خرید
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
      <div>
        <TabContent>{detailes.description}</TabContent>
      </div>
      <MainModal open={open} handleClose={handleClose}>
        {detailes.stock === 0 ? (
          <div className={classes.detailesModal}>
            <strong>این محصول موجود نمیباشد</strong>
            <Button variant="contained" onClick={() => handleClose()}>
              بستن
            </Button>
          </div>
        ) : (
          <div className={classes.detailesModal}>
            <strong>محصول به سبد خرید اضافه شد</strong>
            <Button variant="contained" onClick={() => handleClose()}>
              بستن
            </Button>
          </div>
        )}
      </MainModal>
    </div>
  );
};

export default Detailes;
