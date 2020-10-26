import React from "react";
import styled from "styled-components";
import wideImg1 from "../assets/img/ref-wide1.jpg";

const Image = styled.div`
  display: block;
  background: url(${wideImg1}) no-repeat fixed center center;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 30rem;
  z-index: -2;

  @media (max-width: 576px) {
    background: url(${wideImg1}) no-repeat center center;
    background-size: cover;
  }
`;
const Overlay = styled.div`
  background-color: #000;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

export default function WideImage1() {
  return (
    <Image>
      <Overlay />
    </Image>
  );
}
