import React from "react"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import VideoComp from "../components/VideoComp"
import styled from "styled-components"
import SEO from "../components/Seo"

const H1 = styled.h1`
  font-size: 2rem;
`

const Videos = props => {
  return (
    <Layout>
      <SEO
        title="Pilates Videos"
        description="Especially for Covid19 days, I recorded pilates video classes for you to
          practice at home. The videos are free and available at any time
          you need it. Practice Pilates at home and stay fit."
      />
      <Container>
        <div className="text-center pb-2 pt-4">
          <H1>Try One Of My Videos</H1>
        </div>
        <div className="row">
          <div className="col-md-6 p-2">
            <VideoComp
              title="30 Min Pilates Fun Fusion Workout"
              videoSrc="https://www.youtube.com/embed/aYB04uI51nE"
            />
          </div>
          <div className="col-md-6 p-2">
            <VideoComp
              title="30 Min Pilates Reformer Inspired On The Mat"
              videoSrc="https://www.youtube.com/embed/hFxgiIBJWiU"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 p-2">
            <VideoComp
              title="30 Min Pilates At Home With A Towel"
              videoSrc="https://www.youtube.com/embed/odEIHCRMpaQ"
            />
          </div>
          <div className="col-md-6 p-2">
            <VideoComp
              title="Classical Pilates Mat Class Level 2 | Intermediate"
              videoSrc="https://www.youtube.com/embed/c19pJee-oWg"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 p-2">
            <VideoComp
              title="40 Min Yogalates Full Body Workout Flow"
              videoSrc="https://www.youtube.com/embed/o9T6k2nNnGg"
            />
          </div>
          <div className="col-md-6 p-2">
            <VideoComp
              title="Pilates Abs Special Workout For All Levels"
              videoSrc="https://www.youtube.com/embed/A2JNzqcMaRQ"
            />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Videos
