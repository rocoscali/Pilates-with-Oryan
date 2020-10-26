import React from "react"
import Container from "react-bootstrap/Container"
import Layout from "./layout"
import Video from "./video-comp"

function Videos(props) {
  return (
    <Layout>
      <Container>
        <div className="text-center pb-3 pt-4">
          <h2>Try One Of My Videos</h2>
        </div>
        <div className="row">
          <div className="col-md-6 p-2">
            <Video
              title="video1"
              videoSrc="https://www.youtube.com/embed/aYB04uI51nE"
            />
          </div>
          <div className="col-md-6 p-2">
            <Video
              title="video2"
              videoSrc="https://www.youtube.com/embed/hFxgiIBJWiU"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 p-2">
            <Video
              title="video3"
              videoSrc="https://www.youtube.com/embed/odEIHCRMpaQ"
            />
          </div>
          <div className="col-md-6 p-2">
            <Video
              title="video4"
              videoSrc="https://www.youtube.com/embed/c19pJee-oWg"
            />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-6 p-2">
            <Video
              title="video5"
              videoSrc="https://www.youtube.com/embed/A2JNzqcMaRQ"
            />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Videos
