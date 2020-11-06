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
  display: flex;
  align-items: center;
  border-radius: 50%;
  width: 70%;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
`

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container className="p-4">
        <h2 className="text-center">Let's be in touch!</h2>
        <Row>
          <Col className="col-md-8 col-12">
            <ContactForm
              name="contact form"
              method="post"
              data-netlify-honeypot="bot-field"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact form" />
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
                  required
                  as="textarea"
                  rows={3}
                  placeholder="Write to me"
                  name="message"
                />
              </Form.Group>
              <fieldset>
                <Form.Group controlId="chosenClass">
                  <Form.Label as="legend">
                    Choose any of your interests:
                  </Form.Label>
                  <Form.Label>
                    <Form.Check
                      name="classType"
                      type="checkbox"
                      value="Private Pilates"
                    />
                    Private Pilates
                  </Form.Label>
                  <Form.Label>
                    <Form.Check
                      name="classType"
                      type="checkbox"
                      value="Duo Pilates"
                    />
                    Duo Pilates
                  </Form.Label>
                  <Form.Label>
                    <Form.Check
                      name="classType"
                      type="checkbox"
                      value="Group Pilates"
                    />
                    Group Pilates
                  </Form.Label>
                  <Form.Label>
                    <Form.Check
                      name="classType"
                      type="checkbox"
                      value="Pilates At Home"
                    />
                    Pilates At Home
                  </Form.Label>
                  <Form.Label>
                    <Form.Check
                      name="classType"
                      type="checkbox"
                      value="Fascia Massage Therapy"
                    />
                    Fascia Massage Therapy
                  </Form.Label>
                </Form.Group>
              </fieldset>
              <Button className="btn-lg w-35" variant="info" type="submit">
                Send
              </Button>
            </ContactForm>
          </Col>
          <Col className="col-md-4 col-12 text-center pt-4">
            <Row>
              <Col className="d-flex justify-content-center">
                <StyledImage
                  fluid={data.profilePhoto.childImageSharp.fluid}
                  alt={data.profilePhoto.name}
                />
              </Col>
            </Row>
            <Row>
              <Col className="text-center pt-4">
                <h5>
                  For more information please use this form or contact me on -
                </h5>
                <br />
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
              </Col>
            </Row>
          </Col>
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
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
