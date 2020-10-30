import React from "react"
import Navbar from "react-bootstrap/Navbar"
import styled from "styled-components"
import texture from "../assets/designs/redox-01.png"

const StyledFooter = styled(Navbar)`
  justify-content: center;
  margin-top: 1rem;
  flex-shrink: none;

  background: #8db596;
  background-image: url(${texture}),
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3)
    );
  color: #fcf8f3;
`
const Footer = () => {
  return (
    <StyledFooter sticky="bottom">
      <h5 className="m-1">© Pilates With Oryan © </h5>
    </StyledFooter>
  )
}
export default Footer
