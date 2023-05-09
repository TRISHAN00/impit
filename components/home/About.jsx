import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { Img } from "../Img";
import Button from "../Button";
import { hover } from "../../styles/globalStyleVars";
import img from '/public/images/dynamic/about.jpg'
import SubTitle from "../SubTitle";

const LubeSolution = () => {
    const [offset, setOffset] = useState();
    useEffect(() => {
        setOffset(document.querySelector(".container").offsetLeft);
    }, []);
    return (
        <StyledLubeSolution className="lube-testing pt-100 pb-250">
            <Container>

                    <SubTitle text={'About Impit'} />
                    <div className="lube-testing__title">
                        <h2>IMPIT utilizes a vast network of independent USA based vendors who are truly the stimulus force of the business.</h2>
                    </div>
            </Container>
            <Container fluid className="p-0">
                <Row className={'no-gutters'}>
                    <Col sm={5} className="lube-testing__img">
                        <div className="lube-testing__img__inner">
                            <Img src={'/images/dynamic/about.jpg'} />
                        </div>

                        <div
                            className="lube-testing__img__box"
                            style={{ left: offset + 15 + "px" }}
                        >
                            <div className="lube-testing__img__box__inner">
                                <h2>An organization dedicated to producing excellence</h2>
                                <Button
                                    src={"/lube-oil-testing"}
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
                        sm={{span: 6, offset:1}}
                        className="lube-testing__text"
                        style={{ paddingRight: offset + 30 + "px" }}
                    >
                        <h4>We have the expertise in all kinds of renovation, repair, residential inspection, property preservation & maintenance services </h4>
                        <p>
                            With a strong foundation of leadership, experience, and expertise we have successfully completed more than 40,000 projects and maintained more than 10,000 properties. Our aim is to focus on creative ways to satisfy each clients requirement by developing service approaches tailored to their specific needs. IMPIT has built a unique value proposition that offers unmatched services to deliver every project in the shortest amount of time.
                        </p>

                    </Col>
                </Row>
            </Container>
        </StyledLubeSolution>
    );
};

const StyledLubeSolution = styled.section`
  overflow: hidden;

  .lube-testing__img {
    position: relative;

    &__inner {
      padding-top: calc(420 / 598 * 100%);
      position: relative;
      min-height: 100%;
    }

    &__box {
      width: 60%;
      position: absolute;
      bottom: -50px;

      &__inner {
        padding-top: calc(192 / 400 * 100%);
        position: relative;
        background-color: ${hover};

        h2 {
          font-size: 24px;
          line-height: 28px;
          font-weight: 500;
          color: #ffffff;
          position: absolute;
          top: 30px;
          left: 30px;
          right: 30px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          white-space: normal;
          overflow: hidden;
        }
      }

      .dc-btn {
        position: absolute;
        bottom: 30px;
        left: 30px;
      }
    }
  }

  .lube-testing__title {
    h2 {
      margin-bottom: 60px;
      font-size: 36px;
      font-weight: 500;
      line-height: 40px;
    }
  }

  .lube-testing__text {
    justify-content: start;
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 24px;
      font-weight: 500;
      line-height: 28px;
      margin-bottom: 48px;
      color: #1C1718;
    }

    p {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 20px;

      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1150px) {
    .lube-testing__img__box {
      width: 65%;

      &__inner h2 {
        font-size: 22px;
        line-height: 26px;
      }
    }
  }

  @media (max-width: 767px) {
    padding-bottom: 120px;
    .lube-testing__img__box__inner {
      padding-top: calc(183 / 345 * 100%);

      h2 {
        font-size: 20px;
        line-height: 24px;
      }
    }


    h3 {
      margin-bottom: 40px;
    }

    .lube-testing__title h2 {
      margin-bottom: 60px;
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 40px;
    }

    .col-sm-5,
    .col-sm-6 {
      min-width: 100%;
      margin: 0;
    }

    .lube-testing__img__box {
      bottom: -85px;
      width: 92%;
    }

    .lube-testing__text {
      padding: 0 30px;
      margin-top: 120px;

      h4 {
        margin-bottom: 20px;
      }
    }
  }
`;

export default LubeSolution;
