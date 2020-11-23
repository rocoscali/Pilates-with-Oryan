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
  margin: 1rem auto 2rem;
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
    padding: 1rem 0rem 0rem;
  }
`
const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`
const StyledColWide = styled(Col)`
  display: flex;
  padding: 0rem 1rem 0rem;
  @media (max-width: 991px) {
    padding: 0rem;
  }
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
      <SEO
        title="About"
        description="I work in several studios in Berlin, training classic and contemporary pilates on apparatus classes and mat groups. 
        The lessons are suitable for all levels and conditions, focusing on the participant's personal needs.
Every-body is individual, and as a trainer, my goal is to see and feel the right alignment for each one that comes to the studio."
      />
      <div>
        <h2 className="text-center pt-4 pb-2">About Me</h2>
      </div>
      <StyledContainer className="rounded">
        <Row className=" mb-3 pt-3 text-left">
          <StyledCol xs={12} md={12} lg={{ span: 6, offset: 1 }}>
            <StyledTextCard>
              <p>
                I am an athlete and a dancer from an early age.
                <br /> Dancing has always fostered a strong bond between my body
                and mind. <br />
                During training, I've been exposed to Pilates as a tool for body
                maintenance, recovery, and improvement.
                <br /> I always liked working with people, and after completing
                my BA in psychology, I immediately started my Pilates
                certification training. <br />I work as a certificate Pilates
                instructor on mat and apparatus since 2009.
                <br /> Over the years, I have attended courses on back pain,
                neuromuscular problem, shoulder injuries, trigger point, fascia
                Release Techniques, and much more.
              </p>
            </StyledTextCard>
          </StyledCol>
          <StyledCol xs={12} md={12} lg={4} className="p-3">
            <StyledImg
              fluid={data.backTeaserCadillac.childImageSharp.fluid}
              alt={data.backTeaserCadillac.name}
              className="rounded"
            />
          </StyledCol>
        </Row>

        <Row className="mt-3 mb-3 text-left">
          <StyledCol
            xs={{ order: "last", span: 12 }}
            md={{ order: "last", span: 12 }}
            lg={{ order: "first", span: 4, offset: 1 }}
          >
            <StyledImg
              fluid={data.cadillacLegsHang.childImageSharp.fluid}
              alt={data.cadillacLegsHang.name}
              className="rounded"
            />
          </StyledCol>
          <StyledCol
            xs={{ order: "first", span: 12 }}
            md={{ order: "first", span: 12 }}
            lg={{ order: "last", span: 6 }}
          >
            <StyledTextCard>
              <p className="pt-4"></p>
              <p>
                During the years 2013-2016, I worked daily with disabled and
                amputees in a soldier's rehabilitation center "Bet Halohem" in
                Tel Aviv.
                <br /> In 2016 I moved to Berlin, where I continue my passion
                for teaching classical and contemporary pilates.
                <br /> In 2019 I completed the Anatomy Trains© "in Structure and
                Function" course By Tom Mayers. <br />
                <br />
                These days I work in several studios in Berlin, training classic
                and contemporary pilates on apparatus classes and mat groups.
                The lessons are suitable for all levels and conditions, focusing
                on the participant's personal needs.
                <br /> Every-body is individual, and as a trainer, my goal is to
                see and feel the right alignment for each one that comes to the
                studio.
              </p>
            </StyledTextCard>
          </StyledCol>
        </Row>
        <Row className="text-justify">
          <StyledCol
            xs={{ span: 12, offset: 0 }}
            md={{ span: 12, offset: 0 }}
            lg={{ span: 10, offset: 1 }}
          >
            <StyledTextCard>
              <p>
                In my classes, I emphasize accuracy and correct movement, along
                with humor and a fun atmosphere. My classes are in English,
                German, and Hebrew. You are welcome to send your questions and
                wishes through the contact form.
              </p>
            </StyledTextCard>
          </StyledCol>
        </Row>
        <Row className="p-3">
          <StyledColWide xs={12} md={12} lg={{ span: 10, offset: 1 }}>
            <StyledImageWide
              fluid={data.reformerLegsUp.childImageSharp.fluid}
              alt={data.reformerLegsUp.name}
              className="rounded mb-3"
            />
          </StyledColWide>
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
        fluid(maxWidth: 900, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    cadillacLegsHang: file(relativePath: { eq: "cadillac-legs-hang.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 640, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    backTeaserCadillac: file(relativePath: { eq: "back-teaser-cadillac.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 640, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
