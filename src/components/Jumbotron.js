import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import styled from "styled-components"
import JumboImage from "../assets/img/jumbo-img1.jpg"
import JumboImage2 from "../assets/img/jumbo-mobile1.jpg"
import Quotes from "./Quotes"

const Jumbo = styled(Jumbotron)`
  display: flex;
  align-items: center;
  text-align: center;
  background: url(${JumboImage}) no-repeat center;
  background-size: cover;
  color: #ccc;
  height: 25rem;
  position: relative;
  z-index: -2;
  margin-bottom: 0px;

  @media (max-width: 576px) {
    background: url(${JumboImage2}) no-repeat center;
    background-size: cover;
  }
`

const Overlay = styled.div`
  background-color: #000;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`

const Jumbotop = () => {
  return (
    <Jumbo>
      <Overlay />
      <Quotes />
    </Jumbo>
  )
}

export default Jumbotop
