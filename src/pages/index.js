import React from "react"
import "../styles/index.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"
import Home from "../components/Home"
import { graphql } from "gatsby"
import SEO from "../components/Seo"

const Homepage = props => {
  return (
    <Layout>
      <SEO />
      <Home data={props.data} />
    </Layout>
  )
}

export default Homepage

export const query = graphql`
  query {
    monkeyHang: file(relativePath: { eq: "oryan-monkey-hang.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    josephSidePlank: file(relativePath: { eq: "joseph-side-plank.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    reformerLegsLift: file(relativePath: { eq: "reformer-legs-lift.jpg" }) {
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
  }
`
