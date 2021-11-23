import React from 'react'
import { line, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, img1, img2, img3, img4 } from '../../assets/images/carousel'
import { Container } from "react-bootstrap";
import Carousel from 'react-elastic-carousel'
import Item from './Item'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]

const CarouselComponent = () => {

     return (
      <div>
        <Container fluid className="section-1 p-5 mt-5 mb-5">
          <div>
            <h3 className="mt-5 text-center sec1-head-1">
              Our Recently Completed Deliveries
            </h3>
            <h5 className="m-2 text-center sec1-head-2">
              These orders were recently delivered to the other side of the
              world. Safely, quickly and affordably.
            </h5>
          </div>
          <Carousel breakPoints={breakPoints} className="mt-4 p-5">
            <Item>
              <div className="carousel-element">
                <div class="carousel-head">
                  <img src={avatar1} alt="a1" />
                  <img src={line} alt="l1" />
                  <img src={avatar2} alt="a2" />
                </div>
                <div className="carousel-head-1">
                  <h6>Muscat</h6>
                  <h6>Delhi</h6>
                </div>
                <div>
                  <img src={img1} alt="c1" />
                </div>
              </div>
            </Item>
            <Item>
              <div className="carousel-element">
                <div class="carousel-head">
                  <img src={avatar3} alt="a1" />
                  <img src={line} alt="l1" />
                  <img src={avatar4} alt="a2" />
                </div>
                <div className="carousel-head-1">
                  <h6>Muscat</h6>
                  <h6>Delhi</h6>
                </div>
                <div>
                  <img src={img2} alt="c1" />
                </div>
              </div>
            </Item>
            <Item>
              <div className="carousel-element">
                <div class="carousel-head">
                  <img src={avatar5} alt="a1" />
                  <img src={line} alt="l1" />
                  <img src={avatar6} alt="a2" />
                </div>
                <div className="carousel-head-1">
                  <h6>Muscat</h6>
                  <h6>Delhi</h6>
                </div>
                <div>
                  <img src={img3} alt="c1" />
                </div>
              </div>
            </Item>
            <Item>
              <div className="carousel-element">
                <div class="carousel-head">
                  <img src={avatar7} alt="a1" />
                  <img src={line} alt="l1" />
                  <img src={avatar8} alt="a2" />
                </div>
                <div className="carousel-head-1">
                  <h6>Muscat</h6>
                  <h6>Delhi</h6>
                </div>
                <div>
                  <img src={img4} alt="c1" />
                </div>
              </div>
            </Item>
            <Item>
              <div className="carousel-element">
                <div class="carousel-head">
                  <img src={avatar7} alt="a1" />
                  <img src={line} alt="l1" />
                  <img src={avatar8} alt="a2" />
                </div>
                <div className="carousel-head-1">
                  <h6>Muscat</h6>
                  <h6>Delhi</h6>
                </div>
                <div>
                  <img src={img4} alt="c1" />
                </div>
              </div>
            </Item>
            <Item>
              <div className="carousel-element">
                <div class="carousel-head">
                  <img src={avatar7} alt="a1" />
                  <img src={line} alt="l1" />
                  <img src={avatar8} alt="a2" />
                </div>
                <div className="carousel-head-1">
                  <h6>Muscat</h6>
                  <h6>Delhi</h6>
                </div>
                <div>
                  <img src={img4} alt="c1" />
                </div>
              </div>
            </Item>
          </Carousel>
        </Container>
      </div>
    );
}

export default CarouselComponent
