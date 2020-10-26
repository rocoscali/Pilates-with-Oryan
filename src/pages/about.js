import React from "react"
import Container from "react-bootstrap/Container"
import AboutImage from "../assets/img/c1.jpg"
import Image from "react-bootstrap/Image"
import Layout from "../components/layout"

function About() {
  return (
    <Layout>
      <Container>
        <div className="pt-4 text-left">
          <p>
            <span className="first-font h3">Oryan</span> started to work as a
            certificate Pilates instructor for mat and apparatus on 2009.
          </p>
          <Image
            className="center shadow"
            rounded
            src={AboutImage}
            width="100%"
            alt="oryan-photo"
          />
          <p className="pt-4">
            Her journey as an instructor started in Tel-Aviv. since 2016 she is
            located in Berlin and teaches in several studios in the city –
            Prenzlauer Berg | Charlottenburg | Weißensee | Karlshorst{" "}
          </p>
          <p>
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
