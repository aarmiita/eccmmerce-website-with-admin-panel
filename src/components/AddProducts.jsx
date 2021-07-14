import React, { useState } from "react";
import { Button, TextField, SvgIcon, Box } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, getProducts } from "../redux/actions/productActions";
import { toast, ToastContainer } from "react-toastify";
const AddProducts = ({ closeModal }) => {
  const classes = useStyles();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const categories = products?.map((product) => product.category);
  const NewCategories = [...new Set(categories)];
  const UploadImage = async (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setImage(base64);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !title || !price || !category) {
      toast.error("لطفا اطلاعات را به درستی وارد کنید ");
    } else {
      let newProduct = {
        title: title,
        image: image,
        description: description,
        category: category,
        price: Number(price),
      };
      dispatch(addProduct(newProduct));
      dispatch(getProducts());
      setTitle("");
      setImage("");
      setDescription("");
      setCategory("");
      setPrice("");
      closeModal();
    }
  };
  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <Box component="div" className={classes.formBoxUpload}>
          <h4 className={classes.modalTitle}>تصویر کالا :</h4>
          <div className={classes.uploadBtn}>
            <TextField
              variant="outlined"
              type="file"
              id="fileUploadButton"
              onChange={(e) => UploadImage(e)}
            />
            <label htmlFor={"fileUploadButton"}>
              <Button
                className={classes.upload}
                color="secondary"
                variant="contained"
                component="span"
                startIcon={
                  <SvgIcon fontSize="small">
                    <CloudUploadIcon />
                  </SvgIcon>
                }
              >
                Browse
              </Button>
            </label>
          </div>
        </Box>
        <div className={classes.formBox}>
          <h4>نام کالا : </h4>
          <TextField
            className={classes.formInput}
            InputProps={{ classes: { input: classes.formAreaInput } }}
            variant="outlined"
            fullWidth
            name="title"
            autoComplete="name"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.formBox}>
          <h4>قیمت کالا : </h4>
          <TextField
            className={classes.formInput}
            variant="outlined"
            fullWidth
            name="price"
            autoComplete="name"
            autoFocus
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className={classes.formBox}>
          <h4>دسته بندی : </h4>
          <TextField
            className={classes.formInput}
            variant="outlined"
            fullWidth
            id="standard-select-currency"
            name="category"
            select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {NewCategories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={classes.formBox}>
          <h4>توضیحات : </h4>
          <TextField
            className={classes.formInput}
            variant="outlined"
            fullWidth
            placeholder="توضیحات"
            multiline
            rows={1}
            rowsMax={1}
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={classes.savebtn}>
          <Button variant="contained" className={classes.save} type="submit">
            دخیره
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddProducts;
