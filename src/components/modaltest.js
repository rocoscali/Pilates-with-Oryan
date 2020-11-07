import React from "react"
import { Button, Modal } from "react-bootstrap"
import hold from "../assets/img/pilates-hold.jpg"
// import Image from "react-bootstrap/Image";
import styled from "styled-components"

const Styles = styled.div`
  .modal-open {
    overflow: hidden !important;
  }
`

export default function Modaltest(props) {
  return (
    <Styles>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="w-100 text-center"
            id="contained-modal-title-vcenter"
          >
            Thank you for getting in touch!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Your message has been successfully sent. <br />I will contact you
            very soon!
          </p>
          {/* <Image
            className="mr-3 shadow w-100"
            rounded
            src={hold}
            alt="pilates-hold"
          /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Styles>
  )
}
