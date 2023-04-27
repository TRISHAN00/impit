
import React, { useEffect } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import reactHtmlParser from "react-html-parser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {Img} from "./Img"

const InnerBanner = ({ logo, full, project, sus, id }) => {
    // ScrollTrigger.refresh();
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        gsap.set(".blur_image .global-image img", { filter: "blur(0)" });
        gsap.to(".blur_image .global-image img", {
            filter: "blur(3px)",
            ease: "Expo.easeInOut",
            duration: 1,
            scrollTrigger: {
                trigger: "#hero-banner",
                start: "top top",
                end: "bottom +500",
                invalidateOnRefresh: true,
                toggleActions: "restart none none reset",
            },
        });

        // Parallax effect
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero-banner",
                start: "top top",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true,
            },
        });
        gsap.utils.toArray(".InnerBanner__parallax").forEach((layer) => {
            const depth = layer.dataset.depth;
            tl1.to(
                layer,
                {
                    y: (i, el) => -(el.offsetHeight * el.dataset.depth),
                    ease: "none",
                },
                0
            );
        });
    }, []);
    return (
        <StyledInnerBanner
            id={`${id ? id : "InnerBanner"}`}
            sus
            full={full}
            className={`InnerBanner ${project ? "project_banner" : ""} ${
                sus ? "sustainbanner" : ""
            }`}
        >
            <div
                id={"hero-banner"}
                className={`InnerBanner__parallax ${sus ? "sustain" : ""}`}
            >
                <div className="">
                    <div className={"blur_image"}>
                        <Img src={"/images/dynamic/Banner.jpg"} alt="" />
                    </div>
                    <Container>
                        <Row>
                            <Col className={"divider"} md={12}>
                                <div className={`flex_box ${sus ? "sustain" : ""}`}>
                                    <div className="title">
                                        <h1>{reactHtmlParser('Commited to Making an <span>Impact</span>')}</h1>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className={"second_container"}>
                            <Col className={"column_left"} md={4}>
                                <div
                                    className={`logo_ipsum ${logo ? "" : "remove-margin"} ${
                                        sus ? "sustain" : ""
                                    }`}
                                >
                                    {logo ? (
                                        <img src={"/images/dynamic/autogas-logo.png"} alt="" />
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </Col>
                            <Col className={"column_right"} md={{ span: 6, offset: 6 }}>
                                <h4>
                                    {reactHtmlParser(
                                        "IMPIT Limited is an ITes based firm in Bangladesh, successfully providing its mortgage property services."
                                    )}
                                </h4>
                                <p>Our services are currently concentrated primarily in the United States. IMPIT has been effectively operating its state-by-state operations and working with all of the top national clients in the USA in order to emerge as a vital component in the property preservation sector. </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
  position: relative;
  
  .container {
    h1 {
      font-weight: 600!important;
      font-size: 120px!important;
      line-height: 120px!important;
      span {
        color: rgb(237, 83, 51);
      }
    }
  }
  

  .InnerBanner__parallax {
    position: relative;
    z-index: 1;
    padding-top: 215vh;

    .flex_box {
      display: flex;
      justify-content: space-between;
      .text {
        position: relative;
        z-index: 2;
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: #f9f9f9;
          text-align: right;
        }
      }
    }

    .blur_image {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;

      &:after {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
        content: "";
      }
    }

    .second_container {
      margin-top: 100px;
    }

    .column_left {
      .logo_ipsum {
        position: relative;
        z-index: 1;

        &.remove-margin {
          p {
            margin-top: 0;
          }
        }

        img {
          height: 100px;
        }

        &.sustain {
          a {
            display: none;
          }
        }

        p {
          color: #f9f9f9;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          margin-top: 40px;
          margin-bottom: 40px;
        }

        a {
          color: #f9f9f9;
          font-size: 24px;
          font-weight: 400;
          line-height: 28px;
          margin-bottom: 0;
        }
      }
    }

    .column_right {
      h4 {
        font-size: 28px;
        font-weight: 500;
        line-height: 36px;
        color: #F0EDE3;
      }
      p {
        color: rgba(240, 237, 227, 0.8);
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        margin-top: 40px;
        margin-bottom: 200px;
      }
      @media (max-width: 767px) {
        h4 {
          font-size: 20px;
          font-weight: 600;
          line-height: 24px;
        }
        p {
          margin-top: 20px;
          margin-bottom: 40px;
        }
      }
      
    }

    &.sustain {
      padding-top: 160vh;
    }
    .container {
      position: absolute;
      margin: 0 auto;
      z-index: 2;
      top: 220px;
      left: 0;
      right: 0;

      .divider {
        position: relative;
        padding-bottom: 100px;
        @media (max-width: 767px) {
          padding-bottom: 40px;
        }

        &:after {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: #f9f9f9;
          width: calc(100% - 30px);
          margin: 0 auto;
          content: "";
        }
      }

      @media (max-width: 767px) {
        bottom: 40px;
      }

      h1 {
        z-index: 2;
        font-size: 120px;
        line-height: 120px;
        margin: 0;
        font-weight: 500;
        color: #f9f9f9;
        @media (max-width: 767px) {
          font-size: 40px !important;
          line-height: 40px !important;
          br {
            display: none;
          }
        }
      }

      .sustain {
        h1 {
          font-size: 120px;
          font-weight: 500;
          line-height: 120px;
          text-transform: none;
        }
      }

      h5 {
        color: rgba(249, 249, 249, 0.5);
        z-index: 2;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin: 0 0 20px;
      }
    }
  }

  &.project_banner {
    .title {
      position: relative;
      z-index: 2;
      h1 {
        font-size: 16px !important;
        font-weight: 400 !important;
        line-height: 28px !important;
      }
    }
  }

  @media (min-width: 1550px) {
    .InnerBanner__parallax {
      padding-top: 180vh;
      &.sustain {
        padding-top: 120vh;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .InnerBanner__parallax {
      padding-top: 190vh;
      &.sustain {
        padding-top: 165vh;
      }
    }
  }
  @media (max-width: 767px) {
 
    .InnerBanner__parallax {
      padding-top: 120vh;
      .flex_box {
        flex-direction: column;
        text-align: left;

        .text {
          margin-top: 80px;

          p {
            text-align: left;
          }
        }
      }

      .second_container {
        margin-top: 40px;
      }

      .column_left {
        .logo_ipsum {
          position: relative;
          z-index: 1;

          p {
            margin-top: 0;
          }

          a {
            display: none;
          }

          img {
            height: 45px;
            display: none;
          }
        }
      }

      &.sustain {
        padding-top: 175vh;
      }

      .container {
        .divider {
          padding-bottom: 40px;
        }

        bottom: 40px;

        h1 {
          font-size: 48px !important;
          line-height: 52px !important;

          br {
            display: none;
          }
        }
      }
    }
  }
  @media (max-width: 385px) {
    .InnerBanner__parallax {
      padding-top: 165vh;

      &.sustain {
        padding-top: 175vh;
      }
    }
  }
  @media (max-width: 320px) {
    .InnerBanner__parallax {
      padding-top: 265vh;

      &.sustain {
        padding-top: 175vh;
      }
    }
  }
`;

export default InnerBanner;
