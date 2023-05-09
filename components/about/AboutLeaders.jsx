import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { hover } from "../../styles/globalStyle";
import Title from "../Title";
import { Img } from "../Img";
import Button from "../Button";

const Leaders = () => {
    const [offset, setOffset] = useState(90);
    useEffect(() => {
        setOffset(document.querySelector(" .container").offsetLeft);
    }, [null]);

    return (
        <>
            <StyledDetail className="pb-100 ">
                <Container fluid className={`counter `}>
                    <Row>
                        <Col sm={7} className="lube-testing__img">
                            <div className="lube-testing__img__inner reveal">
                                <div className="image_wrapper">
                                    <Img src={'/images/dynamic/about-leader-info.jpg'} />
                                </div>
                            </div>
                            <div
                                className={` lube-testing__img__box`}
                                style={{ left: offset + 30 + "px" }}
                            >
                                <div className="lube-testing__img__box__inner">
                                    <Title
                                        text={"The leaders of IMPIT Limited."}
                                        color={"#f9f9f9"}
                                        fontWeight={400}
                                        lineHeight={28}
                                        fontSize={24}
                                        textTransform={"Inherit"}
                                    />
                                    <Button
                                        src={"%"}
                                        text={"Read More"}
                                        margin={"30px 0 0 0"}
                                        background={"#FFF"}
                                        color={"#221F1F"}
                                        hoverBackground={"#221F1F"}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col
                            sm={{ span: 5 }}
                            style={{ paddingRight: offset + 30 + "px" }}
                            className="lube-testing__text"
                        >
                            <Title
                                text={
                                    "Our leaders' fundamental business activities are based on their commitment to delivering outstanding and efficient services that drive the progress of the nation."
                                }
                                color={"#1C1718"}
                                textTransform={"Inherit"}
                                fontWeight={500}
                                lineHeight={28}
                                fontSize={24}
                            />
                        </Col>
                    </Row>
                </Container>
            </StyledDetail>
        </>
    );
};

const StyledDetail = styled.section`

  .image_wrapper {
    position: relative;
    padding-top: calc(540 / 868 * 100%);
  }

  .lube-testing__img {
    position: relative;
    padding: 0;

    &__inner {
      position: relative;
      min-height: 100%;
    }

    &__box {
      width: 50%;
      position: absolute;
      bottom: -120px;
      left: 100px;

      &__inner {
        //padding-top: calc(224 / 370 * 100%);
        position: relative;
        background-color: #ED5333;
        height: 224px;
        width: 370px;

        .title {
          position: absolute;
          top: 30px;
          left: 30px;
          right: 30px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          white-space: normal;
          overflow: hidden;
          width: 70%;
        }
      }

      .dc-btn {
        position: absolute;
        bottom: 30px;
        left: 30px;
      }
    }
  }

  .lube-testing__text {
    margin-top: 80px;
    padding-left: 100px;
  }

  //responsive
  @media (min-width: 768px) and (max-width: 1150px) {
    .lube-testing__img__box {
      width: 65%;
      bottom: -80px;

      &__inner .title {
        font-size: 24px;
        line-height: 28px;
      }
    }

    .lube-testing__text {
      padding: 70px;
    }
  }
  @media (max-width: 992px) and (min-width: 768px) {
    .lube-testing__img__inner {
      position: relative;
      min-height: 100%;
      height: 100%;

      .image_wrapper {
        height: 100%;
      }
    }
  }
  @media (max-width: 767px) {
    padding-top: 0!important;
    padding-bottom: 0;
    .lube-testing__text h2 {
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
    }
    .image_wrapper {
      padding-top: calc(360 / 375 * 100%);
    }
    .row {
      flex-direction: column;

      .counter {
        padding-top: 0 !important;
      }

      .col-sm-5,
      .col-sm-6 {
        min-width: 100%;
        margin: 0;
      }

      .lube-testing__img {
        &__box {
          width: 92%;
          position: relative;
          left: 15px !important;
          right: unset !important;
          bottom: 120px !important;

          .dc-btn {
            left: 15px;
          }

          &__inner {
            width: 100%;
            min-height: 159px;

            .title {
              left: 15px;
              right: 15px;
            }
          }
        }
      }

      .lube-testing__img,
      .lube-testing__text {
        flex: 0 0 100%;
        max-width: 100%;
        padding-right: 0px !important;
        margin: 0 !important;
       
      }

      .lube-testing__text {
        margin-top: -80px !important;
        padding: 0 15px !important;
      }
    }
  } 

`;


export default Leaders;
