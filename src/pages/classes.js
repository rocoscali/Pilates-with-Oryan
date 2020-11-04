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
const H5 = styled.h5``
const HR = styled.hr`
  border: 3px solid #8db596;
  border-radius: 5px;
  width: 50%;
  margin-bottom: 2rem;
`

const Classes = props => {
  return (
    <Layout>
      <SEO />
      <Container>
        <h2 className="text-center mt-4">Classes</h2>
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
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    reformerClass: file(relativePath: { eq: "reformer-class.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    wallUnit: file(relativePath: { eq: "wallunit-class.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
