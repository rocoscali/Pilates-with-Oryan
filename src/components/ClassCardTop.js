import React from "react"
import Card from "react-bootstrap/Card"
import styled from "styled-components"
import texture1 from "../assets/designs/black-thread-light.png"
import Img from "gatsby-image"

const StyledCard = styled(Card)`
  margin: 0rem 1rem 1rem !important;
  background: #fcf7ed;
  background-image: url(${texture1});
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15) !important;
  height: 770px;

  @media (max-width: 1199px) {
    height: 815px;
  }
  @media (max-width: 991px) {
    margin: 0rem 0rem 1rem !important;
    height: auto;
  }
  &:hover {
    background: #fcf7ed;
    background-image: url(${texture1});
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.25) !important;
  }
  .card-body {
    text-align: center;
    padding: 1.5rem 1.5rem 0 !important;
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
  background-color: #bbae9e;
  width: 90%;
  border-radius: 0.25rem;
  margin: 2rem auto;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.2);
`

const ClassCardTop = props => {
  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
      <StyledImage
        alt={props.img.name}
        fluid={props.img.childImageSharp.fluid}
      />
    </StyledCard>
  )
}

export default ClassCardTop
