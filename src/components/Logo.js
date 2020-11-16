import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyledLogo = styled(Img)`
  width: 60px;
  margin-right: 5px;
  @media (max-width: 425px) {
    width: 50px;
    margin-right: 0;
  }
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logonew.png" }) {
        name
        childImageSharp {
          fluid(maxWidth: 200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <StyledLogo fluid={data.logo.childImageSharp.fluid} alt={data.logo.name} />
  )
}
export default Logo
