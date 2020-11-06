import React from "react"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import AboutImage from "../assets/img/face1.jpg"
import Button from "react-bootstrap/Button"
import styled from "styled-components"
import Layout from "../components/Layout"
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

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container className="p-4">
        <h2 className="text-center">Let's be in touch!</h2>
        <Row>
          <Col className="col-md-8 col-12">
            <ContactForm
              name="contact"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact" />
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
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={3}
                  placeholder="Write to me"
                  name="message"
                />
              </Form.Group>

              <Form.Group controlId="chosenClass">
                <Form.Label>Check any of your interests:</Form.Label>
                <Form.Check
                  name="private"
                  type="checkbox"
                  label="Private Pilates"
                />
                <Form.Check name="duo" type="checkbox" label="Duo Pilates" />
                <Form.Check
                  name="group"
                  type="checkbox"
                  label="Group Pilates"
                />
                <Form.Check
                  name="at-home"
                  type="checkbox"
                  label="Pilates At Home"
                />
                <Form.Check
                  name="fascia-massage"
                  type="checkbox"
                  label="Fascia Massage Therapy"
                />
              </Form.Group>
              <Button className="btn-lg w-35" variant="info" type="submit">
                Send
              </Button>
            </ContactForm>
          </Col>
          <Col className="col-md-4 col-12 text-center pt-4">
            <Row>
              <Col className="mx-auto d-block">
                <Image
                  className="shadow"
                  roundedCircle
                  src={AboutImage}
                  width="70%"
                  alt="oryan-photo"
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
                  <PhoneIcon /> +49-0176-34568126
                </h5>
                <h5>
                  <EmailIcon /> oryanpilates@gmail.com
                </h5>
                <p>
                  <a
                    href="https://www.facebook.com/PilatesOryan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon
                      className="m-3"
                      fontSize="large"
                      color="primary"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/oryan_pilates_berlin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon
                      className="m-3"
                      fontSize="large"
                      color="secondary"
                    />
                  </a>
                  <a href="mailto:oryanpilates@gmail.com">
                    <EmailIcon className="m-3" fontSize="large" />
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
