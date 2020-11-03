import React from "react"
import NavigationBar from "./NavigationBar"
import Footer from "./Footer"
import Jumbotop from "./Jumbotron.js"

const Layout = props => {
  return (
    <div>
      <NavigationBar />
      <Jumbotop />
      <div className="separator"></div>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
