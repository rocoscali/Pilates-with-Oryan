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
const H2 = styled.h2`
  font-size: 1.5rem;
  font-family: "Josefin Sans", sans-serif;
`
const H4 = styled.h4`
  font-size: 1.2rem;
`
const HR = styled.hr`
  border-style: solid none none;
  border-width: 6px;
  border-color: #8db596;
  border-radius: 5px;
  width: 50%;
`
// const Image = styled(Img)`
//   width: 30rem;
//   box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
// `
const StyledImg = styled(Img)`
  display: flex;
  align-items: center;
  width: 20rem;
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
  text-align: left;
  @media (max-width: 991px) {
    text-align: center;
  }
`
const StyledLink = styled(Link)`
  /* color: #fcf8f3;
  text-decoration: none;
  &:hover {
    color: #000;
    text-decoration: none; */
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

const StyledText = styled.div`
  display: flex;
  text-align: left;
  @media (max-width: 991px) {
    text-align: center;
  }
`
const Home = props => {
  return (
    <div>
      <Container>
        <H1 className="text-center mt-4">Pilates classes in Berlin</H1>
        <H2 className="text-center mb-4">
          Classical | Contemporary | Mat & Apparatus
        </H2>
        <HR />
        <H4 className="text-center mt-4">
          Pilates is suitable for any purpose – fitness, better posture,
          athlete's performance improvement, injury rehabilitation, and most
          important to help us feel great.
        </H4>
        <p className="text-center p-2 ">
          I believe that Pilates is great for everybody at every age, it helps
          to improve our posture and our fitness level. <br />
          Pilates guides us on how to think and move differently, be more
          focused, and be more coordinated with our body and mind.
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
      <div id="about"></div>
      <Container className="mt-4 mb-4">
        <H1 className="text-center">About</H1>
        <Row className="mt-3 mb-3">
          <StyledTextCol className="align-items-middle" xs={12} md={12} lg={7}>
            <p>
              Oryan is an athlete and a dancer from an early age. For her,
              dancing has always fostered a strong bond between body and mind.
              <br />
              During training, she has been exposed to Pilates as a tool for
              body maintenance, recovery, and improvement. <br />
              She always had a passion for working with people, so after
              completing her BA in psychology in 2008, she immediately started
              her Pilates certification training. <br />
              <br />
              Since 2009, Oryan works as A Pilates instructor in many studios in
              Tel Aviv, Israel. She had the opportunity to work daily with
              disabled and amputees in soldiers rehabilitation center "Bet
              Halohem" in Tel Aviv for 3 years. Since 2016 Oryan works in
              studios around Berlin.
              <br />
              <br /> She completed the Anatomy Trains© "in Structure and
              Function" course By Tom Mayers in 2019.
              <br /> In 2020, she became a certified Thai massage therapist.
            </p>
          </StyledTextCol>
          <StyledImgCol xs={12} md={12} lg={{ span: 5, offset: 0 }}>
            <StyledImg
              fadeIn
              fluid={props.data.cadillacLegsHang.childImageSharp.fluid}
              alt={props.data.cadillacLegsHang.name}
              className="center rounded"
            />
          </StyledImgCol>
        </Row>
      </Container>
      <Container className="p-3">
        <StyledText>
          <p>
            In my classes, I emphasize accuracy and correct movement, along with
            humor and a fun atmosphere. My classes are in English, German, and
            Hebrew.
            <br /> To get the best results, I recommend at least 2-3 pilates
            sessions a week, apparatus class (reformer, cadillac, tower, etc.)
            or a mat class with small equipment (elastic band, fitness ball,
            magic ring, etc.).
          </p>
        </StyledText>
        <HR />
        <H4 className="font-weight-bold text-center pt-3 mt-2 mb-3">
          <em>
            "In 10 sessions you'll feel the difference, in 20 you'll see the
            difference, and in 30 you'll have a new body"
          </em>
          <br /> - Joseph Pilates
        </H4>
      </Container>
      <BackgroundImage
        className="bg"
        fadeIn
        fluid={props.data.oryanTeaser.childImageSharp.fluid}
        alt={props.data.oryanTeaser.name}
      >
        <Overlay />
      </BackgroundImage>
      <Container className="pt-5 text-center">
        <p className="text-center">
          Especially for Covid19 days, I recorded pilates video classes for you
          to practice pilates at home. <br /> The videos are free and available
          at any time you need it.
        </p>

        <StyledLink to="/videos">
          <Button className="m-3 btn-lg w-35" variant="info" type="submit">
            To The Videos{" "}
          </Button>
        </StyledLink>

        <HR />
        <H4 className=" font-weight-bold text-center mt-4 mb-3">
          I invite to join in one of my classes in Berlin
        </H4>
        <p className="m-3">
          Are you ready for a journey of discovering the art of control? <br />I
          am waiting to guide you through it!
        </p>

        <StyledLink to="/contact/#contact">
          <Button className="m-3 btn-lg w-35" variant="info" type="submit">
            Book a lesson
          </Button>
        </StyledLink>

        <H4 className="font-weight-bold fon text-center mt-1">Or</H4>

        <StyledLink to="/online-class/#zoom-form">
          <Button className="m-3 btn-lg w-35" variant="info" type="submit">
            join my new Online Zoom Classes!
          </Button>
        </StyledLink>
      </Container>
    </div>
  )
}

export default Home
