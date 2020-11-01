import React from "react"
import "../styles/index.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Home from "../components/home"
import { graphql } from "gatsby"

const Homepage = props => {
  return (
    <Layout>
      <Home data={props.data} />
    </Layout>
  )
}

export default Homepage

export const query = graphql`
  query {
    monkey: file(relativePath: { eq: "monkey-hang.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    josephPhoto1: file(relativePath: { eq: "joseph-classic.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
