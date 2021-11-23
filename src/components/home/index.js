import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import "../../assets/css/main.css";
import { city1, city2, city3, city4, city5 } from "../../assets/images/cities";
import { arrow, msg, bell } from "../../assets/images/icons";

import Carousel from "./Carousel";
import Toggler from "./Toggler";
import Footer from "./Footer";
import Banner from "./Banner";

const Main = () => {
  return (
    <div class="main">
      <div className="main-cover">
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Container>
            <Navbar.Brand className="style-nav text-white">
              <b>Pegion</b>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto my-2">
                <Container>
                  <Row>
                    <Col>
                      <img src={bell} alt="bell" />
                    </Col>
                    <Col>
                      <img src={msg} alt="bell" />
                    </Col>
                    <Col>
                      <div className="nav-style-text">
                        <h5 className="text-white pe-2 ">ENG</h5>
                        <img className="p-2 pb-3" src={arrow} alt="" />
                      </div>
                    </Col>
                    <Col></Col>
                  </Row>
                </Container>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="cover-overlay p-5">
          <Row>
            <Col md={6} className="mt-5 p-4">
              <h3 className="travel-head-1">Travel and earn</h3>
              <h2 className="travel-head-2">
                Pick your Order across <br /> world at low price
              </h2>
              <h6 className="travel-head-3">
                We believe this small step could change the way <br />
                we communicate with the world today.
              </h6>
            </Col>
            <Col
              md={6}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div class="btn btn-primary mt-4 px-5">Publish a commute</div>
              <div class="btn btn-primary ms-2 mt-2 px-5">Publish an Order</div>
            </Col>
          </Row>
        </Container>
        <Container align="center" className="city-container mt-5">
          <Row className="mt-5 p-4">
            <h4>Orders in Cities</h4>
          </Row>

          <Row class="justify-content-center">
            <Col md={3}>
              <div>
                <img src={city1} alt="city1"></img>
                <h2>200+</h2>
              </div>
            </Col>
            <Col md={2}>
              <div>
                <img src={city2} alt="city2"></img>
                <h2>200+</h2>
              </div>
            </Col>
            <Col md={2}>
              <div>
                <img src={city3} alt="city3"></img>
                <h2>200+</h2>
              </div>
            </Col>
            <Col md={2}>
              <div>
                <img src={city4} alt="city4"></img>
                <h2>200+</h2>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <img src={city5} alt="city5"></img>
                <h2>200+</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Carousel />
      <Banner />
      <Toggler />
      <Footer />
    </div>
  );
};

export default Main;
