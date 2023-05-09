import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import SubTitle from "./SubTitle";
import {Img} from "./Img";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import {hover} from "../styles/globalStyleVars";
import {Autoplay, EffectFade, Navigation} from "swiper";

const MyComponent = () => {
    const prevRef = useRef();
    const nextRef = useRef();



    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setOffset(document.querySelector('.container').offsetLeft);
    }, [])



    return (
        <StyledComponent style={{paddingLeft: offset + 15 + "px"}}>
            <ul style={{paddingRight: offset + 15 + "px"}}>
                <li ref={prevRef} className={"prev_swipper"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="52"
                        viewBox="0 0 52 52"
                    >
                        <g
                            id="Button_-_Nav_Button"
                            data-name="Button - Nav Button"
                            transform="translate(52 52) rotate(180)"
                        >
                            <circle
                                id="Ellipse_4377"
                                data-name="Ellipse 437"
                                cx="26"
                                cy="26"
                                r="26"
                                fill="#f9f9f9"
                            ></circle>
                            <circle
                                id="Ellipse_4378"
                                data-name="Ellipse 437"
                                cx="26"
                                cy="26"
                                r="0"
                                fill="#f9f9f9"
                            ></circle>
                            <g
                                id="Group_15984"
                                data-name="Group 15984"
                                transform="translate(-97 -5894.5)"
                            >
                                <line
                                    id="Line_3865"
                                    data-name="Line 3865"
                                    x2="5"
                                    y2="5"
                                    transform="translate(120.5 5915.5)"
                                    fill="none"
                                    stroke="#D80028"
                                    stroke-linecap="round"
                                    stroke-width="1"
                                />
                                <line
                                    id="Line_3866"
                                    data-name="Line 3866"
                                    y1="5"
                                    x2="5"
                                    transform="translate(120.5 5920.5)"
                                    fill="none"
                                    stroke="#D80028"
                                    stroke-linecap="round"
                                    stroke-width="1"
                                />
                            </g>
                        </g>
                    </svg>
                </li>
                <li ref={nextRef} className={"next_swipper"}>
                    <svg
                        id="Button_-_Nav_Button"
                        data-name="Button - Nav Button"
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="52"
                        viewBox="0 0 52 52"
                    >
                        <circle
                            id="Ellipse_4377"
                            data-name="Ellipse 437"
                            cx="26"
                            cy="26"
                            r="26"
                            fill="#f9f9f9"
                        ></circle>
                        <circle
                            id="Ellipse_4378"
                            data-name="Ellipse 437"
                            cx="26"
                            cy="26"
                            r="0"
                            fill="#f9f9f9"
                        ></circle>
                        <g
                            id="Group_15984"
                            data-name="Group 15984"
                            transform="translate(-97 -5894.5)"
                        >
                            <line
                                id="Line_3865"
                                data-name="Line 3865"
                                x2="5"
                                y2="5"
                                transform="translate(120.5 5915.5)"
                                fill="none"
                                stroke="#D80028"
                                stroke-linecap="round"
                                stroke-width="1"
                            />
                            <line
                                id="Line_3866"
                                data-name="Line 3866"
                                y1="5"
                                x2="5"
                                transform="translate(120.5 5920.5)"
                                fill="none"
                                stroke="#D80028"
                                stroke-linecap="round"
                                stroke-width="1"
                            />
                        </g>
                    </svg>
                </li>
            </ul>
            <Container fluid className={'sustain'}>
                <div className="sustain_top"
                     style={{paddingRight: offset + 15 + "px", paddingLeft: offset + 15 + "px"}}>
                    <SubTitle borderColor={'#F0EDE3'} fontSize={16} fontWeight={600} lineHeight={20} color={'#F0EDE3'}
                              text={'Impit Solutions'}/>
                    <p><span>2</span>/<span>3</span></p>
                </div>
                <Swiper
                    Swiper
                    modules={[Autoplay, Navigation, EffectFade]}
                    allowTouchMove={true}
                    longSwipesMs={900}
                    slidesPerView={1}
                    effect={"fade"}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        console.log(swiper);
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                >
                    <SwiperSlide key={1}>
                        <Row className={'sustainability'}>
                            <Col className={'p-0'} md={6}>
                                <div className="sustainability__left">
                                    <div className="sustainability__left__data">
                                        <h3>Landscaping</h3>
                                        <p>At IMPIT, we believe that your outdoor space should be a reflection of your
                                            personal style and taste. That's why we take the time to get to know our
                                            clients, so we can create a custom plan that meets your specific needs and
                                            preferences</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className={'p-0'} md={6}>
                                <div className="sustainability__right">
                                    <Img src={'/images/dynamic/cc1.jpg'}/>
                                </div>
                            </Col>
                        </Row>
                    </SwiperSlide>
                    <SwiperSlide key={1}>
                        <Row className={'sustainability'}>
                            <Col className={'p-0'} md={6}>
                                <div className="sustainability__left">
                                    <div className="sustainability__left__data">
                                        <h3>Landscaping 2</h3>
                                        <p>At IMPIT, we believe that your outdoor space should be a reflection of your
                                            personal style and taste. That's why we take the time to get to know our
                                            clients, so we can create a custom plan that meets your specific needs and
                                            preferences</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className={'p-0'} md={6}>
                                <div className="sustainability__right">
                                    <Img src={'/images/dynamic/solution.jpg'}/>
                                </div>
                            </Col>
                        </Row>
                    </SwiperSlide>


                </Swiper>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
  overflow: hidden;
  
  &:after {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    background: rgb(28,23,24);
    height: 50%;
    bottom: 0;
  }

  ul {
    position: absolute;
    right: 0;
    content: '';
    top: 120px;
    z-index: 9;
    display: flex;
    gap: 30px;

    li {
      cursor: pointer;

      svg {
        #Ellipse_4378 {
          transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
          r: 0;
        }

        line {
          stroke: #170c3d;
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
    }
  }

  .sustain {
    padding-left: 0;
    padding-right: 0;
    overflow: hidden;

    &_top {
      position: absolute;
      content: '';
      left: 60px;
      right: 0;
      top: 60px;
      z-index: 99;
      display: flex;
    }

    p {
      color: white;
    }
  }


  .sustainability {
    height: 100%;

    &__left {
      background: #ED5333;
      height: 100%;

      &__data {
        position: relative;
        padding-top: 180px;
        padding-left: 70px;

        h3 {
          font-size: 60px;
          line-height: 60px;
          font-weight: 500;
          color: #F1F0E9;
          margin-bottom: 60px;
        }

        p {
          font-size: 16px;
          font-weight: 400;
        }
      }

    }

    &__right {
      position: relative;
      padding-top: calc(600 / 634 * 100%);
      height: 100%;
    }
  }
`;

export default MyComponent;
