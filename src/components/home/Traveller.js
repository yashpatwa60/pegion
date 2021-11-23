import React from "react";
import { Row, Col } from "react-bootstrap";
import sec3 from "../../assets/images/sec3.svg";

const Traveller = () => {
  return (
    <div>
      Traveller
      <Row className="mt-3">
        <Col lg={6} md={12} sm={12} className="sec3-create-element">
          <Row>
            <Col md={6} className="p-3 ">
              <div>
                <div className="create-element">
                  <span className="">1.</span>
                  <h2 className="pt-3">Create Your Profile</h2>
                </div>
                <h6 className="pe-5 ps-4">
                  Verify Your Identity to earn a verification batch for quick
                  response
                </h6>
              </div>
            </Col>
            <Col md={6} className="p-3 ">
              <div>
                <div className="create-element">
                  <span className="">2.</span>
                  <h2 className="pt-3">
                    Tell us about the item you are planning to send
                  </h2>
                </div>
                <h6 className="pe-5 ps-4">
                  you can send any item from around the world.
                </h6>
              </div>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col md={6} className="p-3">
              <div>
                <div className="create-element">
                  <span className="">3.</span>
                  <h2 className="pt-3">Wait for Connections</h2>
                </div>
                <h6 className="pe-5 ps-4">
                  Start connecting with the commuters
                </h6>
              </div>
            </Col>
            <Col md={6} className="p-3">
              <div>
                <div className="create-element">
                  <span className="">4.</span>
                  <h2 className="pt-3">Process your order </h2>
                </div>
                <h6 className="pe-5 ps-4">
                  Proceed to secure payment and agreement for securing your
                  product.
                </h6>
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          lg={6}
          md={12}
          sm={12}
          className="justify-content-center align-items-center"
        >
          <div className="ms-5 p-4 mt-1 image-container ">
            <img className="img-fluid new-image" src={sec3} alt="sec" />
            <button className="btn btn-primary image-btn ">
              Place your Order
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Traveller;
