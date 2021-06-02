import React from "react"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"

const VideoComp = props => {
  return (
    <ResponsiveEmbed aspectRatio="16by9">
      <iframe
        title={props.title}
        className="embed-responsive-item"
        src={props.videoSrc}
        frameBorder="0"
        modestbranding="1"
        rel="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
    </ResponsiveEmbed>
  )
}

export default VideoComp
