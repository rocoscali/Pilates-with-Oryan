import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const StyledImg = styled(Img)`
  width: 25rem;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
  z-index: 5;
`
const Image = styled(Img)`
  width: 80%;
  box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.15);
  @media (max-width: 991px) {
    width: 100%;
  }
`

const method = ({ data }) => {
  return (
    <Layout>
      <Container>
        <h2 className="text-center mt-4">The Method By Joseph H. Pilates</h2>
        <Row className="mt-4 mb-4">
          <Col xs={12} md={12} lg={8}>
            <p className="text-justify">
              Joseph H. Pilates was born in 1883 in Mönchengladbach, Germany. He
              was a small and sickly child who suffered from asthma, rickets and
              rheumatic fever. His father was a prizewinning gymnast and his
              mother was a naturopath.A family physician gave him a discarded
              anatomy book, Joseph stated{" "}
              <em>
                “I learned every page, every part of the body. I moved each part
                as I memorized it. As a child, I was laying in the woods for
                hours, hiding and watching the animals move, how the mothers
                taught the young.”
              </em>{" "}
              <br /> He studied both Eastern and Western forms of exercise
              including yoga, Zen, and ancient Greek and Roman regimens. By the
              time he was 14 he had worked so hard and developed his body to the
              point that he was modelling for anatomy charts. Growing up in
              Germany, he achieved some success as a boxer and gymnast – in
              addition to be a skilled skier and diver. He was married twice in
              Germany and had one child with his first wife Maria, who died in
              1913. his second wife Elfrieda died in 1931.
            </p>
          </Col>
          <Col className="justify-content-center d-flex" xs={12} md={12} lg={4}>
            <StyledImg
              fluid={data.joseph52.childImageSharp.fluid}
              alt={data.joseph52.name}
              className="rounded"
            />
          </Col>
        </Row>
        <div className="pt-3">
          <p className="text-justify">
            In 1914, during WWI, he was interned, along with other German
            citizens in Lancaster, England. There he taught wrestling and
            self-defense, boasting that his students would emerge stronger than
            before their internment. In this place he began devising his system
            of original exercises that later became “Contrology.” He was
            transferred to another internment camp on the Isle of Man where he
            became kind of a nurse and worked with many internees who suffered
            from wartime diseases and incarceration.{" "}
          </p>{" "}
        </div>{" "}
        <Row className="mt-4 mb-4">
          <Col xs={12} md={12} lg={8}>
            <p className="text-justify">
              He then began devising equipment to rehabilitate them, he took the
              springs from the beds and formed exercise apparatus for the
              bedridden. In 1918, a terrible epidemic of influenza swept the
              world, killing millions of people, tens of thousands in England.
              None of Joe’s followers succumbed even though the camps were the
              hardest hit. <br /> After the war, Joe returned to Germany and
              began training the Hamburg Military Police in self-defense and
              physical training as well as taking on personal clients.
              <br />
              <em>
                {" "}
                “I invented all these machines. when I got back in Germany, was
                there until 1925, rehabilitating rheumatic patients. I thought,
                why to use my strength, so I made a machine to do it for me.
                Look, you see it resists your movements in just the right way so
                those inner muscles must work against it. That way you can
                concentrate on movement. You must always do it slowly and
                smoothly. Then your whole body is in it.”{" "}
              </em>
              <br />
              It was at this time that he met Rudolf von Laban, a famous
              movement analyst, who is said to have incorporated some of Joe’s
              theories and exercises into his own work. Mary Wigman, a famous
              German dancer and choreographer was a student of Joe’s and used
              his exercises in her dance class warm-up.
            </p>
          </Col>
          <Col className="justify-content-center d-flex" xs={12} md={12} lg={4}>
            <StyledImg
              fluid={data.josephBalance.childImageSharp.fluid}
              alt={data.josephBalance.name}
              className="rounded"
            />
          </Col>
        </Row>
        <div className="pt-3">
          <p className="text-justify">
            In 1925 he was invited to train the New German Army but because he
            was not happy with the political direction of Germany he decided to
            leave. On the urging of boxing expert, Nat Fleischer, and with the
            aid of Max Schmelling he decided to come to the U.S. He traveled
            twice to America, and on the way he met his future wife, Clara. She
            was a kindergarten teacher who was suffering from arthritic pain and
            Joe worked with her on the boat to heal her. <br />
            Upon arriving, they settled in New York City and opened a gym at 939
            8th Ave, in the same building as several dance studios and rehearsal
            space. It was this proximity that made “Contrology” such an
            intrinsic part of many dancers’ training and rehab work and many
            were sent to Joe to be “fixed.” George Balanchine, the famous
            choreographer, studied with Joe and sent many of his dancers to
            Pilates for strengthening and “balancing” as well as rehabilitation,
            as did another famous dancer/choreographer, Martha Graham.
          </p>{" "}
        </div>
        <Row className="mt-4 mb-4 justify-content-center d-flex">
          <Image
            fluid={data.josephBackBend.childImageSharp.fluid}
            alt={data.josephBalance.name}
            className="rounded"
          />
        </Row>
        <Row className="mt-5 mb-4">
          <Col xs={12} md={12} lg={8}>
            <p className="text-justify">
              {" "}
              From 1939 to 1951 Joe and Clara went every summer to Jacob’s
              Pillow, a well-known dance camp in the Berkshire Mountains. He was
              a friend and teacher to such renowned dancer/choreographers as Ted
              Shawn, Ruth St. Denis, Martha Graham and Jerome Robbins and many
              required their dancers to go to Joe. Hanya Holm even incorporated
              Joe’s exercises into her students’ lessons. However, Joe counted
              many socialites as well as plumbers and doctors, to list a few, as
              his clients as well. Joe called himself “Director of Physical
              Culture.” <br />
              Joe felt his work was “50 years ahead of his time.” He believed in
              “natural movements” with the emphasis on doing and being. He has
              stated,{" "}
              <em>
                {" "}
                “Everything should be smooth, like a cat. The exercises are done
                lying, sitting, kneeling, etc., to avoid excess strain on the
                heart and lungs.”{" "}
              </em>
              <br />
              Although Joseph Pilates was a health guru, he believed that
              fitness also supports reaching your life’s goals. He was renowned
              for liking cigars, whisky and women and was to be seen running on
              Manhattan streets in the dead of winter in a bikini! He registered
              many patents with the US Patent and Trademark Office beginning in
              1930, including a catapult, the V-Bed, the Wunda Chair and several
              Reformers. Joe and Clara had many famous dancers, musicians,
              socialites and actors as clients, but also as well as regular
              working-class people.
            </p>
          </Col>
          <Col className="justify-content-center d-flex" xs={12} md={12} lg={4}>
            <StyledImg
              fluid={data.josephReformer.childImageSharp.fluid}
              alt={data.josephBalance.name}
              className="rounded"
            />
          </Col>
        </Row>{" "}
        <div className="pt-3">
          <p className="text-justify">
            {" "}
            In January 1966 there was a fire in their building. Joe returned to
            his studio to try and save anything possible and fell through burnt
            out floorboards, hanging on by his hands from a beam for quite some
            time until rescued by firefighters. It is assumed that this incident
            directly led to his death in October 1967, at the age of 84. Clara,
            regarded by many as the more superb teacher, continued to teach and
            run the studio until her death 10 years. later, in 1977, Romana
            Kryzanowska took over the business and has dedicated her life to
            teaching Joe’s work as he devised it.
          </p>{" "}
        </div>
        <Row className="mt-4 mb-4 justify-content-center d-flex">
          <Image
            fluid={data.josephClara.childImageSharp.fluid}
            alt={data.josephBalance.name}
            className="rounded mb-4"
          />
        </Row>
      </Container>
    </Layout>
  )
}

export default method

export const query = graphql`
  query {
    joseph52: file(relativePath: { eq: "joseph-at-52.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    josephBalance: file(relativePath: { eq: "joseph-balance.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    josephBackBend: file(relativePath: { eq: "joseph-back-bend.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    josephReformer: file(relativePath: { eq: "joseph-reformer.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    josephClara: file(relativePath: { eq: "joseph_and_clara.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
