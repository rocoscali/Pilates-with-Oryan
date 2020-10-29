import React from "react"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const styledTextCard = styled.div``

function About({ data }) {
  return (
    <Layout>
      <Container>
        <div className="pt-4 text-left">
          <p>
            I started to work as a certificate Pilates instructor for mat and
            apparatus on 2009. My journey as an instructor started in Tel-Aviv.
            Since 2016 I live in Berlin and teaches in several studios in the
            city – <br />
            Prenzlauer Berg | Charlottenburg | Weißensee | Karlshorst | Mitte{" "}
          </p>
          <Img
            fluid={data.testImage.childImageSharp.fluid}
            alt="oryan-photo"
            className="center shadow rounded"
          />
          <p className="pt-4">
            Offering Private, Duo or Group classes with mat or apparatus. The
            classes are suitable for all levels and conditions, focusing on the
            participant’s personal needs.
          </p>
          <p>
            I am an athlete and a dancer from an early age. Dancing has always
            fostered the strong bond between my body and mind. During training
            I've been exposed to Pilates as a method for body maintaining,
            recovery and improvement. I always liked working with people and
            after I complete a degree in psychology, I immediately started the
            studies for teaching Pilates.
          </p>
          <p>
            Pilates is suitable for any purpose – fitness, better posture,
            athlete’s performance improvement, injury rehabilitation and simply
            to keep on great feeling with a balanced body. I work as certificate
            Pilates instructor for mat and apparatus since 2009.{" "}
          </p>
          <p>
            On the years 2013-2016, I was also working daily with disabled and
            amputee in a soldier's rehabilitation center "Bet Halochem" in
            Tel-Aviv. On 2016 I moved to Berlin where I am continuing my way in
            several studios with group or private lessons. In my classes I
            emphasize accuracy and correct movement along with humor and fun
            atmosphere. My classes are in English, German and Hebrew.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    testImage: file(relativePath: { eq: "reformer-legs-up.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
