import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import {Img} from "../Img";
import a from '/public/images/static/ov-bg.png'
import SubTitle from "../SubTitle";
import reactHtmlParser from "react-html-parser";

const MyComponent = () => {
    return (
        <StyledComponent className={'pb-200'}>
            <Img src={'/images/static/ov-bg.png'} />
            <Container>
                <Row>
                    <Col sm={12}>

                            <SubTitle borderColor={'#707070'} color={'#F0EDE3'} text={'Service Overview'} />
                            {reactHtmlParser('<h4><span>IMPIT</span> leverages a broad network of independent vendors based in the USA who are the driving force behind our business. These vendors possess extensive expertise in various services related to property renovation, repair, residential inspection, property preservation, and maintenance.</h4>')}

                    </Col>
                    <Col sm={6}>
                        <div className="overview__left">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but alsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
                            <br/>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als</p>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="overview__right">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  
 
      h4 {
        font-size: 36px;
        font-weight: 500;
        line-height: 40px;
        color: #F0EDE3!important;
        span {
          color: #ED5333;
        }
      }
   
    &__left, &__right {
      margin-top: 60px;
      p {
        color: rgba(240, 237, 227, 0.8);
      }
    }
`;

export default MyComponent;
