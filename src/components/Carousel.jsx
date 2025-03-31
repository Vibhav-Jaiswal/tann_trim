import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';

const Carousel = () => {
  const categoryItems = [
    { name: "All Bags", icon: img1 },
    { name: "Vanity Pouch", icon: img2 },
    { name: "Tote Bag", icon: img3 },
    { name: "Duffle Bag", icon: img4 },
    { name: "Laptop Sleeve", icon: img5 },
    { name: "Messenger Bags", icon: img6 },
    { name: "Slings Bags", icon: img7 },
    { name: "Handbags", icon: img8 },
  ];

  const settings = {
    dots: false,
    infinite: true, 
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 100,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="py-6 overflow-hidden">
      <Slider {...settings}>
        {categoryItems.map((item, index) => (
          <div
            key={index}
            className="py-2 h-32 w-32"
          >
            <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
