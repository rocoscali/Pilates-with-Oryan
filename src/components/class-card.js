import React from "react"
import Card from "react-bootstrap/Card"
import styled from "styled-components"
import texture1 from "../assets/designs/black-thread-light.png"
import Img from "gatsby-image"

const StyledCard = styled(Card)`
  margin: 2rem 0 5rem;
  background: #fcf7ed;
  background-image: url(${texture1});
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15) !important;
  &:hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.25) !important;
  }
  .card-body {
    text-align: center;
    padding: 1.5rem !important;
  }
  .card-title {
    font-size: 1.5rem;
    font-family: "Josefin Sans", sans-serif;
  }
  .card-text {
    text-align: justify;
  }
`
const StyledImage = styled(Img)`
  transform: scale(1);
  /* transition: transform 0.5s ease; */
  margin-bottom: "2rem";
  /* &:hover {
    transform: scale(1.5);
  } */
`

const Overflow = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 0.25rem;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.2);
`

const ClassCard = props => {
  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Overflow>
          <StyledImage
            alt={props.img.name}
            fluid={props.img.childImageSharp.fluid}
          />
        </Overflow>
      </Card.Body>
    </StyledCard>
  )
}

export default ClassCard
