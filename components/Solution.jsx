import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {hover} from "../styles/globalStyleVars";
import {Swiper, SwiperSlide} from 'swipernew/react';
import {Autoplay, Navigation, Pagination, EffectFade} from "swipernew";
import 'swipernew/css';
import 'swipernew/css/navigation';
import 'swipernew/css/pagination';
import "swipernew/css/effect-fade";
import 'swipernew/css/scrollbar';
import {Img} from "./Img";
import SubTitle from "./SubTitle";
import img from '/public/images/dynamic/solution.jpg'

const Solution = ({background, data, id, top, bottom, bg}) => {


    const nextRef = useRef()
    const prevRef = useRef()
    const [current, setCurrent] = useState('1')
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [offset, setOffset] = useState(90)

    useEffect(() => {
        setOffset(document.querySelector(' .container').offsetLeft)
    }, [])


    const handleSliderCurrent = () => {
        setTimeout(() => {
            if (document.querySelector('.sustain .swiper-pagination-current')) {
                setCurrent(document.querySelector('.sustain .swiper-pagination-current').innerHTML)
            }
        }, 200)
    }
    return (
        <StyledComponent id={id ? id : 'Sustainability'} offset={offset} bg={bg} background={background} top={top}
                         bottom={bottom}>
            <ul offset={offset}>
                <li className={'prev_swipper'} ref={prevRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                        <g id="Button_-_Nav_Button" data-name="Button - Nav Button"
                           transform="translate(52 52) rotate(180)">
                            <circle id="Ellipse_4377" data-name="Ellipse 437" cx="26" cy="26" r="26"
                                    fill="#f9f9f9"></circle>
                            <circle id="Ellipse_4378" data-name="Ellipse 437" cx="26" cy="26" r="0"
                                    fill="#f9f9f9"></circle>
                            <g id="Group_15984" data-name="Group 15984"
                               transform="translate(-97 -5894.5)">
                                <line id="Line_3865" data-name="Line 3865" x2="5" y2="5"
                                      transform="translate(120.5 5915.5)" fill="none" stroke="#D80028"
                                      stroke-linecap="round" stroke-width="1"/>
                                <line id="Line_3866" data-name="Line 3866" y1="5" x2="5"
                                      transform="translate(120.5 5920.5)" fill="none" stroke="#D80028"
                                      stroke-linecap="round" stroke-width="1"/>
                            </g>
                        </g>
                    </svg>
                </li>
                <li className={'next_swipper'} ref={nextRef}>
                    <svg id="Button_-_Nav_Button" data-name="Button - Nav Button"
                         xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                        <circle id="Ellipse_4377" data-name="Ellipse 437" cx="26" cy="26" r="26"
                                fill="#f9f9f9"></circle>
                        <circle id="Ellipse_4378" data-name="Ellipse 437" cx="26" cy="26" r="0"
                                fill="#f9f9f9"></circle>
                        <g id="Group_15984" data-name="Group 15984" transform="translate(-97 -5894.5)">
                            <line id="Line_3865" data-name="Line 3865" x2="5" y2="5"
                                  transform="translate(120.5 5915.5)" fill="none" stroke="#D80028"
                                  stroke-linecap="round" stroke-width="1"/>
                            <line id="Line_3866" data-name="Line 3866" y1="5" x2="5"
                                  transform="translate(120.5 5920.5)" fill="none" stroke="#D80028"
                                  stroke-linecap="round" stroke-width="1"/>
                        </g>
                    </svg>
                </li>
            </ul>
            <Container fluid className={'sustain'}>
                <Swiper
                    Swiper modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    allowTouchMove={true}
                    longSwipesMs={900}
                    slidesPerView={1}
                    pagination={{
                        // el: '.swiper-pagination',
                        type: "fraction",
                    }}
                    effect={"fade"}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    shouldSwiperUpdate={(prev, next) => {
                        if (prev.activeIndex === next.slides.length - 1) {
                            setButtonDisabled(true);
                        } else {
                            setButtonDisabled(false);
                        }
                    }}
                    loop={true}
                    speed={600}
                    onSlideChange={(s) => handleSliderCurrent()}
                >
                    <div className={'sustain__top'} style={{paddingRight: offset + 15 + 'px'}}>
                        <SubTitle text={'Impit Solution'} color={'#F0EDE3'} borderColor={'rgba(240,237,227,0.8)'}/>
                        {/*<p><span>{current}</span>/<span>{slide?.length > 0 ? slide?.length : 5}</span></p>*/}
                    </div>
                                <SwiperSlide key={1}>
                                    <Row className={'sustainability'}>
                                        <Col md={6} className={'sustainability__left'}>
                                            <div className={'sustainability__left__data'}>
                                                <h3 className={'fade-up'}>Title</h3>
                                                <div className="text fade-up">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, similique.</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6} className={'p-0'}>
                                            <div className="sustainability__right">
                                                <Img src={'/images/dynamic/solution.jpg'} alt={'esrs'}/>
                                            </div>

                                        </Col>
                                    </Row>
                                </SwiperSlide>
                    <SwiperSlide key={1}>
                        <Row className={'sustainability'}>
                            <Col md={6} className={'sustainability__left'}>
                                <div className={'sustainability__left__data'}>
                                    <h3 className={'fade-up'}>Title</h3>
                                    <div className="text fade-up">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, similique.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className={'p-0'}>
                                <div className="sustainability__right">
                                    <Img src={'/images/dynamic/solution.jpg'} alt={'esrs'}/>
                                </div>

                            </Col>
                        </Row>
                    </SwiperSlide>
                    <SwiperSlide key={1}>
                        <Row className={'sustainability'}>
                            <Col md={6} className={'sustainability__left'}>
                                <div className={'sustainability__left__data'}>
                                    <h3 className={'fade-up'}>Title</h3>
                                    <div className="text fade-up">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, similique.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className={'p-0'}>
                                <div className="sustainability__right">
                                    <Img src={'/images/dynamic/about.jpg'} alt={'esrs'}/>
                                </div>

                            </Col>
                        </Row>
                    </SwiperSlide>
                    <SwiperSlide key={1}>
                        <Row className={'sustainability'}>
                            <Col md={6} className={'sustainability__left'}>
                                <div className={'sustainability__left__data'}>
                                    <h3 className={'fade-up'}>Title</h3>
                                    <div className="text fade-up">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, similique.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} className={'p-0'}>
                                <div className="sustainability__right">
                                    <Img src={'/images/dynamic/about.jpg'} alt={'esrs'}/>
                                </div>

                            </Col>
                        </Row>
                    </SwiperSlide>

                </Swiper>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  height: 600px;
  position: relative;
  overflow: hidden;
  margin-top: 100px;

  &:after {
    content: "";
    position: absolute;
    height: 50%;
    width: 100%;
    background-color: rgb(28, 23, 24);
    left: 0px;
    bottom: 0px;
  }

  padding-left: ${props => props.offset ? props.offset + 15 + 'px' : '90px'};
  @media (max-width: 767px) {
    padding-left: 0 !important;
    margin-top: 0;
  }

  .swiper-button-prev, .swiper-button-next {
    opacity: 0;
    visibility: hidden;
  }

  .title {
    h2 {
      line-height: 60px;
    }
  }

  ul {
    position: absolute;
    top: 203px;
      // right: ${props => props.offset ? props.offset + 115 + 'px' : '180px'};
    right: 120px;
    z-index: 150;
    display: flex;

    li {
      cursor: pointer;

      svg {
        #Ellipse_4378 {
          transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
          r: 0;
        }

        line {
          stroke: #170C3D;
        }


        &:hover {
          #Ellipse_4378 {
            fill: ${hover};
            transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
            r: 26;
          }

          g {
            line {
              stroke: #f9f9f9;
            }
          }
        }
      }
    }

    li:first-child {
      padding-right: 20px;
    }
  }

  .sustain {
    padding-left: 0;
    padding-right: 0;

    &__top {
      position: absolute;
      top: 120px;
      z-index: 150;
      width: 100%;
      display: flex;
      padding-left: 100px;


      p {
        color: #f9f9f9;
        // border-bottom: 1px solid #FFF;
      }
    }

    .sustainability {
      margin: 0;
      height: 100%;

      &__left {
        background-color: #ED5333;
        margin-left: 0;

        &__data {
          position: relative;
          padding-right: ${props => props.offset ? props.offset + 15 + 'px' : '90px'};
          padding-left: 85px;
          margin-top: 190px;
          padding-bottom: 100px;

          h3 {
            margin-bottom: 80px;
            width: 100%;
            //margin-left: 190px;
            z-index: 5;
            font-size: 60px;
            line-height: 60px;
            font-weight: 600;
            color: #F1F0E9;
            position: relative;
          }

          .text, p {
            //margin-bottom: 40px;
            color: rgba(240, 237, 227, 0.8);
            font-size: 16px;
            line-height: 24px;
          }
        }
      }

      &__right {
        position: relative;
        padding-top: calc(600 / 634 * 100%);
        height: 100%;

        img {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }


  @media (max-width: 767px) {
    .sustain {
      &__top {
        top: 40px;
        padding: 0 15px;
        width: 100%;
        padding-right: 0;

        p {
          height: 36px;
        }
      }

      .sustainability {
        flex-direction: column-reverse;
        margin: 0;

        &__left {
          &__data {
            margin-top: 0;
            margin-bottom: 120px;
            padding: 0px;

            h3 {
              margin-left: 0;
              margin-bottom: 40px;
              font-size: 40px;
              line-height: 40px;
              //font-weight: 400;
              margin-top: -25px;
              width: initial;
            }
          }
        }

        &__right {
          position: relative;
          padding-top: calc(375 / 375 * 100%);

          img {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    ul {
      position: absolute;
      top: 250px;
      left: 15px;
      z-index: 150;
    }
  }


  .swiper-pagination {
    opacity: 0;
    visibility: hidden;
  }
`;

export default Solution;
