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
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {productsByCategory.length > 0 ? (
        productsByCategory?.map((item, index) => (
          <Category
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))
      ) : (
        <div>Hello</div>
      )}
    </div>
  );
};

export default Categories;
