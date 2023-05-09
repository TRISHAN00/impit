import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import Title from "../Title";
import {hover} from "../../styles/globalStyleVars";
import logo from '../../public/images/static/logo.svg';
import {BsPlus} from 'react-icons/bs';
import Link from 'next/link';
import {Img} from "../Img";
import {Parallax} from "react-scroll-parallax";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const AboutSection = ({pb}) => {
    const [winWidth, setWinWidth] = useState(true)

    useEffect(() => {
        if (window.innerWidth > 800) {
            setWinWidth(true)
        } else {
            setWinWidth(false)
        }
        window.addEventListener("resize", () => {
            if (window.innerWidth > 800) {
                setWinWidth(true)
            } else {
                setWinWidth(false)
            }
        });
    }, [])


    // missing vision overflow
    const [overflow, setOverflow] = useState(0)
    useEffect(() => {
        if (document.querySelector('.mission-vision__single')) {
            setOverflow(document.querySelector('.mission-vision__single').clientHeight)
            window.addEventListener('resize', () => {
                if (window.innerWidth > 900) {
                    setOverflow(document.querySelector('.mission-vision__single').clientHeight)
                }

            })
        }

    }, [])

    return (
        <StyledAboutSection className={`about-section pt-160 ${!pb ? '' : 'pb-160'}`}>

            <>
                <div className='mission-vision' style={{height: overflow + 'px', marginTop: overflow / 2  + 'px'}}>
                    <Container>
                        <Row style={{marginTop: -(overflow / 2) + 'px'}}>
                            <Col sm={4}>
                                <div className="mission-vision__single">
                                    <h4>Mission</h4>
                                    <p>We take pride in the transparency
                                        that we maintain.</p>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className="mission-vision__single">
                                    <h4>Vission</h4>
                                    <p>Our work efficiency is unparalleled and
                                        reflects our ambition.</p>
                                </div>
                            </Col>

                            <Col sm={4}>
                                <div className="mission-vision__single">
                                    <h4>Objective</h4>
                                    <p>We dream big and work hard to
                                        reach it.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </>
        </StyledAboutSection>
    );
};

const StyledAboutSection = styled.section`
  position: relative;
  z-index: 4;

  .mission-vision {
    position: relative;

    &:before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #1C1718;
    }

    .container {
      position: relative;
    }

    .row {
      //margin: -320px auto 0 auto;
      position: absolute;
      left: 0;
      right: 0;
    }

    &__single {
      padding: 43px 40px;
      background-color: #ED5333;
      min-height: 100%;

      h4 {
        font-size: 40px;
        font-weight: 500;
        line-height: 40px;
        margin-bottom: 83px;
        color: #FFFFFF;
      }

      p {
        font-size: 16px;
        line-height: 22px;
        color: #FFFFFF;
      }


    }
    
  }

  @media (max-width: 900px) {
    .global-image img {
      height: 100% !important;
      bottom: 0 !important;
    }

    .mission-vision {
      padding-top: 160px;
      padding-bottom: 160px;
      height: auto !important;
      &:before {
        top: unset;
        bottom: 0;
        height: 35%;
      }

      .row {
        position: relative !important;
        margin-top: -300px !important;
        margin-right: -15px;
        margin-left: -15px;
      }

      .col-sm-4 {
        min-width: 100%;
        margin-bottom: 30px;

        &:nth-last-child(1) {
          margin-bottom: 0;
        }
      }
    }
  }

  @media (max-width: 768px) {
    overflow: visible;
    .mission-vision {
      margin-top: 250px !important;
      padding-top: 60px;
      padding-bottom: 70px;
      &:before {
        top: unset;
        bottom: 0;
        height: 25%;
      }
      .container {
        overflow: visible;

        .row {
          margin-top: -200px !important;
        }
      }
    }

  }

`;
export default AboutSection;
