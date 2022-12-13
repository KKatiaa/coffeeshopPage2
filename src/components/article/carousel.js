import { React } from 'react';
import { Carousel } from 'react-bootstrap';
import Article1 from './carousel1.jpg';
import Article2 from './carousel2.png';
import Article3 from './carousel3.jpg';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Article1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Article2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Article3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;