import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"
import styled from "styled-components"

const H2 = styled.h2`
  color: #fcf8f3;
`

const H4 = styled.h4`
  color: #fcf8f3;
`

const Quotes = () => {
  return (
    <Container>
      <Carousel fade prevIcon={false} nextIcon={false} indicators={false}>
        <Carousel.Item className="text-center p-4" interval={5000}>
          <H2>“Physical fitness is the first requisite of happiness”</H2>
          <H4>Joseph Pilates</H4>
        </Carousel.Item>
        <Carousel.Item className="text-center  p-4" interval={5000}>
          <H2>“Pilates is complete coordination of body, mind and spirit”</H2>
          <H4>Joseph Pilates</H4>
        </Carousel.Item>
        <Carousel.Item className="text-center  p-4" interval={5000}>
          <H2>“A man is as young as his spinal columns”</H2>
          <H4>Joseph Pilates</H4>
        </Carousel.Item>
        <Carousel.Item className="text-center  p-4" interval={5000}>
          <H2>“Change happens through movement and movement heals”</H2>
          <H4>Joseph Pilates</H4>
        </Carousel.Item>
        <Carousel.Item className="text-center  p-4" interval={5000}>
          <H2>
            “Every moment of our life can be the beginning of great things”
          </H2>
          <H4>Joseph Pilates</H4>
        </Carousel.Item>
        <Carousel.Item className="text-center  p-4" interval={5000}>
          <H2>“It’s the mind itself which shapes the body”</H2>
          <H4>Joseph Pilates</H4>
        </Carousel.Item>
        <Carousel.Item className="text-center  p-4" interval={5000}>
          <H2>“Everyone is the architect of their own happiness”</H2>
          <H4>Joseph Pilates</H4>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default Quotes
