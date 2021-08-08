import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import drinksCategory from "../../assets/images/drinks.png";
import Product from "./Product";
import Loading from "../Loading/Loading";
import { useHistory } from "react-router";

const DrinksProducts = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    let array = [];
    for (let i in products) {
      if (products[i].category === "drinks") {
        array.push(products[i]);
      }
    }
    setDrinks(array);
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
      {drinks.length > 0 ? (
        <div className="slider_main">
          <h1
            className="slider_main_title"
            onClick={() => handleClick(drinks[0].category)}
          >
            نوشیدنی
          </h1>

          <div className="slider-container">
            <div
              className="slider-container__images"
              onClick={() => handleClick(drinks[0].category)}
            >
              <h2 className="slider-container__images__title">نوشیدنی</h2>
              <img
                src={drinksCategory}
                alt="drinksCategory"
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
              {drinks?.map((item, index) => {
                return (
                  <Product
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    onClick={() => history.push(`/home/drinks/${item.id}`)}
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

export default DrinksProducts;
