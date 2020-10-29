import React from "react"
import Cards from "../components/cards"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import { graphql } from "gatsby"

function Classes(props) {
  return (
    <Layout>
      <Container>
        <Cards data={props.data} />
      </Container>
    </Layout>
  )
}

export default Classes

export const query = graphql`
  query {
    reformer: file(relativePath: { eq: "oryan-on-reformer.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    cadillac: file(relativePath: { eq: "oryan-on-cadillac.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    chair: file(relativePath: { eq: "oryan-on-chair.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
