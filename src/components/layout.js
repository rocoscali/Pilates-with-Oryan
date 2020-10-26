import React from "react"
import Header from "./header"
import Footer from "./footer"
import Jumbotop from "./jumbotron.js"
const Layout = props => {
  return (
    <div>
      <Header />
      <Jumbotop />
      <div className="separator"></div>
      {props.children}
    </div>
  )
}

export default Layout
