import React from "react"
import Navbar from "react-bootstrap/Navbar"
import EmailIcon from "@material-ui/icons/Email"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
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
  color: #fcf8f3;
`

const Footer = () => {
  return (
    <StyledFooter sticky="bottom">
      <div className="align-items-center d-flex">
        <H5 className="m-2">PILATES WITH ORYAN © </H5>{" "}
        <a href="https://www.facebook.com/PilatesOryan" target="_blank">
          <FacebookIcon fontSize="large" color="primary" className="ml-5" />
        </a>
        <a
          href="https://www.instagram.com/oryan_pilates_berlin"
          target="_blank"
        >
          <InstagramIcon fontSize="large" color="secondary" className="ml-3" />
        </a>
        <a href="mailto:oryanpilates@gmail.com">
          <EmailIcon fontSize="large" className="ml-3" />
        </a>
      </div>
    </StyledFooter>
  )
}
export default Footer
