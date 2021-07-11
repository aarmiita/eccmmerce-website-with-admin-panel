import React from "react";
import { Button } from "@material-ui/core";
import {
  deleteAProduct,
  getProducts,
  SetselectedProduct,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
const DeleteProduct = ({ closeModalDelete }) => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.allProducts.selectedProduct
  );
  const handleYes = () => {
    dispatch(deleteAProduct(selectedProduct.id));
    dispatch(getProducts());
    dispatch(SetselectedProduct({}));
    closeModalDelete();
  };
  const handleNo = () => {
    closeModalDelete();
  };
  return (
    <div>
      <h1>آیا میخواهید این محصول را پاک کنید ؟</h1>
      <div>
        <Button variant="contained" onClick={() => handleYes()}>
          بله
        </Button>
        <Button variant="contained" onClick={() => handleNo()}>
          خیر
        </Button>
      </div>
    </div>
  );
};

export default DeleteProduct;
