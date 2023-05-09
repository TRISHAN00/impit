import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {hover} from "../../styles/globalStyleVars";
import Slick from "react-slick";
import {Img} from "../Img";

// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Integrity = ({data}) => {

    const subtitle = data?.subtitle;
    const slide = data?.slider;

    const sliderRef = useRef();
    const sliderItem = useRef();


    function RightArrow(props) {
        const {onClick} = props;
        return (
            <li className="go-right" onClick={onClick}>
                <svg id="Button_-_Nav_Button" data-name="Button - Nav Button"
                     xmlns="http://www.w3.org/2000/svg" width="52" height="52"
                     viewBox="0 0 52 52">
                    <circle id="Ellipse_4377" data-name="Ellipse 437" cx="26" cy="26" r="26"
                            fill="#f0ede3"></circle>
                    <circle id="Ellipse_4378" data-name="Ellipse 437" cx="26" cy="26" r="0"
                            fill="#f0ede3"></circle>
                    <g id="Group_15984" data-name="Group 15984"
                       transform="translate(-97 -5894.5)">
                        <line id="Line_3865" data-name="Line 3865" x2="5" y2="5"
                              transform="translate(120.5 5915.5)" fill="none" stroke="#1c1718"
                              stroke-linecap="round" stroke-width="2"/>
                        <line id="Line_3866" data-name="Line 3866" y1="5" x2="5"
                              transform="translate(120.5 5920.5)" fill="none" stroke="#1c1718"
                              stroke-linecap="round" stroke-width="2"/>
                    </g>
                </svg>
            </li>
        );
    }

    function LeftArrow(props) {
        const {onClick} = props;
        return (
            <li className="go-left" onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52"
                     viewBox="0 0 52 52">
                    <g id="Button_-_Nav_Button" data-name="Button - Nav Button"
                       transform="translate(52 52) rotate(180)">
                        <circle id="Ellipse_4377" data-name="Ellipse 437" cx="26" cy="26" r="26"
                                fill="#f0ede3"></circle>
                        <circle id="Ellipse_4378" data-name="Ellipse 437" cx="26" cy="26" r="0"
                                fill="#f0ede3"></circle>
                        <g id="Group_15984" data-name="Group 15984"
                           transform="translate(-97 -5894.5)">
                            <line id="Line_3865" data-name="Line 3865" x2="5" y2="5"
                                  transform="translate(120.5 5915.5)" fill="none"
                                  stroke="#1c1718"
                                  stroke-linecap="round" stroke-width="2"/>
                            <line id="Line_3866" data-name="Line 3866" y1="5" x2="5"
                                  transform="translate(120.5 5920.5)" fill="none"
                                  stroke="#1c1718"
                                  stroke-linecap="round" stroke-width="2"/>
                        </g>
                    </g>
                </svg>
            </li>
        );
    }

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 7500,
        autoplay: true,
        pauseOnHover: false,
        nextArrow: <RightArrow/>,
        prevArrow: <LeftArrow/>,
    };

    return (
        <StyledIntegrity className="our-values">
            <Container>
                <Slick ref={sliderRef} {...settings}>
                    <div
                        key={1}
                        ref={sliderItem}
                        className="slider-single"
                    >
                        <Row>
                            <Col sm="5" className="left-content">
                                <h3 className={'fade-up'}>Our Values</h3>
                                <p className={'fade-up'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur cumque debitis distinctio eligendi eum laboriosam odio perferendis, sapiente vitae?</p>
                            </Col>

                            <Col sm="7" className="right-content reveal">
                                <div className="right-content__inner ">
                                    <Img
                                        src={'/images/dynamic/our-valuse-1.jpg'}
                                        alt=""
                                    />
                                    <h3 className={'fade-up'}>EQUITY</h3>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div
                        key={2}
                        ref={sliderItem}
                        className="slider-single"
                    >
                        <Row>
                            <Col sm="5" className="left-content">
                                <h3 className={'fade-up'}>Our Values</h3>
                                <p className={'fade-up'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur cumque debitis distinctio eligendi eum laboriosam odio perferendis, sapiente vitae?</p>
                            </Col>

                            <Col sm="7" className="right-content reveal">
                                <div className="right-content__inner ">
                                    <Img
                                        src={'/images/dynamic/our-valuse-1.jpg'}
                                        alt=""
                                    />
                                    <h3 className={'fade-up'}>EQUITY</h3>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Slick>
                )}
            </Container>
        </StyledIntegrity>
    );
};
const StyledIntegrity = styled.section`
  padding-top: 100px;
  background-color: #1C1718;
  padding-bottom: 200px;
  position: relative;
  z-index: 1;
  top: -1px;


  .slide-number {
    position: absolute;
    top: 131px;

    p {
      font-size: 50px;
      font-weight: bold;
      color: #ffffff;
      margin: 0;
    }
  }

  .left-content {
    h3 {
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
      padding-bottom: 20px;
      min-width: 80%;
      display: inline-block;
      color: #F0EDE3;
      border-bottom: 1px solid #ffffff;
      margin: 0 0 60px 0;
    }

    p {
      font-size: 16px;
      color: rgba(240, 237, 227, 0.8);
      line-height: 20px;
      font-weight: 400;
    }
  }

  .right-content {
    padding-left: 130px;

    &__inner {
      padding-top: calc(513 / 570 * 100%);
      position: relative;

      h3 {
        font-size: 120px;
        line-height: 120px;
        font-weight: 600;
        color: #F0EDE3;
        position: absolute;
        //bottom: 100px;
        left: -130px;
        margin: 0;
        bottom: 40px;
        text-transform: uppercase;
        z-index: 9;
      }
    }
  }

  .go-right {
    height: 50px;
    width: 50px;
    background-color: #F1F0E9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1C1718;
    cursor: pointer;
    bottom: 0;
    position: absolute;
    left: 70px;
    z-index: 2;


    svg {
      #Ellipse_4378 {
        transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
        r: 0;
      }


      &:hover {
        #Ellipse_4378 {
          fill: ${hover};
          transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
          r: 26;
        }

        g {
          line {
            stroke: #f9f9f9;
          }
        }
      }
    }

    svg {
      position: relative;
      z-index: 2;
      stroke-width: 2px
    }

    &:after {
      content: "";
      height: 0;
      width: 0;
      background-color: #fc671a;
      position: absolute;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    &:hover {
      &:after {
        height: 100%;
        width: 100%;
      }

      color: #f1f0e8;
    }
  }


  .go-left {
    height: 50px;
    width: 50px;
    background-color: #F1F0E9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1C1718;
    cursor: pointer;
    bottom: 0;
    position: absolute;
    z-index: 2;
    left: 0;

    svg {
      #Ellipse_4378 {
        transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
        r: 0;
      }


      &:hover {
        #Ellipse_4378 {
          fill: ${hover};
          transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
          r: 26;
        }

        g {
          line {
            stroke: #f9f9f9;
          }
        }
      }
    }

    svg {
      position: relative;
      z-index: 2;
      stroke-width: 2px
    }

    &:after {
      content: "";
      height: 0;
      width: 0;
      background-color: #fc671a;
      color: #f1f0e8;
      position: absolute;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    &:hover {
      &:after {
        height: 100%;
        width: 100%;
      }

      color: #f1f0e8;
    }
  }

  .slick-dots {
    opacity: 0 !important;
  }

  @media (max-width: 991px) {
    .right-content {
      padding-left: 15px;

      h3 {
        left: 15px;
        font-size: 60px;
      }
    }
  }

  @media (max-width: 768px) {
    padding-bottom: 70px;
    padding-top: 0px;
    .go-left {
      left: 15px
    }

    .container {
      padding: 0;
    }

    .slick-slider {
      padding-bottom: 70px;
    }

    .row {
      flex-direction: column-reverse;
    }

    .left-content {
      flex: 0 0 100%;
      max-width: 100%;
      padding: 0 30px;
      margin-bottom: 30px;
      margin-top: 78px;
      position: relative;

      h3 {
        //margin: 0 0 10px 0;
        min-width: 70px;
        padding-bottom: 10px;
        margin: 0;
      }

      p {
        margin-top: 20px;
      }
    }

    .right-content {
      flex: 0 0 100%;
      max-width: 100%;

      h3 {
        font-size: 60px;
        line-height: 60px;
        font-weight: bold;
        color: #F0EDE3;
        bottom: -27px;
        position: absolute;
        z-index: 99;
      }
    }
  }

  .slick-track {
    padding-top: 0px;
  }

  .go-right {
    left: 70px;
  }

  .slide-number {
    position: absolute;
    top: 30%;
    z-index: 4;
    left: 40px;
  }
}

@media (max-width: 767px) {
  .slide-number {
    position: absolute;
    top: 30%;
    z-index: 4;
    left: 15px;
  }
}
`;

export default Integrity;
