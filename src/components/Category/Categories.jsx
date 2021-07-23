import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import { setCategory } from "../../redux/actions/productActions";
import Category from "./Category";

const Categories = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const productsByCategory = useSelector(
    (state) => state.allProducts.productsByCategory
  );
  useEffect(() => {
    dispatch(setCategory(category));
    console.log("hello");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  );
};

export default Categories;
