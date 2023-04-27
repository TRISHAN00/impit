import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import SubTitle from "../SubTitle";
import {Img} from "../Img";
import img from '/public/images/dynamic/message-01.jpg'

const MyComponent = () => {
    return (
        <StyledComponent className={'leaders-area'}>
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className="leaders-area__text">
                            <SubTitle text={'Our Leaders'} />
                            <h4>Message from the leaders of Impit</h4>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="leaders-area__single">
                            <Img src={'/images/dynamic/message-01.jpg'} />
                        </div>
                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  .leaders-area {
    
  }
`;

export default MyComponent;
