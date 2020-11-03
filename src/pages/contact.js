import React from "react"
import PhoneIcon from "@material-ui/icons/Phone"
import EmailIcon from "@material-ui/icons/Email"
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
`
const Contact = () => {
  return (
    <Layout>
      <SEO />
      <Container className="p-4">
        <h2 className="text-center">Let's be in touch!</h2>
        <Row>
          <Col className="col-md-8 col-12">
            <ContactForm>
              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control placeholder="Full name" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder="Email address" />
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write to me"
                />
              </Form.Group>
              <Form.Label>Check any of your interests:</Form.Label>
              <Form.Group id="privateCheckbox">
                <Form.Check type="checkbox" label="Private Pilates" />
              </Form.Group>
              <Form.Group id="duoCheckbox">
                <Form.Check type="checkbox" label="Duo Pilates" />
              </Form.Group>
              <Form.Group id="groupCheckbox">
                <Form.Check type="checkbox" label="Group Pilates" />
              </Form.Group>
              <Form.Group id="atHomeCheckbox">
                <Form.Check type="checkbox" label="Pilates At Home" />
              </Form.Group>
              <Form.Group id="massageCheckbox">
                <Form.Check type="checkbox" label="Facia Massage Therapy" />
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
                  width="100%"
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
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Contact
