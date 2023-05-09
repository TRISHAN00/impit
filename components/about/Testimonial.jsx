import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from "next/link";
import Title from "../Title";



import ReactHtmlParser from "react-html-parser";
import {blue, hover} from "../../styles/globalStyleVars";
import {Img} from "../Img";
import reactHtmlParser from "react-html-parser";
import SubTitle from "../SubTitle";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination} from "swiper";

const MyComponent = ({background, data, id}) => {
    const subtitle = data?.subtitle;
    const slide = data?.slider;

    // const slide_title = slide?.data?.title;
    // const slide_desc = slide?.data?.description;
    // const slide_img = slide?.images[0]?.full_path;

    const nextRef = useRef();
    const prevRef = useRef();
    const [current, setCurrent] = useState("1");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [offset, setOffset] = useState(90);

    useEffect(() => {
        setOffset(document.querySelector(" .container").offsetLeft);
    }, []);

    const handleSliderCurrent = () => {
        setTimeout(() => {
            if (document.querySelector(".sustain .swiper-pagination-current")) {
                setCurrent(
                    document.querySelector(".sustain .swiper-pagination-current")
                        .innerHTML
                );
            }
        }, 200);
    };
    return (
        <StyledComponent className={"pt-200 pb-200"}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <SubTitle margin={"0px 0 30px 0"} text={'Employee Insights '}/>
                    </Col>
                </Row>
                <Swiper
                    Swiper
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    allowTouchMove={true}
                    longSwipesMs={500}
                    slidesPerView={1}
                    pagination={{
                        // el: '.swiper-pagination',
                        type: "fraction",
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    //effect={"fade"}
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
                    speed={900}
                    onSlideChange={(s) => handleSliderCurrent()}
                >

                    <SwiperSlide key={1}>
                        <div className="testimonials__slider d-flex">
                            <Col sm={6} className="slider-img">
                                <div className="testimonials__slider__img">
                                    <Img src={'/images/dynamic/tm1.jpg'}/>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100"
                                        height="78.176"
                                        viewBox="0 0 100 78.176"
                                    >
                                        <g
                                            id="Group_17904"
                                            data-name="Group 17904"
                                            transform="translate(-3763 3729.176) rotate(180)"
                                        >
                                            <path
                                                id="Path_8247"
                                                data-name="Path 8247"
                                                d="M43.777,0V38.437A44.014,44.014,0,0,1,20.157,78.176l-1.89-3.257S32.439,59.935,29.92,45.277H0V0Z"
                                                transform="translate(-3863 3651)"
                                                fill="#ED5333"
                                            />
                                            <path
                                                id="Path_8248"
                                                data-name="Path 8248"
                                                d="M426.638,0V38.437a44.014,44.014,0,0,1-23.621,39.739l-1.89-3.257S415.3,59.935,412.781,45.277h-29.92V0Z"
                                                transform="translate(-4189.639 3651)"
                                                fill="#ED5333"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </Col>

                            <Col sm={6} className={"testimonials__slider__content"}>
                                <p className={"fade-up"}>{reactHtmlParser('The team I work with is composed of talented and supportive individuals who are always willing to lend a hand when needed. I have learned so much from my colleagues and the management team, and their guidance has helped me to grow both professionally and personally.\n' +
                                    '\n' +
                                    'I cannot speak highly enough of this company. It has been an absolute pleasure working here for the past three years, and I look forward to many more. If you\'re looking for a supportive and inspiring work environment, I highly recommend this company.')}</p>
                                <h4 className={"fade-up"}>John Smith</h4>
                                <p className={"fade-up"}>Issue resolution</p>
                            </Col>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide key={1}>
                        <div className="testimonials__slider d-flex">
                            <Col sm={6} className="slider-img">
                                <div className="testimonials__slider__img">
                                    <Img src={'/images/dynamic/tm1.jpg'}/>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="100"
                                        height="78.176"
                                        viewBox="0 0 100 78.176"
                                    >
                                        <g
                                            id="Group_17904"
                                            data-name="Group 17904"
                                            transform="translate(-3763 3729.176) rotate(180)"
                                        >
                                            <path
                                                id="Path_8247"
                                                data-name="Path 8247"
                                                d="M43.777,0V38.437A44.014,44.014,0,0,1,20.157,78.176l-1.89-3.257S32.439,59.935,29.92,45.277H0V0Z"
                                                transform="translate(-3863 3651)"
                                                fill="#ED5333"
                                            />
                                            <path
                                                id="Path_8248"
                                                data-name="Path 8248"
                                                d="M426.638,0V38.437a44.014,44.014,0,0,1-23.621,39.739l-1.89-3.257S415.3,59.935,412.781,45.277h-29.92V0Z"
                                                transform="translate(-4189.639 3651)"
                                                fill="#ED5333"
                                            />
                                        </g>
                                    </svg>
                                </div>
                            </Col>

                            <Col sm={6} className={"testimonials__slider__content"}>
                                <p className={"fade-up"}>{reactHtmlParser('The team I work with is composed of talented and supportive individuals who are always willing to lend a hand when needed. I have learned so much from my colleagues and the management team, and their guidance has helped me to grow both professionally and personally.\n' +
                                    '\n' +
                                    'I cannot speak highly enough of this company. It has been an absolute pleasure working here for the past three years, and I look forward to many more. If you\'re looking for a supportive and inspiring work environment, I highly recommend this company.')}</p>
                                <h4 className={"fade-up"}>John Smith</h4>
                                <p className={"fade-up"}>Issue resolution</p>
                            </Col>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Row className={"slider--nav fade-up"}>
                    <Col sm={{span: 6, offset: 6}}>
                        <ul>
                            <li className={"prev_swipper"} ref={prevRef}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="52"
                                    height="52"
                                    viewBox="0 0 52 52"
                                >
                                    <g
                                        id="Button_-_Nav_Button"
                                        data-name="Button - Nav Button"
                                        transform="translate(52 52) rotate(180)"
                                    >
                                        <circle
                                            id="Ellipse_4377"
                                            data-name="Ellipse 437"
                                            cx="26"
                                            cy="26"
                                            r="26"
                                            fill="#1C1718"
                                        ></circle>
                                        <circle
                                            id="Ellipse_4378"
                                            data-name="Ellipse 437"
                                            cx="26"
                                            cy="26"
                                            r="0"
                                            fill="#1C1718"
                                        ></circle>
                                        <g
                                            id="Group_15984"
                                            data-name="Group 15984"
                                            transform="translate(-97 -5894.5)"
                                        >
                                            <line
                                                id="Line_3865"
                                                data-name="Line 3865"
                                                x2="5"
                                                y2="5"
                                                transform="translate(120.5 5915.5)"
                                                fill="none"
                                                stroke="#F0EDE3"
                                                stroke-linecap="round"
                                                stroke-width="2"
                                            />
                                            <line
                                                id="Line_3866"
                                                data-name="Line 3866"
                                                y1="5"
                                                x2="5"
                                                transform="translate(120.5 5920.5)"
                                                fill="none"
                                                stroke="#F0EDE3"
                                                stroke-linecap="round"
                                                stroke-width="2"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </li>
                            <li className={"next_swipper"} ref={nextRef}>
                                <svg
                                    id="Button_-_Nav_Button"
                                    data-name="Button - Nav Button"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="52"
                                    height="52"
                                    viewBox="0 0 52 52"
                                >
                                    <circle
                                        id="Ellipse_4377"
                                        data-name="Ellipse 437"
                                        cx="26"
                                        cy="26"
                                        r="26"
                                        fill="#1C1718"
                                    ></circle>
                                    <circle
                                        id="Ellipse_4378"
                                        data-name="Ellipse 437"
                                        cx="26"
                                        cy="26"
                                        r="0"
                                        fill="#1C1718"
                                    ></circle>
                                    <g
                                        id="Group_15984"
                                        data-name="Group 15984"
                                        transform="translate(-97 -5894.5)"
                                    >
                                        <line
                                            id="Line_3865"
                                            data-name="Line 3865"
                                            x2="5"
                                            y2="5"
                                            transform="translate(120.5 5915.5)"
                                            fill="none"
                                            stroke="#F0EDE3"
                                            stroke-linecap="round"
                                            stroke-width="2"
                                        />
                                        <line
                                            id="Line_3866"
                                            data-name="Line 3866"
                                            y1="5"
                                            x2="5"
                                            transform="translate(120.5 5920.5)"
                                            fill="none"
                                            stroke="#F0EDE3"
                                            stroke-linecap="round"
                                            stroke-width="2"
                                        />
                                    </g>
                                </svg>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
{
  overflow: hidden;
  margin-top: -80px;

  .container {
    position: relative;
  }
  
  .testimonials__slider {
    gap: 50px;
    .slider-img {
      padding: 0;
    }

    &__img {
      position: relative;
      //padding-top: 100%;
      padding-top: calc(500 / 500 * 100%);
      margin-right: 50px;
      min-height: 100%;
      //img{
      //  height: auto !important;
      //}

      svg {
        position: absolute;
        right: -50px;
        top: -50px;
      }
    }
  }

  .testimonials__slider__content {
    padding-bottom: 70px;

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: rgba(28, 23, 24, 0.8);
    }

    h4 {
      margin-top: 40px;
      margin-bottom: 0px;
      font-size: 24px;
      font-weight: 500;
      line-height: 28px;
      color: #1c1718;
    }
  }

  ul {
    position: absolute;
    bottom: 0;
    left: 15px;
    z-index: 150;
    display: flex;

    li {
      cursor: pointer;

      svg {
        #Ellipse_4378 {
          transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
          r: 0;
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
}

  .swiper {
    padding-top: 60px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    opacity: 0;
    visibility: hidden;
  }

  .swiper-pagination {
    position: absolute;
    width: fit-content;
    right: 0;
    left: auto;
    color: #1c1718;
    //bottom: 50px;

    font-size: 16px;
    font-weight: 500;

    span {
      color: #1c1718;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .slider--nav {
    position: absolute;
    width: 100%;
    bottom: 0px;
    left: 64px;
    //bottom: 50px;
    z-index: 99;
  }

  @media (max-width: 767px) {
    .d-flex {
      flex-wrap: wrap;
    }

    .testimonials__slider {
      margin-top: 30px;

      .col-sm-6 {
        padding-left: 0;
        min-width: 100%;
      }
    }

    .testimonials__slider__img {
      margin-right: 0;
      padding-top: calc(343 / 345 * 100%);
      //img{
      //  height: 100% !important;
      //}
      svg {
        height: 78px;
        right: 0px;
        width: 100px;
        top: -40px;
      }
    }

    .testimonials__slider__content {
      margin-top: 40px !important;
    }

    .slider--nav {
      position: relative;
      bottom: 0;
      display: block;
      padding: 0 15px;
      margin-top: 16px;

      .col-sm-6 {
        min-width: 100%;
        margin: 0;
      }
    }

    .swiper-pagination {
      right: 15px;
      bottom: 0;
    }

    .swiper {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    .slider--nav {
      padding: 0;
    }
  }
`;

export default MyComponent;
