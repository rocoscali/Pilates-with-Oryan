import React from "react"

import NavigationBar from "./navbar"
import Footer from "./footer"
import Jumbotop from "./jumbotron.js"
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
