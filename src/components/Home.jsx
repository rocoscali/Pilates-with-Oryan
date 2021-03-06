import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const H1 = styled.h1`
  font-size: 2rem;
`
const H4 = styled.h4`
  font-family: "Josefin Sans", sans-serif;
`
const H5 = styled.h5`
  font-size: 1.2rem;
`
const HR = styled.hr`
  border-style: solid none none;
  border-width: 6px;
  border-color: #8db596;
  border-radius: 5px;
  width: 50%;
`
const Image = styled(Img)`
  width: 30rem;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
`
const StyledImg = styled(Img)`
  display: flex;
  align-items: center;
  width: 70%;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
  z-index: 5;
  @media (max-width: 991px) {
  }
`
const StyledImgCol = styled(Col)`
  display: flex;
  justify-content: center;
`
const StyledTextCol = styled(Col)`
  @media (max-width: 991px) {
    text-align: center;
  }
`
const StyledLink = styled(Link)`
  color: #fcf8f3;
  text-decoration: none;
  &:hover {
    color: #000;
    text-decoration: none;
  }
`
const Overlay = styled.div`
  background-color: #000;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`

const Home = props => {
  return (
    <div>
      <Container>
        <H1 className="text-center mt-4">Pilates classes in Berlin</H1>
        <H4 className="text-center mb-4">
          Classical | Contemporary | Mat & Apparatus
        </H4>
        <HR />
        <H5 className="text-center mt-4">
          I believe that if you want something different you have to do
          something different, otherwise nothing changes.
        </H5>
        <p className="text-center p-2 ">
          To change your posture or your fitness level, you have to do something
          different. Pilates guides you on how to think and move differently, be
          more focused, and be more coordinated with your body and mind.
        </p>
      </Container>
      <BackgroundImage
        className="bg"
        fadeIn
        fluid={props.data.reformerLegsLift.childImageSharp.fluid}
        alt={props.data.reformerLegsLift.name}
      >
        <Overlay />
      </BackgroundImage>
      <Container className="text-center mt-4 mb-4">
        <p>
          While today it is more commonly known as "Pilates", Joseph Pilates
          actually called his training method "Contrology" ("The Art of
          Control"). Joseph explains:{" "}
          <em>
            “To be able to perform movements smoothly and fluently, you have to
            concentrate on every single part, every muscle of your body at every
            moment. This is the only way to gain control over every aspect of
            every training moment .”
          </em>
        </p>
      </Container>
      <Container className="mt-4 mb-2 d-flex justify-content-center">
        <Image
          fadeIn
          fluid={props.data.josephSidePlank.childImageSharp.fluid}
          alt={props.data.josephSidePlank.name}
          className="rounded"
        />
      </Container>
      <Container className="p-3">
        <H5 className="text-center mt-2 mb-3">
          <em>
            {" "}
            "In 10 sessions you'll feel the difference, in 20 you'll see the
            difference, and in 30 you'll have a new body"{" "}
          </em>
          <br /> - Joseph Pilates
        </H5>
        <p className="text-center">
          To get the best results, I recommend at least 2-3 pilates sessions a
          week of practice, apparatus class (reformer, cadillac, tower, etc.),
          or a mat class with small equipment (elastic band, fitness ball, magic
          ring, etc.).
        </p>
      </Container>
      <BackgroundImage
        className="bg"
        fadeIn
        fluid={props.data.oryanTeaser.childImageSharp.fluid}
        alt={props.data.oryanTeaser.name}
      >
        <Overlay />
      </BackgroundImage>
      <Container className="text-center">
        <br />
        {/* <HR className="mt-4 mb-4"></HR> */}
        <br />
        <p className="text-center">
          Especially for Covid19 days, I recorded pilates video classes for you
          to practice pilates at home. <br /> The videos are free and available
          at any time you need it.{" "}
        </p>{" "}
        <br />
        <Button className=" btn-lg w-35" variant="info" type="submit">
          <StyledLink to="/videos">To The Videos</StyledLink>
        </Button>
        <br />
        {/* <HR className="mt-4 mb-4"></HR> */}
        <br />
        <H5 className="text-center mt-3 mb-3">
          As you lay down on the mat, clear your mind, and concentrate on the
          movements
        </H5>
        <p className="text-center">
          The more you practice, the more you will progress. The more you
          progress, the stronger you will get. <br />
          Then you will be able to perform a more complex movement.{" "}
        </p>
        <Row className="mt-5 mb-5">
          {" "}
          <StyledImgCol xs={12} md={12} lg={{ span: 5, offset: 0 }}>
            <StyledImg
              fadeIn
              fluid={props.data.monkeyHang.childImageSharp.fluid}
              alt={props.data.monkeyHang.name}
              className="center rounded"
            />
          </StyledImgCol>
          <StyledTextCol className="align-items-middle" xs={12} md={12} lg={7}>
            <H5 className="mt-3">With all being serious, you must have fun!</H5>
            <br />{" "}
            <p>
              My students say the studio is kind of a playground. It's so much
              fun to hang like a monkey, roll, flip upside down, and so much
              more.
            </p>
            <br />
            <H5>
              Pilates is magical and our body and mind can do magic.{" "}
            </H5>{" "}
            <br />
            <p>
              Are you ready for a journey of discovering the art of control?{" "}
              <br />I am waiting to guide you through it!
            </p>
            <Button className=" btn-lg w-35" variant="info" type="submit">
              <StyledLink to="/contact">Book a lesson</StyledLink>
            </Button>
          </StyledTextCol>
        </Row>
      </Container>
    </div>
  )
}

export default Home
