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
            Personal Training
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            In this, one on one session, you will get the opportunity to work on
            your individual needs, using the Apparatus to help you achieve your
            goals. We will be working on the Reformer, Cadillac, chairs,
            Pedi-pole, and more. Private classes are recommended if you are just
            starting this method, or if you suffer from injury, or you have a
            medical condition that requires special needs. if you are an athlete
            that looking for balanced training to go hand in hand in your sports
            life."
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
