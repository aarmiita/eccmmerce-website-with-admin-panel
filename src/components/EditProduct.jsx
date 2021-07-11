import React, { useEffect, useState } from "react";
import { Button, TextField, SvgIcon, Box } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import MenuItem from "@material-ui/core/MenuItem";
import { toast, ToastContainer } from "react-toastify";
import { useStyles } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import {
  ChangeAProductById,
  setProducts,
  getProducts,
  SetselectedProduct,
} from "../redux/actions/productActions";
const EditProduct = ({ closeModal }) => {
  const classes = useStyles();
  const products = useSelector((state) => state.allProducts.products);
  const selectedProduct = useSelector(
    (state) => state.allProducts.selectedProduct
  );
  const dispatch = useDispatch();
  const categories = products?.map((product) => product.category);
  const NewCategories = [...new Set(categories)];
  const [image, setImage] = useState("");
  const [title, setTitle] = useState(selectedProduct.title);
  const [price, setPrice] = useState(selectedProduct.price);
  const [category, setCategory] = useState(selectedProduct.category);
  const [description, setDescription] = useState(selectedProduct.description);
  useEffect(() => {
    const getBase64FromUrl = async (url) => {
      const data = await fetch(url);
      const blob = await data.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      });
    };
    getBase64FromUrl(selectedProduct.image).then((res) => setImage(res));
  }, []);
  const UploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
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
    if (title === "" || price === "" || category === "") {
      toast.error("لطفا اطلاعات را به درستی وارد کنید ");
      return;
    } else {
      let newSelectedProduct = {
        ...selectedProduct,
        image: image,
        title: title,
        description: description,
        category: category,
        price: Number(price),
      };
      dispatch(ChangeAProductById(selectedProduct.id, newSelectedProduct));
      dispatch(getProducts());
      dispatch(SetselectedProduct({}));
      closeModal();
    }
    // let newProducts = products.map((product) =>
    //   product.id === selectedProduct.id
    //     ? {
    //         ...product,
    //         newSelectedProduct,
    //       }
    //     : product
    // );

    // dispatch(addProduct(newProduct));
    // setTitle("");
    // setImage("");
    // setDescription("");
    // setCategory("");
    // setPrice("");
  };
  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <Box component="div" className={classes.formBoxUpload}>
          <h4 className={classes.modalTitle}>تصویر کالا :</h4>
          <div className={classes.uploadBtn}>
            <img src={selectedProduct.image} className={classes.editImage} />
            <TextField
              variant="outlined"
              type="accept"
              id="fileUploadButton"
              value={image}
            />
            {/* <label htmlFor={"fileUploadButton"}>
              <Button
                className={classes.upload}
                type="files"
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
            </label> */}
            <Button
              variant="contained"
              component="label"
              color="secondary"
              startIcon={
                <SvgIcon fontSize="small">
                  <CloudUploadIcon />
                </SvgIcon>
              }
            >
              Browse
              <input type="file" onChange={(e) => UploadImage(e)} hidden />
            </Button>
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

export default EditProduct;
