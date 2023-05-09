import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import {Img} from "./Img";
import a from '/public/images/dynamic/Banner.jpg'
import Title from "./Title";
import reactHtmlParser from "react-html-parser";

const MyComponent = () => {
    return (
        <StyledComponent className={'InnerBanner'}>
            <Img src={'/images/dynamic/Banner.jpg'}/>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="InnerBanner__title">
                            {reactHtmlParser('<h1>Commited to Making an <span>Impact</span></h1>')}
                        </div>
                    </Col>
                    <Col sm={{span: 6, offset: 6}}>
                        <div className="InnerBanner__text">
                            <h4>IMPIT Limited is an ITes based firm in Bangladesh, successfully providing its mortgage property services.</h4>
                            <p>Our services are currently concentrated primarily in the United States. IMPIT has been effectively operating its state-by-state operations and working with all of the top national clients in the USA in order to emerge as a vital component in the property preservation sector. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: relative;
  height: 1550px;
  .InnerBanner {
    &__title {
      margin-top: 220px;
      h1 {
        font-size: 120px;
        line-height: 120px;
        color: #F0EDE3;
        font-weight: 600;
        border-bottom: 1px solid #F0EDE3;
        padding-bottom: 80px;
        span {
          color: #ED5333;
        }
        @media (max-width: 767px){
          font-size: 48px;
          line-height: 52px;
          padding-bottom: 40px;
        }
      }
    }
    
      &__text {
        h4 {
          margin-top: 80px;
          font-size: 28px;
          font-weight: 500;
          line-height: 36px;
          margin-bottom: 40px;
          color: #F0EDE3;
        }
        p {
          color: rgba(240, 237, 227, 0.8);
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
        }
        @media (max-width: 767px){
          h4 {
            margin-top: 40px;
            font-size: 20px;
            font-weight: 600;
            line-height: 24px;
            margin-bottom: 20px;
            color: #F0EDE3;
          }
          p {
            color: rgba(240, 237, 227, 0.8);
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
          }
        }
      }
    
  }
  @media (max-width: 767px){
    height: unset;
  }
  
`;

export default MyComponent;
