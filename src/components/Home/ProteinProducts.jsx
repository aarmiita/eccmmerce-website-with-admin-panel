import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import Product from "./Product";
import Carousel from "react-elastic-carousel";
import proteinCategory from "../../assets/images/proteins.png";
import Loading from "../Loading/Loading";
import { useHistory } from "react-router";

const ProteinProducts = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const [protein, setProtein] = useState([]);
  useEffect(() => {
    dispatch(getProducts());
    console.log("patched");
  }, []);
  useEffect(() => {
    let array = [];
    for (let i in products) {
      if (products[i].category === "protein") {
        array.push(products[i]);
      }
    }
    setProtein(array);
  }, [products]);
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 2 },
    { width: 480, itemsToShow: 2, itemsToScroll: 2 },
    { width: 576, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 4, itemsToScroll: 4 },
    { width: 992, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1400, itemsToShow: 4, itemsToScroll: 4 },
  ];
  const handleClick = (category) => {
    console.log("hello");
    history.push(`home/${category}`);
  };
  return (
    <>
      {protein.length > 0 ? (
        <div className="slider_main">
          <h1
            className="slider_main_title"
            onClick={() => handleClick(protein[0].category)}
          >
            {" "}
            محصولات پروتئینی
          </h1>
          <div className="slider-container">
            <div
              className="slider-container__images"
              onClick={() => handleClick(protein[0].category)}
            >
              <h2 className="slider-container__images__title">
                محصولات پروتئینی
              </h2>
              <img
                src={proteinCategory}
                alt="proteinCategory"
                className="slider-container__images__img"
              />
            </div>
            <Carousel
              breakPoints={breakPoints}
              disableArrowsOnEnd={false}
              pagination={false}
              isRTL={true}
              // {...settings}
              className="slider-container____sliders"
            >
              {protein?.map((item, index) => {
                return (
                  <Product
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    onClick={() => history.push(`/home/protein/${item.id}`)}
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProteinProducts;
