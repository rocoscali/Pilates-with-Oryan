import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"

const NotFound = () => {
  return (
    <Layout>
      <Container className="mt-5 text-center ">
        <h1>Oops!</h1>
        <h2>This page doesn't exist.</h2>
        <h4>
          Head back to <Link to="/">Pilates With Oryan</Link>{" "}
        </h4>
      </Container>
    </Layout>
  )
}

export default NotFound
