import React from "react"
import Cards from "../components/Cards"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/Seo"

const Classes = props => {
  return (
    <Layout>
      <SEO />
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
