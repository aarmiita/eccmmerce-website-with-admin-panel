import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import {
  setCategory,
  setProductsByCategory,
  setSortedCategory,
} from "../../redux/actions/productActions";
import { Box, TextField, MenuItem } from "@material-ui/core";
import Pagination from "./Pagination";
import Category from "./Category";
import Loading from "../Loading/Loading";
import { useStyles } from "../../styles";
const sortList = [
  { value: "newest", label: "جدیدترین" },
  {
    value: "lowestPrice",
    label: "ارزان ترین",
  },
  {
    value: "highestPrice",
    label: "گران ترین",
  },
];
const Categories = () => {
  let history = useHistory();
  const classes = useStyles();
  const { category } = useParams();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const productsByCategory = useSelector(
    (state) => state.allProducts.productsByCategory
  );
  useEffect(() => {
    dispatch(setCategory(category));
  }, []);

  useEffect(() => {
    if (productsByCategory.length > 0) {
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const newProducts = productsByCategory?.slice(
        indexOfFirstPost,
        indexOfLastPost
      );
      setCurrentPosts(newProducts);
    }
  }, [productsByCategory, currentPage, sort, postsPerPage]);

  //Change Page
  const paginate = (pageNumber) => {
    history.push(history.location.pathname);
    console.log("hello");
    setCurrentPage(pageNumber);
  };
  const handleGoToDetailes = (id, category) => {
    history.push(`/home/${category}/${id}`);
  };

  const handleChange = (event) => {
    setSort(event.target.value);
    let value = event.target.value;
    if (sort !== "") {
      dispatch(setSortedCategory(category, value));
    } else {
      console.log("hi");
    }
  };
  return (
    <Box component="div" className={classes.categoryBox}>
      <div className={classes.toolbar} />
      <Box className={classes.categoryFilter}>
        <Box className={classes.categoryFiltersBox}>
          <TextField
            fullWidth
            variant="outlined"
            type="text"
            label="جستجو"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        <Box className={classes.categoryFiltersBox}>
          <TextField
            fullWidth
            id="outlined-select-currency"
            select
            label="select"
            value={sort}
            onChange={handleChange}
            variant="outlined"
          >
            {sortList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "10px",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        {productsByCategory.length > 0 ? (
          currentPosts
            ?.filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, index) => (
              <Category
                key={index}
                image={item.image}
                title={item.title}
                price={item.price}
                onClick={() => handleGoToDetailes(item.id, item.category)}
              />
            ))
        ) : (
          <Loading />
        )}
      </Box>
      <Box>
        <Pagination
          totalPosts={productsByCategory.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
        />
      </Box>
    </Box>
  );
};

export default Categories;
