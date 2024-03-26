import "./style.css";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

const ContentCarousel = ({ contentData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (index) => setActiveIndex(index);

  const slides = contentData.map((content, index) => (
    <Carousel.Item key={index}>
      <Card>
        <Card.Body>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
          <button>Learn More</button>
        </Card.Body>
      </Card>
    </Carousel.Item>
  ));

  return (
    <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
      {slides}
      <Carousel.Control prev label="Previous" data-slide="prev" />
      <Carousel.Control next label="Next" data-slide="next" />
    </Carousel>
  );
};

export default ContentCarousel;
