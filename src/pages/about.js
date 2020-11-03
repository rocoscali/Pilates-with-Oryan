import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import texture1 from "../assets/designs/black-thread-light.png"
import SEO from "../components/Seo"

const StyledContainer = styled(Container)`
  margin: 2rem auto 2rem;
  width: 90%;
  flex: 1 1 auto;
  background: #fcf7ed;
  background-image: url(${texture1});
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
`
const StyledTextCardLeft = styled.div`
  display: flex;
  padding: 1rem 1rem 0rem;
  @media (max-width: 991px) {
    text-align: justify;
  }
`
const StyledTextCardRight = styled.div`
  display: flex;
  padding: 1rem 1rem 0rem;
  @media (max-width: 991px) {
    text-align: justify;
  }
`
const StyledCol = styled(Col)`
  display: flex;
`
const StyledImageWide = styled(Img)`
  display: flex;
  width: 100%;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
  @media (max-width: 991px) {
    width: 100%;
  }
`
const StyledImg = styled(Img)`
  display: flex;
  width: 20rem;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
  @media (max-width: 991px) {
    width: 100%;
  }
`

const About = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <StyledContainer className="rounded">
        <h2 className="text-center pt-3">About Me</h2>
        <Row className="mt-3 mb-3 text-left">
          <StyledCol xs={12} md={12} lg={{ span: 6, offset: 1 }}>
            <StyledTextCardLeft>
              <p>
                I started to work as a certificate Pilates instructor for mat
                and apparatus on 2009. <br />
                <br />
                My journey as an instructor started in several fitness and
                pilates studios in Tel-Aviv, Israel.
                <br />
                <br /> I was also working daily with disabled and amputees in a
                soldier's rehabilitation center for 3 years. <br />
                <br />
                Since 2016 I live in Berlin and teaches in several studios in
                the city – <br />
                Prenzlauer Berg | Charlottenburg | Weißensee | Karlshorst |
                Mitte{" "}
              </p>
            </StyledTextCardLeft>
          </StyledCol>
          <Col xs={12} md={12} lg={4} className="justify-content-center d-flex">
            <StyledImg
              fluid={data.backTeaserCadillac.childImageSharp.fluid}
              alt={data.backTeaserCadillac.name}
              className="rounded"
            />
          </Col>
        </Row>

        <Row className="mt-3 mb-3 text-left">
          <Col
            xs={{ order: "last", span: 12 }}
            md={{ order: "last", span: 12 }}
            lg={{ order: "first", span: 4, offset: 1 }}
            className="justify-content-center d-flex"
          >
            <StyledImg
              fluid={data.cadillacLegsHang.childImageSharp.fluid}
              alt={data.cadillacLegsHang.name}
              className="rounded"
            />
          </Col>
          <StyledCol
            xs={{ order: "first", span: 12 }}
            md={{ order: "first", span: 12 }}
            lg={{ order: "last", span: 6 }}
          >
            <StyledTextCardRight>
              <p className="pt-4"></p>
              <p>
                I am an athlete and a dancer from an early age. Dancing has
                always fostered the strong bond between my body and mind. <br />
                During training I've been exposed to Pilates as a method for
                body maintaining, recovery and improvement. I always liked
                working with people and after I complete a degree in psychology,
                I immediately started the studies for teaching Pilates.
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

        <Row className="pb-3 text-justify">
          <StyledCol
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            lg={{ span: 10, offset: 1 }}
          >
            <StyledTextCardLeft>
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
        </Row>
        <Row className="p-3">
          <StyledCol xs={12} md={12} lg={{ span: 10, offset: 1 }}>
            <StyledImageWide
              fluid={data.reformerLegsUp.childImageSharp.fluid}
              alt={data.reformerLegsUp.name}
              className="rounded"
            />
          </StyledCol>
        </Row>
      </StyledContainer>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    reformerLegsUp: file(relativePath: { eq: "reformer-legs-up.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    cadillacLegsHang: file(relativePath: { eq: "cadillac-legs-hang.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    backTeaserCadillac: file(relativePath: { eq: "back-teaser-cadillac.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    oryanBack: file(relativePath: { eq: "oryan-reformer-back.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    wallClass: file(relativePath: { eq: "wall-class-stretch.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
