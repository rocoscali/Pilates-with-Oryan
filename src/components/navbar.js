import React, { useState, useEffect } from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import Link from "gatsby-Link"
import Logo from "./logo"
import styled from "styled-components"
import texture from "../assets/designs/redox-01.png"

const StyledNavbar = styled.div`
  .navbar {
    background: transparent;
    transition: background-color 0.2s linear;
    &:hover {
      background: #8db596;
      background-image: url(${texture}),
        linear-gradient(
          to right,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.3)
        );
    }
  }
  .navbar.active {
    background: #8db596;
    background-image: url(${texture}),
      linear-gradient(
        to right,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.3)
      );
  }
  .navbar-brand {
    font-family: "Josefin Sans", sans-serif;
    color: #fcf8f3;
    font-size: 1.4rem;
    padding-top: 8px;
    margin: 0px;
    justify-content: left;
    text-justify: left;
    @media (max-width: 375px) {
      font-size: 1rem;
    }
  }

  .navbar-toggler {
    border-color: rgba(255, 255, 255, 0.5);
    background: transparent !important;
  }

  .navbar-nav {
    .nav-link {
      font-family: "Josefin Sans", sans-serif;
      font-size: 1.2rem;
      color: #fcf8f3;
      &:hover {
        color: #000;
      }
    }
  }
`

function NavigationBar() {
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
    return () => {
      window.removeEventListener("scroll", changeBackground)
    }
  }, [])

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  return (
    <StyledNavbar>
      <Navbar
        className={navbar ? "navbar active" : "navbar"}
        expand="lg"
        fixed="top"
        variant="dark"
      >
        <Container>
          <Logo />

          <Link className="navbar-brand" to="/">
            PILATES WITH ORYAN
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-nav ml-auto">
              <Nav.Item>
                <Link className="nav-link" to="/about">
                  About Me
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className=" nav-link" to="/classes">
                  Classes
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/videos">
                  Videos
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link" to="/contact">
                  Contact Me
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledNavbar>
  )
}

export default NavigationBar
