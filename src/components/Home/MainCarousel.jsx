import React from "react";
import { Carousel } from "react-responsive-carousel";
import slider6 from "../../assets/images/slider6.png";
import slider7 from "../../assets/images/slider7.png";
import slider3 from "../../assets/images/slider3.jpg";
import slider4 from "../../assets/images/slider4.jpg";
import slider5 from "../../assets/images/slider5.jpg";
import banner2 from "../../assets/images/banner2.gif";
import banner3 from "../../assets/images/banner3.jpg";
const MainCarousel = () => {
  const settings = {
    arrow: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="main-carousel">
      <div className="main-carousel__carousel">
        <Carousel showArrows={false} showThumbs={false} showStatus={false}>
          <div className="main-carousel__carousel__div">
            <img className="main-carousel__carousel__div__img" src={slider6} />
          </div>
        </Carousel>
      </div>
      <div className="main-carousel__banners">
        <div className="main-carousel__banners__div">
          <img
            className="main-carousel__banners__div__img"
            src={banner2}
            alt="bannet2"
          />
        </div>
        <div className="main-carousel__banners__div">
          <img
            className="main-carousel__banners__div__img"
            src={banner3}
            alt="banner3"
          />
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
