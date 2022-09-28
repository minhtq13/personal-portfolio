/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";

import gitHubIcon from "../assets/img/GitHub-Mark.png";
import FBIcon from "../assets/img/nav-icon2.svg";
import IGIcon from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
// import CVPersonal from "../assets/CV/CVTaQuangMinh.pdf";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#aboutme"
                className={
                  activeLink === "aboutme"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("aboutme")}
              >
                About me
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Project
              </Nav.Link>
              <Nav.Link
                href="/"
                className={
                  activeLink === "myCV" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("myCV")}
              >
                <a
                  target="_blank"
                  href="https://minhtq13.github.io/personal-portfolio/CV/CVTaQuangMinh.pdf"
                  class="cvbtn"
                  //   download
                >
                  Download CV
                </a>
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" href="https://github.com/minhtq13">
                  <img src={gitHubIcon} alt="" />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/quanggminhhta/"
                >
                  <img src={FBIcon} alt="" />
                </a>
                <a target="_blank" href="https://www.instagram.com/qu4ngm1nhh/">
                  <img src={IGIcon} alt="" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
