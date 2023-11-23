// CarouselDetails.jsx
import React from 'react';
import Cards from '../Cards';
import Slider from 'react-slick';
// Importa los estilos CSS de slick-carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import'./style.css'


const CarouselDetails = ({ events, currentEvent }) => {
  const futureEvents = events.filter((event) => event.estimate && event._id !== currentEvent._id);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  

  const slides = futureEvents.map((event, index) => (
    <div key={index} className="carousel-item px-2 ">
      <Cards
        evento={event}
        buttonText="See more"
        pathText={`/details/${event._id}`}
        buttonTextCart="Add to cart"
        pathTextCart={`/details/${event._id}`}
      />
    </div>
  ));

  return (
    <div className="w-70 h-65 md:h-85 lg:h-100" style={{ marginLeft: '30px', marginRight: '30px' }}>
  <Slider {...settings} className="carousel w-full">
  {slides}
</Slider>

    </div>
  );
};

export default CarouselDetails;
