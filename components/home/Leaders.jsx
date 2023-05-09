import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import SubTitle from "../SubTitle";
import Title from "../Title";
import {useState} from 'react';
import {Img} from "../Img";
import TruncateText from "../TruncateText";
import i from '/public/images/dynamic/l1.jpg'

const MyComponent = () => {

    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.');
    const [showFullText, setShowFullText] = useState(false);
    const wordsToShow = 25;

    let shortText = text.split(' ').slice(0, wordsToShow).join(' ');
    let displayText = showFullText ? text : shortText + '...';
    return (
        <StyledComponent className='pb-200 pt-200'>
            <Container className='leaders'>
                <Row>
                    <Col md={4} className={'leaders__left'}>
                        <SubTitle text={'Leaders'}/>
                        <Title text={'Message from the leaders of Impit'}/>
                    </Col>

                    <Col md={4} className={'leaders__msg'}>
                        <div className='leaders__msg__img reveal'>
                            <Img src={'/images/dynamic/l1.jpg'}/>
                        </div>
                        <p className='leaders__msg__name fade-up'>
                            Jhon Smmith
                        </p>
                        <p className='leaders__msg__designation fade-up'>
                            CEO
                        </p>
                        <TruncateText longText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five...'}/>
                    </Col>
                    <Col md={4} className={'leaders__msg'}>
                        <div className='leaders__msg__img reveal'>
                            <Img src={'/images/dynamic/l1.jpg'}/>
                        </div>
                        <p className='leaders__msg__name fade-up'>
                            Jhon Smmith
                        </p>
                        <p className='leaders__msg__designation fade-up'>
                            CEO
                        </p>
                        <TruncateText longText={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five...'}/>
                    </Col>

                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
background: none;
  .title h2 {
    font-size: 36px;
    font-weight: 500;
    line-height: 40px;
  }
  .leaders {
    &__left {
      padding-right: 40px;
    }

    &__msg {
      &__img {
        position: relative;
        padding-top: calc(370 / 370 * 100%);
      }

      &__name {
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
        border-top: 1px solid #1C1718;
        margin-top: 30px;
        padding-top: 30px;
      }

      &__designation {
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
        color: rgba(28, 23, 24, 0.8);
        margin-bottom: 30px;
      }

      &__message {
        margin-bottom: 30px;
      }

      svg {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 767px) {
    .title h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 28px;
    }
    .leaders__msg {
      margin-bottom: 80px;
    }

    .leaders__msg:last-child {
      margin-bottom: 0;
    }

    .TruncateText {
      overflow: inherit !important;
    }
  }

`;

export default MyComponent;
