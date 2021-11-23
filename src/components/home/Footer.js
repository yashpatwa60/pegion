import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { email, facebook, instagram, linkedin, location, phone, twitter } from "../../assets/images/icons";

const Footer = () => {
    return (
      <div className="footer">
        <Container className="text-white p-5 ">
          <Row className="my-5">
            <Col md={4}>
              <h2>About Company</h2>
              <div className="mt-4">
                <a href="home" alt="yash">
                  <img className="ms-2" src={linkedin} alt="" />
                </a>
                <a href="about" alt="yash">
                  <img className="ms-2" src={facebook} alt="" />
                </a>
                <a href="home" alt="yash">
                  <img className="ms-2" src={instagram} alt="" />
                </a>
                <a href="home" alt="yash">
                  <img className="ms-2" src={twitter} alt="" />
                </a>
              </div>

              <div className="footer-1 mt-3">
                <a href="mailto : Hello@gmail.com">
                  <img className="ms-2" src={email} alt="" />
                  <h6 className="mt-2 ms-3">yashpatwa1602@gmail.com</h6>
                </a>
                <a href="mailto : Hello@gmail.com">
                  <img className="ms-2" src={phone} alt="" />
                  <h6 className="mt-2 ms-3">(406) 555-0120</h6>
                </a>
                <a href="mailto : Hello@gmail.com">
                  <img className="ms-2" src={location} alt="" />
                  <h6 className="mt-2 ms-3">2972 Westheimer Rd, Illinois </h6>
                </a>
              </div>
            </Col>
            <Col md={4}>
              <h2>Popular Location </h2>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text <br/> of the printing and
                  typesetting industry.<br/>Lorem Ipsum is simply dummy text of the<br/>
                  printing and typesetting industry.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <h2>Privacy Policy</h2>
              <h6>Privacy Policy</h6>
              <h6>Privacy Policy</h6>
              <h6>Privacy Policy</h6>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Footer
