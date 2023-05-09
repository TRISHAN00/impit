import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import {Img} from "../Img";

const Directors = () => {
    return (
        <StyledComponent className={'directors pt-100 pb-200'}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="directors__content">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                <br/>
                                <br/>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                            <div className="directors__content__info">
                                <p className={'directors__content__info__name'}>Jhone Smith</p>
                                <p className={'directors__content__info__deg'}>CEO</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={{span: 5, offset: 1}}>
                        <div className="directors__img">
                            <div className="directors__img__inner">
                                <Img src={'/images/dynamic/director_1.jpg'}/>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="directors__content">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                <br/>
                                <br/>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                            <div className="directors__content__info">
                                <p className={'directors__content__info__name'}>Jhone Smith</p>
                                <p className={'directors__content__info__deg'}>CEO</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={{span: 5, offset: 1}}>
                        <div className="directors__img">
                            <div className="directors__img__inner">
                                <Img src={'/images/dynamic/director_2.jpg'}/>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="directors__content">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                <br/>
                                <br/>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                            <div className="directors__content__info">
                                <p className={'directors__content__info__name'}>Jhone Smith</p>
                                <p className={'directors__content__info__deg'}>CEO</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={{span: 5, offset: 1}}>
                        <div className="directors__img">
                            <div className="directors__img__inner">
                                <Img src={'/images/dynamic/director_1.jpg'}/>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className="directors__content">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                <br/>
                                <br/>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                            <div className="directors__content__info">
                                <p className={'directors__content__info__name'}>Jhone Smith</p>
                                <p className={'directors__content__info__deg'}>CEO</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={{span: 5, offset: 1}}>
                        <div className="directors__img">
                            <div className="directors__img__inner">
                                <Img src={'/images/dynamic/director_2.jpg'}/>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  background: #1C1718;
  .container {
    display: flex;
    flex-direction: column;
    gap: 100px;
    @media (max-width: 767px) {
      gap: 80px;
    }
  }
  .row:nth-of-type(even) {
    flex-direction: row-reverse;
    justify-content: space-between!important;
    .offset-md-1 {
      margin: 0;  
    }
    @media (max-width: 767px) {
      flex-direction: column-reverse;
    }
  }
  .directors {
    &__content {
      p {
        color: rgba(240, 237, 227, 0.8);
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
      }
      &__info {
        margin-top: 60px;
        &__name {
          color: #F0EDE3!important;
          font-size: 20px!important;
          line-height: 24px!important;
          font-weight: 600!important;
        }
      }
    }

    &__img {
      &__inner {
        position: relative;
        padding-top: calc(450 / 500 * 100%);

        img {
        }
      }
    }
    
  }

  @media (max-width: 767px) {
    padding-bottom: 120px!important;
    .row:nth-of-type(odd) {
      flex-direction: column-reverse;
    }
    .directors__img {
      margin-bottom: 40px;
    }
    .directors__content__info {
      margin-top: 40px;
    }
  }
  
`;

export default Directors;
