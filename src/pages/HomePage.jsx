import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DairyProducts from "../components/Home/DairyProducts";
import MainCarousel from "../components/Home/MainCarousel";
const HomePage = () => {
  return (
    <>
      <MainCarousel />
      <DairyProducts />
    </>
  );
};

export default HomePage;
