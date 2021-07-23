import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import { setCategory } from "../../redux/actions/productActions";
import { Box } from "@material-ui/core";
import Category from "./Category";
import Loading from "../Loading/Loading";
import { useStyles } from "../../styles";
const Categories = () => {
  const classes = useStyles();
  const { category } = useParams();
  const dispatch = useDispatch();
  const productsByCategory = useSelector(
    (state) => state.allProducts.productsByCategory
  );
  useEffect(() => {
    dispatch(setCategory(category));
  }, []);

  return (
    <Box component="div" className={classes.categoryBox}>
      <Box>
        <Box></Box>
      </Box>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "10px",
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
          <Loading />
        )}
      </Box>
    </Box>
  );
};

export default Categories;
