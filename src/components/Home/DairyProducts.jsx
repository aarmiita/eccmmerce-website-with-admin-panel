import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import dairycategory from "../../assets/images/dairycategory.png";
import Product from "./Product";
import Loading from "../Loading/Loading";
import { useHistory } from "react-router";
const DairyProducts = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const [dairy, setDairy] = useState([]);
  useEffect(() => {
    dispatch(getProducts());
    console.log("patched");
  }, []);
  useEffect(() => {
    let array = [];
    for (let i in products) {
      if (products[i].category === "dairy") {
        array.push(products[i]);
      }
    }
    setDairy(array);
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
  // let settings = {
  //   dots: false,
  //   arrow: true,
  //   infinite: false,
  //   speed: 1000,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   // cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  const handleClick = (category) => {
    console.log("hello");
    history.push(`home/${category}`);
  };
  return (
    <>
      {dairy.length > 0 ? (
        <div className="slider_main">
          <div className="slider-container">
            <div
              className="slider-container__images"
              onClick={() => handleClick(dairy[0].category)}
            >
              <h2 className="slider-container__images__title">لبنیات</h2>
              <img
                src={dairycategory}
                alt="dairycategory"
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
              {dairy?.map((item, index) => {
                return (
                  <Product
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    onClick={() => history.push(`/home/dairy/${item.id}`)}
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

    // <>
    //   {dairy.length > 0 ? (
    //     <div className="slider-container">
    //       <div>
    //         <h2>کالاهای گروه لبنیات</h2>
    //       </div>
    //       <div className="slider-container__sliders">
    //         <Slider
    //           {...settings}
    //           className="slider-container____sliders__slider"
    //         >
    //           {dairy?.map((item, index) => {
    //             return (
    //               <Product
    //                 image={item.image}
    //                 title={item.title}
    //                 price={item.price}
    //               />
    //             );
    //           })}
    //         </Slider>
    //       </div>
    //     </div>
    //   ) : (
    //     <span>Hello</span>
    //   )}
    // </>
  );
};

export default DairyProducts;
