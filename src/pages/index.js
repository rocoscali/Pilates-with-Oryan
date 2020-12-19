import React from "react"
import Layout from "../components/Layout"
import Home from "../components/Home"
import { graphql } from "gatsby"
import SEO from "../components/Seo"

const Homepage = props => {
  return (
    <Layout>
      <SEO title="Pilates Classes In Berlin" />
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
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    josephSidePlank: file(relativePath: { eq: "joseph-side-plank.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    reformerLegsLift: file(relativePath: { eq: "reformer-legs-lift.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    oryanTeaser: file(relativePath: { eq: "oryan-back-lay.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
