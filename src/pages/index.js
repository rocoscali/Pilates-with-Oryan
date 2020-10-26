import React from "react"
import "../styles/index.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Home from "../components/home"

export default function Homepage() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
