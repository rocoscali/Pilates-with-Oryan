import React from "react"
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"
import styled from "styled-components"

const H2 = styled.h2`
  color: #fcf8f3;
  @media (max-width: 575px) {
    font-size: 1.5rem;
  }
`

const H4 = styled.h4`
  color: #fcf8f3;
  @media (max-width: 575px) {
    font-size: 1rem;
  }
`

const Quotes = () => {
  const quotesList = [
    {
      text: "“Physical fitness is the first requisite of happiness”",
      author: "- Joseph Pilates",
    },
    {
      text: "“Pilates is complete coordination of body, mind and spirit”",
      author: "- Joseph Pilates",
    },
    {
      text: "“A man is as young as his spinal columns”",
      author: "- Joseph Pilates",
    },
    {
      text: "“Change happens through movement and movement heals”",
      author: "- Joseph Pilates",
    },
    {
      text: "“Every moment of our life can be the beginning of great things”",
      author: "- Joseph Pilates",
    },
    {
      text: "“It’s the mind itself which shapes the body”",
      author: "- Joseph Pilates",
    },
    {
      text: "“Everyone is the architect of their own happiness”",
      author: "- Joseph Pilates",
    },
  ]

  return (
    <Container>
      <Carousel fade prevIcon={false} nextIcon={false} indicators={false}>
        {quotesList.map(q => (
          <Carousel.Item className="text-center p-4" interval={5000}>
            <H2>{q.text}</H2>
            <H4>{q.author}</H4>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default Quotes
