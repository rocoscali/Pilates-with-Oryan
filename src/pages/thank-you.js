import React from "react"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import styled from "styled-components"

import PhoneIcon from "../assets/designs/phone-icon.png"
import EmailIcon from "../assets/designs/email-icon-dark.png"
import FacebookIcon from "../assets/designs/facebook-icon.png"
import InstagramIcon from "../assets/designs/instagram-icon.png"
import Image from "react-bootstrap/Image"

const StyledIcon = styled(Image)`
  width: 2rem;
  margin: 1rem;
`
const StyledIconSmall = styled(Image)`
  width: 1.2rem;
  margin: 0.5rem;
`

const H1 = styled.h1`
  font-size: 2rem;
`

const Thankyou = ({ data }) => {
  return (
    <Layout>
      <Container className="mt-3 text-center justify-content-center">
        <H1>Thank you for getting in touch!</H1>

        <h5 className="m-3">
          Your message has been successfully sent. <br />
          <br />I will contact you very soon!
        </h5>

        <div className="m-5 d-flex justify-content-center">
          <div className="text-center pt-4">
            <h3> Oryan Werthaim</h3>
            <h5>
              <StyledIconSmall src={PhoneIcon} alt="contact phone" />{" "}
              +49-0176-34568126
            </h5>
            <h5>
              <StyledIconSmall src={EmailIcon} alt="contact email" />{" "}
              oryanpilates@gmail.com
            </h5>
            <p>
              <a
                href="https://www.facebook.com/PilatesOryan"
                target="_blank"
                rel="noreferrer"
              >
                <StyledIcon src={FacebookIcon} alt="contact icon" />
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
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Thankyou
