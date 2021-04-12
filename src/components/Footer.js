import React from "react"

import styled from "styled-components"
import texture from "../assets/designs/redox-01.png"
import EmailIcon from "../assets/designs/envelope-svg.svg"
import FacebookBW from "../assets/designs/facebook-svg.svg"
import InstagramIcon from "../assets/designs/instagram-svg.svg"
import Image from "react-bootstrap/Image"
// import Logo from "./Logo"

const StyledFooter = styled.div`
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
  /* font-weight: 400; */
  font-size: 1.2rem;
  color: #fcf8f3;
`
const StyledIcon = styled(Image)`
  /* fill: #fcf8f3; */
  width: 2rem;
  height: 2rem;
  margin: 0.25rem 1rem 0.25rem;
`

const Footer = () => {
  return (
    <StyledFooter sticky="bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-md-left text-center order-md-last">
            <a
              href="https://www.facebook.com/PilatesOryan"
              target="_blank"
              rel="noreferrer"
            >
              <StyledIcon src={FacebookBW} alt="contact icon" />
            </a>
            <a
              href="https://www.instagram.com/oryan_pilates_berlin"
              target="_blank"
              rel="noreferrer"
            >
              <StyledIcon src={InstagramIcon} alt="contact icon" />
            </a>
            <a href="mailto:oryanpilates@gmail.com">
              <StyledIcon src={EmailIcon} alt="contact email icon" />
            </a>
          </div>
          <div class="col-md-6 text-md-right text-center align-content-center order-md-first">
            <H5 className="m-2">PILATES WITH ORYAN © </H5>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}
export default Footer
