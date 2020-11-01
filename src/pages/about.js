import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import texture1 from "../assets/designs/black-thread-light.png"

const StyledTextCardLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem 0rem;
  margin-right: -40px;
  background: #fcf7ed;
  background-image: url(${texture1});
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
  z-index: 10;
  @media (max-width: 991px) {
    margin-right: 0px;
  }
`
const StyledTextCardRight = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem 0rem;
  margin-left: -40px;
  background: #fcf7ed;
  background-image: url(${texture1});
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
  z-index: 10;
  @media (max-width: 991px) {
    margin-top: -10px;
    margin-left: 0px;
  }
`
const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
`
const StyledImgRight = styled(Img)`
  display: flex;
  align-items: center;
  width: 40rem;
  height: 50rem;
  left: -20px;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
  z-index: 5;
  @media (max-width: 991px) {
    left: 0px;
    top: -10px;
  }
`
const StyledImgLeft = styled(Img)`
  display: flex;
  align-items: center;
  width: 40rem;
  height: 50rem;
  right: -20px;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
  z-index: 5;
  @media (max-width: 991px) {
    right: 0px;
  }
`

const About = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Row className="mt-5 mb-5 text-left">
          <StyledCol
            xs={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 5, offset: 0 }}
          >
            <StyledTextCardLeft className="rounded">
              <p>
                I started to work as a certificate Pilates instructor for mat
                and apparatus on 2009. <br />
                My journey as an instructor started in several fitness and
                pilates studios in Tel-Aviv, Israel.
                <br /> I was also working daily with disabled and amputees in a
                soldier's rehabilitation center for 3 years. <br />
                Since 2016 I live in Berlin and teaches in several studios in
                the city – <br />
                Prenzlauer Berg | Charlottenburg | Weißensee | Karlshorst |
                Mitte{" "}
              </p>
            </StyledTextCardLeft>
          </StyledCol>
          <Col xs={12} md={12} lg={7}>
            <StyledImgRight
              fluid={data.backTeaserCadillac.childImageSharp.fluid}
              alt="oryan-photo"
              className="center rounded"
            />
          </Col>
        </Row>

        <Row className="mt-5 mb-5 text-left">
          <Col xs={12} md={12} lg={{ span: 5, offset: 1 }} height="200px">
            <StyledImgLeft
              fluid={data.cadillacLegsHang.childImageSharp.fluid}
              alt="oryan-photo"
              className="center rounded"
            />
          </Col>
          <StyledCol
            xs={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 5, offset: 0 }}
          >
            <StyledTextCardRight className="rounded">
              <p className="pt-4"></p>
              <p>
                I am an athlete and a dancer from an early age. Dancing has
                always fostered the strong bond between my body and mind. During
                training I've been exposed to Pilates as a method for body
                maintaining, recovery and improvement. I always liked working
                with people and after I complete a degree in psychology, I
                immediately started the studies for teaching Pilates.
                <br />
                Pilates is suitable for any purpose – fitness, better posture,
                athlete’s performance improvement, injury rehabilitation and
                simply to keep on great feeling with a balanced body. <br />I am
                offering Private, Duo or Group classes with mat or apparatus.
                The classes are suitable for all levels and conditions, focusing
                on the participant’s personal needs.
              </p>{" "}
            </StyledTextCardRight>
          </StyledCol>
        </Row>

        <Row className="mt-5 mb-5 text-left">
          <StyledCol
            xs={{ span: 10, offset: 1 }}
            md={{ span: 10, offset: 1 }}
            lg={{ span: 5, offset: 0 }}
          >
            <StyledTextCardLeft className="rounded">
              <p>
                On the years 2013-2016, I was also working daily with disabled
                and amputee in a soldier's rehabilitation center "Bet Halochem"
                in Tel-Aviv. On 2016 I moved to Berlin where I am continuing my
                way in several studios with group or private lessons. In my
                classes I emphasize accuracy and correct movement along with
                humor and fun atmosphere. My classes are in English, German and
                Hebrew.
              </p>
            </StyledTextCardLeft>
          </StyledCol>
          <Col xs={12} md={12} lg={6}>
            <StyledImgRight
              fluid={data.reformerLegsUp.childImageSharp.fluid}
              alt="oryan-photo"
              className="center rounded"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    reformerLegsUp: file(relativePath: { eq: "reformer-legs-up.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    cadillacLegsHang: file(relativePath: { eq: "cadillac-legs-hang.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    backTeaserCadillac: file(relativePath: { eq: "back-teaser-cadillac.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
