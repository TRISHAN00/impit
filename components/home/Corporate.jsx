import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link'
import {hover} from "../../styles/globalStyleVars";
import {LightgalleryItem, LightgalleryProvider} from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css";
import SubTitle from "../SubTitle";
import s from '/public/images/static/fav-white.svg'

const GalleryHome = () => {
    const PhotoItem = ({image, group}) => (
        <LightgalleryItem group={group} src={image}>
            <img alt='' src={image} style={{width: "100%"}}/>
        </LightgalleryItem>
    );
    const next = () => {
        document.querySelector('.mySwiper .swiper-button-next').click();
    }

    const prev = () => {
        document.querySelector('.mySwiper .swiper-button-prev').click();
    }
    const [offset, setOffset] = useState(0)
    useEffect(() => {
        setOffset(document.querySelector(' .container').offsetLeft)
    },[])

    return (
        <StyledGallery className="gallery-slider pt-100 pb-100">
            <Container>
                <Row>
                    <Col sm={12} className="gallery-slider__text">
                        <div className="gallery-slider__text__subtitle">
                            <SubTitle borderColor={'#fff'} text={'Corporate Culture'} />
                        </div>
                        <div className="gallery-slider__text__title-arrow">
                            <div className="gallery-slider__text__title-arrow__title">
                                <h2>We Have A Culture of Continuous Improvement And Foster A Sense of Ownership </h2>
                            </div>
                            <ul className="gallery-slider__text__title-arrow__arrow">
                                <li onClick={prev} className="left">
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
                                                      stroke-linecap="round" stroke-width="1"></line>
                                                <line id="Line_3866" data-name="Line 3866" y1="5" x2="5"
                                                      transform="translate(120.5 5920.5)" fill="none" stroke="#D80028"
                                                      stroke-linecap="round" stroke-width="1"></line>
                                            </g>
                                        </g>
                                    </svg>
                                </li>
                                <li  onClick={next} className="right">
                                    <svg id="Button_-_Nav_Button" data-name="Button - Nav Button"
                                         xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52">
                                        <circle id="Ellipse_4377" data-name="Ellipse 437" cx="26" cy="26" r="26"
                                                fill="#f9f9f9"></circle>
                                        <circle id="Ellipse_4378" data-name="Ellipse 437" cx="26" cy="26" r="0"
                                                fill="#f9f9f9"></circle>
                                        <g id="Group_15984" data-name="Group 15984" transform="translate(-97 -5894.5)">
                                            <line id="Line_3865" data-name="Line 3865" x2="5" y2="5"
                                                  transform="translate(120.5 5915.5)" fill="none" stroke="#D80028"
                                                  stroke-linecap="round" stroke-width="1"></line>
                                            <line id="Line_3866" data-name="Line 3866" y1="5" x2="5"
                                                  transform="translate(120.5 5920.5)" fill="none" stroke="#D80028"
                                                  stroke-linecap="round" stroke-width="1"></line>
                                        </g>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <LightgalleryProvider>
                    <Swiper
                        loop={true}
                        slidesPerView={3}
                        spaceBetween={15}
                        speed='1000'
                        slidesPerGroup={1}
                        keyboardControl={true}
                        modules={[ Pagination, Navigation, Mousewheel]}
                        navigation
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 30,

                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,

                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="image_wrapper">
                                <PhotoItem image={"/images/dynamic/cc1.jpg"} alt=""/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image_wrapper">
                                <PhotoItem image={"/images/dynamic/cc1.jpg"} alt=""/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image_wrapper">
                                <PhotoItem image={"/images/dynamic/cc1.jpg"} alt=""/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image_wrapper">
                                <PhotoItem image={"/images/dynamic/cc1.jpg"} alt=""/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image_wrapper">
                                <PhotoItem image={"/images/dynamic/cc1.jpg"} alt=""/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image_wrapper">
                                <PhotoItem image={"/images/dynamic/cc1.jpg"} alt=""/>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </LightgalleryProvider>
            </Container>

        </StyledGallery>
    );
};

const StyledGallery = styled.section`
  overflow: hidden;
  margin-top: -450px;
  z-index: 99;
  @media (max-width: 991px){
    margin-top: -341px;
  }
  @media (max-width: 767px){
    margin-top: -2px;
    background: #1C1718;
  }
  .gallery-slider__text{
    &__subtitle h3{
      font-weight: 500;
      margin: 0px 0px 60px;
      color: #fff;
      text-transform: capitalize;
      font-size: 16px;
      line-height: 20px;
      border-bottom: 1px solid #fff;
      padding-bottom: 20px;
      @media (max-width: 767px){
        margin-bottom: 40px;
      }
    }
    &__title-arrow{
      display: flex;
      margin-bottom: 60px;
      @media (max-width: 767px){
        flex-direction: column;
      }
      &__title h2{
        font-weight: 500;
        margin: 0px;
        color: #fff;
        font-size: 36px;
        line-height: 40px;
        @media (max-width: 767px){
          margin-bottom: 40px;
          font-size: 24px;
          line-height: 28px;

        }
      }
      &__arrow{
        display: flex;
        gap: 20px;
      }
    }
  }
  svg {
    #Ellipse_4378 {
      transition: all 0.7s cubic-bezier(0.4, 0, 0, 1);
      r: 0;
      cursor: pointer;
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

  .container-fluid{
    padding: 0;
  }
  .mySwiper{
    width: 100%;

  }
  .swiper-wrapper {
    padding-left: ${props => props.offset ? props.offset + 15 + 'px' : '120px'};
    @media (max-width: 991px){
      padding-left: 0;
    }
    @media (max-width: 767px){
      padding-left: 0;
    }
  }
  .swiper-slide{
    @media (max-width: 991px){
      padding-right: 15px !important;
      padding-left: 15px !important;
      margin-right: 15px !important;
    }
    @media (max-width: 767px){
      width: 100% !important;
      padding-right: 15px !important;
      padding-left: 15px !important;
    }
  }
  .swiper-slide.swiper-slide-active {
    width: 40% !important;
    @media (max-width: 991px){
      width: unset !important;
      margin-right: 0px !important;
    }
    @media (max-width: 767px){
      width: 100% !important;
      margin-right: 0px !important;

    }
  }
  .swiper-button-next, .swiper-button-prev  {
    display: none;
  }

  .image_wrapper {
    position: relative;
    padding-top: calc(312 / 370 * 100%);

    img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .swiper-slide {
    transition: 0.7s all ease;
  }
`;

export default GalleryHome;
