import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DairyProducts from "../components/Home/DairyProducts";
import MainCarousel from "../components/Home/MainCarousel";
import ProteinProducts from "../components/Home/ProteinProducts";
import DrinksProducts from "../components/Home/DrinksProducts";
const HomePage = () => {
  return (
    <>
      <MainCarousel />
      <DairyProducts />
      <ProteinProducts />
      <DrinksProducts />
    </>
  );
};

export default HomePage;
