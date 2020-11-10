import React from "react"
import NavigationBar from "./NavigationBar"
import Footer from "./Footer"
import Jumbotron from "./Jumbotron.js"

const Layout = props => {
  return (
    <div>
      <NavigationBar />
      <Jumbotron />
      <div className="separator"></div>
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
