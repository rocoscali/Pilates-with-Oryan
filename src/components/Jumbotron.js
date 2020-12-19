import React from "react"
import styled from "styled-components"
import Quotes from "./Quotes"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Jumbo = styled(BackgroundImage)`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #dcf8e1;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #ccc;
  height: 25rem;
  position: relative;
  z-index: -2;
  margin-bottom: 0px;
`

const Overlay = styled.div`
  background-color: #000;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`

const Jumbotron = () => {
  const data = useStaticQuery(graphql`
    query {
      jumboImage: file(relativePath: { eq: "oryan-cadillac-hang.jpg" }) {
        name
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      jumboImageMobile: file(
        relativePath: { eq: "oryan-cadillac-hang-m.jpg" }
      ) {
        name
        childImageSharp {
          fluid(maxWidth: 990, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const sources = [
    data.jumboImage.childImageSharp.fluid,
    {
      ...data.jumboImageMobile.childImageSharp.fluid,
      media: `(max-width: 576px)`,
    },
  ]
  return (
    <Jumbo fluid={sources} fadeIn alt={data.jumboImage.name}>
      <Overlay />
      <Quotes />
    </Jumbo>
  )
}

export default Jumbotron
