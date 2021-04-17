import React from "react"
import { graphql } from "gatsby"
import PhoneIcon from "../assets/designs/phone-icon.png"
import EmailIcon from "../assets/designs/email-icon-dark.png"
import FacebookIcon from "../assets/designs/facebook-icon.png"
import InstagramIcon from "../assets/designs/instagram-icon.png"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import styled from "styled-components"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import SEO from "../components/Seo"

const ContactForm = styled(Form)`
  font-family: "Montserrat", sans-serif;
  padding-top: 1rem;

  .form-control {
    border-radius: 2rem;
    padding: 1rem;
  }
  .form-label {
    margin-left: 0.5rem;
  }
  .form-check {
    padding-bottom: 0.5rem;
  }
`
const StyledIcon = styled(Image)`
  width: 2rem;
  margin: 1rem;
`
const StyledIconSmall = styled(Image)`
  width: 1.2rem;
  margin: 0.5rem;
`
const StyledImage = styled(Img)`
  background-color: #b5aa70;
  display: flex;
  align-items: center;
  border-radius: 50%;
  width: 70%;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
  @media (max-width: 991px) {
    width: 50%;
  }
`
const H1 = styled.h1`
  font-size: 2rem;
`
const StyledColLeft = styled(Col)`
  padding-left: 10%;
  @media (max-width: 991px) {
    padding-left: 1rem;
  }
`
const StyledColRight = styled(Col)`
  padding-right: 10%;
  @media (max-width: 991px) {
    padding-right: 1rem;
  }
`

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Zoom Classes"
        description="Join me for a Pilates online classes on Zoom at home"
      />
      <Container id="zoom-form" className="p-4">
        <H1 className="text-center">Book an online Zoom Class!</H1>
        <h5 className="text-center">
          Fill in the booking form and choose your preferred time
        </h5>

        <Row>
          <StyledColLeft className="col-lg-6 col-12">
            <ContactForm
              name="zoom form"
              method="post"
              data-netlify-honeypot="bot-field"
              data-netlify="true"
              onSubmit="submit"
              action="/thank-you"
            >
              <input type="hidden" name="form-name" value="zoom form" />
              <p hidden>
                <label>
                  Don’t fill this out
                  <input name="bot-field" />
                </label>
              </p>

              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Full name"
                  name="full-name"
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email address"
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write to me"
                  name="message"
                />
              </Form.Group>
              <Form.Group required controlId="chosenClass">
                <Form.Label as="legend">Choose any of the classes:</Form.Label>
                <Form.Check
                  name="class1"
                  type="checkbox"
                  label="12th April - 09:00"
                  id="chosenClass1"
                />
                <Form.Check
                  name="class2"
                  type="checkbox"
                  label="15th April - 19:00"
                  id="chosenClass2"
                />
                <Form.Check
                  name="class3"
                  type="checkbox"
                  label="19th April - 09:00"
                  id="chosenClass3"
                />
                <Form.Check
                  name="class4"
                  type="checkbox"
                  label="22th April - 19:00"
                  id="chosenClass4"
                />
                <Form.Check
                  name="class5"
                  type="checkbox"
                  label="26th April - 09:00"
                  id="chosenClass5"
                />
                <Form.Check
                  name="class6"
                  type="checkbox"
                  label="29th April - 19:00"
                  id="chosenClass6"
                />
              </Form.Group>
              <div className=" justify-content-center d-flex">
                <Button
                  className="btn-lg w-35 just"
                  variant="info"
                  type="submit"
                >
                  Save my spot
                </Button>
              </div>
            </ContactForm>
          </StyledColLeft>
          <StyledColRight className="col-lg-6 col-12 text-center pt-4">
            <Row>
              <Col className="d-flex justify-content-center">
                <StyledImage
                  fadeIn
                  fluid={data.profilePhoto.childImageSharp.fluid}
                  alt={data.profilePhoto.name}
                />
              </Col>
            </Row>
            <Row>
              <Col className="text-center pt-4">
                <h5>
                  For any question or consulting, please contact me at anytime
                </h5>
                <br />
                <h3> Oryan Werthaim</h3>
                <h5>
                  <StyledIconSmall src={PhoneIcon} alt="contact phone" />{" "}
                  +49-0176-34568126
                </h5>
                <h5>
                  <StyledIconSmall src={EmailIcon} alt="contact email" />
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
              </Col>
            </Row>
          </StyledColRight>
        </Row>
      </Container>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query {
    profilePhoto: file(relativePath: { eq: "oryan-profile-photo.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`