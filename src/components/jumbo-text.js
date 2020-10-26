import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

export default function Quotes() {
  return (
    <Container>
      <Carousel fade prevIcon={false} nextIcon={false} indicators={false}>
        <Carousel.Item className="text-center p-4" interval={5000}>
          <h2>“Physical fitness is the first requisite of happiness”</h2>
          <h4>Joseph Pilates</h4>
        </Carousel.Item>
        <Carousel.Item className="text-center  p-4" interval={5000}>
          <h2>“Pilates is complete coordination of body, mind and spirit”</h2>
          <h4>Joseph Pilates</h4>
        </Carousel.Item>
        <Carousel.Item className="text-center  p-4" interval={5000}>
          <h2>“A man is as young as his spinal columns”</h2>
          <h4>Joseph Pilates</h4>
        </Carousel.Item>
        <Carousel.Item className="text-center  p-4" interval={5000}>
          <h2>“Change happens through movement and movement heals”</h2>
          <h4>Joseph Pilates</h4>
        </Carousel.Item>
        <Carousel.Item className="text-center  p-4" interval={5000}>
          <h2>
            “Every moment of our life can be the beginning of great things”
          </h2>
          <h4>Joseph Pilates</h4>
        </Carousel.Item>
        <Carousel.Item className="text-center  p-4" interval={5000}>
          <h2>“It’s the mind itself which shapes the body”</h2>
          <h4>Joseph Pilates</h4>
        </Carousel.Item>
        <Carousel.Item className="text-center  p-4" interval={5000}>
          <h2>“Everyone is the architect of their own happiness”</h2>
          <h4>Joseph Pilates</h4>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
