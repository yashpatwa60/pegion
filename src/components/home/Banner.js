import React from "react";
import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Container fluid align="center" className="section-2 p-5 mt-5">
        <Row className="sec2-title">
          <h2>Don’t worry, search product or traveller as per your need.</h2>
        </Row>
        <Row className="sec2-form mt-3">
          <Col>
            <FloatingLabel controlId="floatingSelect" label="Traveller">
              <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingPassword" label="From">
              <Form.Control type="text" placeholder="Type a destination" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingPassword" label="To">
              <Form.Control type="text" placeholder="Type a desetination" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingPassword" label="Date picker">
              <Form.Control type="text" placeholder="temporary" />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="sec2-button mt-4 p-2">
          <div align="center" className="col-md-12">
            <div className="btn btn-primary">Search</div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
