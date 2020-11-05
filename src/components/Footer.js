import React from "react"
import Navbar from "react-bootstrap/Navbar"
import styled from "styled-components"
import texture from "../assets/designs/redox-01.png"

const StyledFooter = styled(Navbar)`
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 0.3rem;
  flex-shrink: none;
  background: #8db596;
  background-image: url(${texture}),
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3)
    );
`
const H5 = styled.h5`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #fcf8f3;
`

const Footer = () => {
  return (
    <StyledFooter sticky="bottom">
      <div className="align-items-center d-flex">
        <H5 className="m-2">PILATES WITH ORYAN © </H5>
      </div>
    </StyledFooter>
  )
}
export default Footer
