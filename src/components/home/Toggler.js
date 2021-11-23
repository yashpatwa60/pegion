import React, { useState } from 'react'
import {
  Container,
  Row,
} from "react-bootstrap";
import Receiver from './Receiver';
import Traveller from './Traveller';

const Toggler = () => {
  const [ toggle, setToggle ] = useState("is_receiver")

    const is_Receiver = () => {
        setToggle("is_receiver");
    }
    const is_Travelers = () => {
        setToggle("is_Travelers");
    }

    return (
      <div>
        <Container className="section-3 p-5">
          <Row align="center">
            <h1>How Pegion works ?</h1>
            <hr />
            <div className="d-flex justify-content-center">
              <div href="home" alt="img1">
                <h6 onClick={is_Receiver}>For Receiver</h6>
              </div>
              <span className="px-3">|</span>
              <div href="home" alt="img2">
                <h6 onClick={is_Travelers}>For Travelers</h6>
              </div>
            </div>
            <h6>
              Simply add your product, Verify your account and Publish it.
            </h6>
          </Row>

          { toggle==="is_receiver" ? 
            <Receiver/>
          :
           <Traveller/>
          }
          
        </Container>
      </div>
    );
}

export default Toggler
