import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { Img } from "../Img";
import Title from "../Title";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useSelector } from "react-redux";
import reactHtmlParser from "react-html-parser";
import Link from "next/link";
import img from '/public/images/dynamic/below.jpg'
import Button from "../Button";

const ParralaxHome = () => {
    const getData = useSelector((state) => state.homeReducer);
    const filterData = getData?.posts[0]?.about_section;

    const [offset, setOffset] = useState();
    useEffect(() => {
        setOffset(document.querySelector(".container").offsetLeft);
    }, []);
    return (
        <StyledParralaxHome
            offset={offset}
            background={"#F2F0F0"}
            className={`about_image_with_text pt-200 pb-200`}
        >
            <ParallaxProvider>
                <Container fluid className={"version_one p-0"}>
                    <Row className={"about_image_with_text_wrapper"}>
                        <Col md={{ span: 5 }} className={"p-0 pr-0"}>
                            <Parallax className={"parrallax_two"} speed={-10}>
                                <div className="image_wrapper_whole">
                                    <div className="image_right">
                                        <Img src={"/images/dynamic/right.jpg"} />
                                    </div>
                                </div>
                            </Parallax>
                        </Col>

                        <Col md={{ span: 7 }} className={"pr-0 pl-0 right_text_content"}>
                            <div className="right_text_content_wrp">
                                <Title
                                    margin={"0 0 80px"}
                                    text={"Why Us"}
                                    textTransform={'none'}
                                />
                                <div className="fade-up">
                                    {reactHtmlParser(
                                        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
                                    )}
                                </div>
                                <Button margin={'30px 0px 0px 0px'} hoverBackground={'#1C1718'} color={'#1C1718'} background={'#F0EDE3'} text={'Join Us Today!'} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ParallaxProvider>

            <div className="imageFixed">
                <div className="wrapper">
                    <Img src={"/images/dynamic/below.jpg"} />
                </div>
            </div>
        </StyledParralaxHome>
    );
};

const StyledParralaxHome = styled.section`
  background: ${(props) => props.background || "#E9E9E9"};
  position: relative;
  display: flex;
  height: 100%;
  
  h2 {
    color: #F1F0E9;
    font-size: 60px;
    line-height: 60px;
    font-weight: 600;
  }
  p {
    color: #F1F0E9;
  }

  .fade-up {
    transform: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .underline-btn {
    //margin-top: 40px;
    a {
      position: relative;

      &:before {
      }
    }

    span {
      &:before {
        background: #010a1a;
        transition: height 0.4s linear;
      }

      &:after {
        display: none;
      }
    }

    &:after {
      display: none;
    }

    &:before {
      display: none;
    }

    span {
      &:before {
        background: #010a1a;
      }

      &:after {
        display: none;
      }
    }

    &:hover {
      &:after {
        width: 100%;
      }

      span {
        &:after {
          width: 100%;
        }

        &:before {
          height: 4px;
        }
      }
    }
  }

  .parallax_one {
    position: relative;
    z-index: 1;
  }

  .parrallax_two {
    position: relative;
    z-index: 2;
  }

  .imageFixed {
    position: absolute;
    left: 0;
    top: 200px;
    width: 50vh;
    //height: 620px;
    min-height: 100vh;
    z-index: 0;
    @media (min-width: 1500px) and (max-width: 1800px) {
      min-height: calc(100vh - 200px);
    }
    @media (max-width: 767px) {
      display: none;
    }
  }

  .about_image_with_text_wrapper {
    //align-items: center;
    .pr-0 {
      padding-right: 0 !important;
      margin-left: -1px;
    }
  }

  .small_title {
    margin-bottom: 0 !important;
  }

  .version_one {
    padding-left: ${(props) => props.offset + 30 + "px !important" || ""};
    position: relative;
    z-index: 2;
    top: -250px;
    @media (max-width: 767px) {
      top: 0;
      padding-left: 15px !important;
      padding-right: 15px !important;
    }

    .parrallax_two {
      @media (max-width: 767px) {
        margin-top: 120px;
      }
    }

    .right_text_content {
      .right_text_content_wrp {
        padding-left: 70px;
        padding-right: ${(props) => props.offset + 30 + "px !important" || ""};
        padding-top: 120px;
        padding-bottom: 120px;
        background: #ED5333;
        @media (max-width: 767px) {
          padding-top: 150px;
          padding-bottom: 0px;
          padding-left: 0 !important;
          padding-right: 0 !important;
          background: transparent;
        }
      }
    }

    .image_wrapper_whole {
      position: relative;

      .image_left {
        //padding-top: calc(768 / 530 * 100%);
        position: relative;
        height: 768px;
        z-index: 1;
        @media (max-width: 767px) {
        }
      }

      .image_right {
        padding-top: calc(768 / 530 * 100%);
        z-index: 0;
        width: 100%;
        min-height: 768px;
        @media (max-width: 767px) {
        }
      }

      @media (max-width: 767px) {
        margin-top: 30px;
      }
    }
  }

  @media (max-width: 767px) {
    padding-top: 0px !important;
    .pr-0 {
      padding-right: 15px !important;
    }

    .pl-0 {
      padding-left: 15px !important;
    }
  }

  &:after {
    height: 200px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: rgb(28, 23, 24);
  }
`;

export default ParralaxHome;
