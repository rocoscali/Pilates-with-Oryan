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
const StyledTextCard = styled.div`
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
            <StyledTextCard>
              <p>
                I am an athlete and a dancer from an early age.
                <br /> Dancing has always fostered a strong bond between my body
                and mind. <br />
                During training, I've been exposed to Pilates as a method for
                body maintenance, recovery, and improvement.
                <br /> I always liked working with people so after I completed
                my B. A in psychology, I immediately started my Pilates
                certification training. <br />I work as a certificate Pilates
                instructor for mat and apparatus since 2009.
                <br /> Over the years I have attended courses on back pain,
                neuromuscular problem, shoulder injuries, trigger point, fascia
                Release Techniques, and much more.
              </p>
            </StyledTextCard>
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
            <StyledTextCard>
              <p className="pt-4"></p>
              <p>
                During the years 2013-2016, I was working daily with disabled
                and amputee in a soldier's rehabilitation center "Bet Halohem"
                in Tel Aviv.
                <br /> In 2016 I moved to Berlin where I am continuing my
                passion for teaching classical and contemporary pilates.
                <br /> In 2019 I completed Anatomy Trains© “in Structure and
                Function” course By Tom Mayers. <br /> Pilates is suitable for
                any purpose – fitness, better posture, athlete’s performance
                improvement, injury rehabilitation and simply to keep on great
                feeling with a balanced body. <br />I am offering Private, Duo
                or Group classes with mat or apparatus. The classes are suitable
                for all levels and conditions, focusing on the participant’s
                personal needs.
                <br /> Every-body is individual and as a trainer, my goal is to
                see and feel the right alignment for each one that comes to the
                studio.
              </p>{" "}
            </StyledTextCard>
          </StyledCol>
        </Row>
        <Row className=" text-justify">
          <StyledCol
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            lg={{ span: 10, offset: 1 }}
          >
            <StyledTextCard>
              <p>
                In my classes, I emphasize accuracy and correct movement along
                with humour and a fun atmosphere. Every body is individual, and
                as a trainer, my goal is to see and feel the right alignment for
                each person that comes to train. My classes are in English,
                German, and Hebrew. You are welcome to send your questions and
                wishes through the contact form.
              </p>
            </StyledTextCard>
          </StyledCol>
        </Row>
        <Row className="p-3">
          <StyledCol xs={12} md={12} lg={{ span: 10, offset: 1 }}>
            <StyledImageWide
              fluid={data.reformerLegsUp.childImageSharp.fluid}
              alt={data.reformerLegsUp.name}
              className="rounded mb-3"
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
