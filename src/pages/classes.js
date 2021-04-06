import React from "react"
import Cards from "../components/Cards"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/Seo"

const H4 = styled.h4`
  font-family: "Josefin Sans", sans-serif;
`
const H1 = styled.h1`
  font-size: 2rem;
`

const HR = styled.hr`
  border: 3px solid #8db596;
  border-radius: 5px;
  width: 50%;
  margin-bottom: 2rem;
`

const Classes = props => {
  return (
    <Layout>
      <SEO
        title="Pilates Berlin Classes"
        description="In a one on one pilates session, you will get the opportunity to work on your individual needs, 
            using the reformer or cadillac to help you achieve your goals. The reformer is designed to use spring-resistance methodology to maximize core strength and 
            improve muscular imbalances. Many pilates exercises on the reformer incorporate mat pilates repertoire. The 'wall unit' or also called 'tower' is a compressed version 
            of the so-called 'Cadillac.' 
            Pilates Tower classes are an amazing way to practice the mat and to work with the springs. In Pilates prenatal classes, we will emphasize identifying pelvic floor muscles, breathing, 
            strengthening the lower abdomen, buttocks, and inner thighs. 
            In Pilates postnatal classes, we start to heal and build strong foundations in your 'new' post-baby body, 
            which will prevent issues like lower back pain and shoulder and neck tension."
      />
      <Container>
        <H1 className="text-center mt-4">Classes</H1>
        <H4 className="text-center mb-4">
          Breathing - Concentration - Centering - Control - Precision - Flow
        </H4>
        <HR />
        <Cards data={props.data} />
      </Container>
    </Layout>
  )
}

export default Classes

export const query = graphql`
  query {
    personalTrainingClass: file(
      relativePath: { eq: "personal-training-class.jpg" }
    ) {
      name
      childImageSharp {
        fluid(maxWidth: 680, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    reformerClass: file(relativePath: { eq: "reformer-class.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 680, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wallUnit: file(relativePath: { eq: "wallunit-class.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 680, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    prenatalClass: file(relativePath: { eq: "pre-natal-class.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 680, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
