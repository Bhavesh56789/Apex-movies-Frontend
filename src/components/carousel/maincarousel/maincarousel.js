import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../../../assets/image1.jpg';
import image2 from '../../../assets/image2.jpg';
import image3 from '../../../assets/image3.jpg';
import './maincarousel.css';

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel slide carousel-fade">
      <Carousel.Item>
        <img
          className="d-block w-100 crimg"
          src={image1}
          alt="First slide" height="500"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 crimg"
          src={image2}
          alt="Second slide" height="500"
        />


      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 crimg"
          src={image3}
          alt="Third slide" height="500"
        />


      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;