import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import iarLogo from "./../assets/iar.png";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

function NavScrollExample() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 89) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <div
        style={{
          borderBottom: "5px solid #f9ac1d",
          backgroundColor: "#f2f2f2",
          height: "40px",
          display: "flex",
          flexDirection: "row",
          position: "fixed",
          width: "100%",
          zIndex: "1",
        }}
      >
        <h1
          style={{
            marginLeft: "5vw",
            padding: "8px",
            fontSize: "13px",
            fontWeight: "100px",
            fontFamily: "sans-serif",
          }}
        >
          <Link to={"/"}>
            <HomeIcon />
          </Link>{" "}
          &nbsp; Welcome to Alumni relations IITPKD
        </h1>
        <div
          style={{
            marginLeft: "auto",
            marginRight: "5vh",
            display: "flex",
            flexDirection: "row",
            paddingTop: "3px",
          }}
        >
          <SocialIcon
            url="https://twitter.com"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://facebook.com"
            style={{ height: 30, width: 30, marginLeft: "10px" }}
          />
          <SocialIcon
            url="https://instagram.com"
            style={{ height: 30, width: 30, marginLeft: "10px" }}
          />
          <SocialIcon
            url="https://youtube.com"
            style={{ height: 30, width: 30, marginLeft: "10px" }}
          />
        </div>
      </div>
      <br />
      <div
        style={{ marginLeft: "15vh", marginRight: "15vh", paddingTop: "40px" }}
      >
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <img
              src={iarLogo}
              style={{
                height: "5rem",
                paddingRight: "20px",
                borderRight: "2px solid #f9ac1d",
              }}
            />
            <div style={{ paddingLeft: "10px", fontSize: "20px" }}>
              <h1>International Alumni</h1>
              <h1 style={{ paddingLeft: "40px" }}>Relations</h1>
            </div>
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex ms-auto">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 rounded-sm h-9"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="h-9 rounded-sm">
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <Navbar
          expand="lg"
          id="navbar"
          className={`bg-body-tertiary ${isSticky ? "sticky" : ""}`}
          data-bs-theme="dark"
          style={{ height: "36px", width: "100%" }}
        >
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ height: "40px" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              style={{
                backgroundColor: "#2b3035",
                fontSize: "13px",
                fontWeight: "600",
                paddingRight: "10px",
                width: "100%",
              }}
              className="me-auto"
            >
              <NavDropdown
                title="News"
                id="basic-nav-dropdown"
                style={{ borderRight: "1px solid white" }}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Events"
                id="basic-nav-dropdown"
                style={{ borderRight: "1px solid white" }}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Alumni Network"
                id="basic-nav-dropdown"
                style={{ borderRight: "1px solid white" }}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                to={"/about"}
                id="basic-nav-dropdown"
                style={{ borderRight: "1px solid white" }}
              >
                Know Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  #navbar.sticky {
    position: fixed;
    top: 40px;
    padding-left: 40px;
    left: 0;
    z-index: 1000;
    box-shadow: 0 4px 2px -2px gray;
  }

  #basic-nav-dropdown:hover {
    background: #f2f2f2;
    color: black;
  }
  .dropdown-menu {
    background: #f2f2f2;
    color: white;
    border-radius: 1px;
  }

  .dropdown-item {
    color: black;
  }

  .dropdown-item:hover,
  .dropdown-item:focus {
    background: #2b3035;
    color: #f2f2f2;
  }
`;

export default NavScrollExample;
