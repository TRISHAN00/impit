import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Title";
import Button from "../Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swipernew/react";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swipernew";
import "swipernew/css";
import "swipernew/css/navigation";
import "swipernew/css/pagination";
import "swipernew/css/scrollbar";
import VisibilitySensor from "react-visibility-sensor";
import Link from "next/link";
import { Img } from "../Img";
import { hover } from "../../styles/globalStyleVars";
import SubTitle from "../SubTitle";

const RandomSliderV1 = ({ Data, data }) => {
    // SwiperCore.use([Autoplay]);
    let leftRef = useRef();
    let rightRef = useRef();
    let mLeftRef = useRef();
    let mRightRef = useRef();
    let containerRef = useRef();
    let sliderRef = useRef();

    let [offset, setOffset] = useState(90);
    let [theWidth, SetTheWidth] = useState(0);
    let [activeNumber, setActiveNumber] = useState(1);
    let [totalNumber, setTotalNumber] = useState(1);

    useEffect(() => {
        leftRef.current.addEventListener("click", () => {
            if (
                document.querySelector(
                    ".blog-slider__slider-wrap__inner .swiper-button-prev"
                )
            ) {
                document
                    .querySelector(".blog-slider__slider-wrap__inner .swiper-button-prev")
                    .click();
            }
        });
        rightRef.current.addEventListener("click", () => {
            if (
                document.querySelector(
                    ".blog-slider__slider-wrap__inner .swiper-button-next"
                )
            ) {
                document
                    .querySelector(".blog-slider__slider-wrap__inner .swiper-button-next")
                    .click();
            }
        });
        mLeftRef.current.addEventListener("click", () => {
            if (
                document.querySelector(
                    ".blog-slider__slider-wrap__inner .swiper-button-prev"
                )
            ) {
                document
                    .querySelector(".blog-slider__slider-wrap__inner .swiper-button-prev")
                    .click();
            }
        });
        mRightRef.current.addEventListener("click", () => {
            if (
                document.querySelector(
                    ".blog-slider__slider-wrap__inner .swiper-button-next"
                )
            ) {
                document
                    .querySelector(".blog-slider__slider-wrap__inner .swiper-button-next")
                    .click();
            }
        });
        setOffset(document.querySelector(" .container").offsetLeft);
    }, []);

    useEffect(() => {
        setOffset(containerRef.current?.offsetLeft);
        window.addEventListener("resize", () => {
            setOffset(containerRef.current?.offsetLeft);
            SetTheWidth(window.innerWidth);
        });

        // slider number
        const getActiveItem = document.querySelector(
            ".swiper-pagination-current"
        )?.innerHTML;
        const getTotalItem = document.querySelector(
            ".swiper-pagination-total"
        )?.innerHTML;
        setActiveNumber(getActiveItem);
        setTotalNumber(getTotalItem);
    }, [Data]);

    useEffect(() => {
        // document.querySelector('.swiper-container').style.paddingLeft = offset + 'px'
    }, [offset, sliderRef]);

    useEffect(() => {
        if (sliderRef.current) {
            const swiperInstance = sliderRef.current.swiper;
            if (swiperInstance) {
                setTotalNumber(swiperInstance.slides.length);
            }
        }
    }, [Data]);
    const [swiperIndex, setSwiperIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setSwiperIndex(swiper.realIndex);
    };

    return (
        <StyledBlog offset={offset} className="blog-slider pb-200">
            <Container ref={containerRef}>
                <Row>
                    <Col sm={12}>
                        <div className="blog-title">
                            <SubTitle text={"News & Events"} />
                        </div>

                        <div className="blog-button">
                            <Button src={"/media-center"} text={"View All"} />
                            <div className="slider-nav fade-up">
                                <ul>
                                    <li className="hover" ref={leftRef}>
                                        <BsChevronLeft />
                                    </li>
                                    <li className="hover" ref={rightRef}>
                                        <BsChevronRight />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <VisibilitySensor offset={{ top: -150 }}>
                <div className={` fade-up blog-slider__slider-wrap`}>
                    <div className="blog-slider__slider-wrap__inner">
                        <Swiper
                            loop={false}
                            slidesPerView={3}
                            spaceBetween={30}
                            speed={1500}
                            slidesPerGroup={1}
                            keyboardControl={true}
                            modules={[Autoplay, Pagination, Navigation, Mousewheel]}
                            navigation
                            onSlideChange={handleSlideChange}
                            pagination={{
                                type: "fraction",
                            }}
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
                            ref={sliderRef}
                            className="mySwiper"
                        >
                                        <SwiperSlide>
                                            <div className="blog-single fade-up">
                                                <div className="blog-single__inner">
                                                    <Link href={`#`}>
                                                        <a />
                                                    </Link>
                                                    <Img
                                                        src={'/images/dynamic/blog.jpg'}
                                                        objectFit={"cover"}
                                                        layout={"fill"}
                                                    />
                                                    <div className="blog-single__inner__content">
                                                        <div className="blog-single__inner__content__top">
                                                            <p>para</p>
                                                            <h5>title</h5>
                                                        </div>
                                                        <div className="blog-single__inner__content__bottom">
                                                            <div>
                                                                <h4>12</h4>
                                                                <p>
                                                                   lsd
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p>Jhon</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-single fade-up">
                                    <div className="blog-single__inner">
                                        <Link href={`#`}>
                                            <a />
                                        </Link>
                                        <Img
                                            src={'/images/dynamic/blog.jpg'}
                                            objectFit={"cover"}
                                            layout={"fill"}
                                        />
                                        <div className="blog-single__inner__content">
                                            <div className="blog-single__inner__content__top">
                                                <p>para</p>
                                                <h5>title</h5>
                                            </div>
                                            <div className="blog-single__inner__content__bottom">
                                                <div>
                                                    <h4>12</h4>
                                                    <p>
                                                        lsd
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>Jhon</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-single fade-up">
                                    <div className="blog-single__inner">
                                        <Link href={`#`}>
                                            <a />
                                        </Link>
                                        <Img
                                            src={'/images/dynamic/blog.jpg'}
                                            objectFit={"cover"}
                                            layout={"fill"}
                                        />
                                        <div className="blog-single__inner__content">
                                            <div className="blog-single__inner__content__top">
                                                <p>para</p>
                                                <h5>title</h5>
                                            </div>
                                            <div className="blog-single__inner__content__bottom">
                                                <div>
                                                    <h4>12</h4>
                                                    <p>
                                                        lsd
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>Jhon</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="blog-single fade-up">
                                    <div className="blog-single__inner">
                                        <Link href={`#`}>
                                            <a />
                                        </Link>
                                        <Img
                                            src={'/images/dynamic/blog.jpg'}
                                            objectFit={"cover"}
                                            layout={"fill"}
                                        />
                                        <div className="blog-single__inner__content">
                                            <div className="blog-single__inner__content__top">
                                                <p>para</p>
                                                <h5>title</h5>
                                            </div>
                                            <div className="blog-single__inner__content__bottom">
                                                <div>
                                                    <h4>12</h4>
                                                    <p>
                                                        lsd
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>Jhon</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>

                    <div className="slider-nav-mobile">
                        <ul>
                            <li className="hover" ref={mLeftRef}>
                                <BsChevronLeft />
                            </li>
                            <li className="hover" ref={mRightRef}>
                                <BsChevronRight />
                            </li>
                        </ul>
                    </div>
                </div>
            </VisibilitySensor>
        </StyledBlog>
    );
};

const StyledBlog = styled.section`
  background: #f0ede3;

  .blog-title {
    position: relative;

    p {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .blog-button {
    display: flex;
    justify-content: space-between;
    margin-bottom: 85px;
    align-items: center;

    .slider-nav {
      ul {
        display: flex;
      }

      li {
        height: 50px;
        width: 50px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;

        &:nth-of-type(1) {
          margin-right: 20px;
        }

        svg {
          color: #ffffff;
          z-index: 2;
        }
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: absolute;
    height: 40px;
    width: 40px;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 99;
    background-color: red;
  }

  .swiper-button-next,
  .swiper-button-prev,
  .swiper-pagination {
    opacity: 0;
    visibility: hidden;
  }

  .swiper-initialized {
    margin-left: ${(props) => props.offset + 15}px;
    margin-right: ${(props) => props.offset + 15}px;
  }

  .slider-nav-mobile {
    display: none;
  }

  .blog-slider {
    &__slider-wrap {
      &__inner {
        .blog-single {
          &__inner {
            padding-top: 115%;
          }
        }
      }
    }
  }

  .blog-single__inner {
    padding-top: calc(460 / 370 * 100%);
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    a {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 3;
    }

    &__content {
      &:after {
        content: "";
        height: 100%;
        width: 100%;
        background-color: #000000;
        top: 0;
        left: 0;
        right: 0;
        position: absolute;
        transition: height 0.4s ease;
      }

      &__top {
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          color: rgba(240, 237, 227, 0.8);
          position: absolute;
          left: 40px;
          bottom: 40px;
          z-index: 2;
          right: 40px;
          margin: 0;
          transform: translateY(-30px);
          opacity: 0;
          transition: all 0.6s ease;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }

        h5 {
          position: absolute;
          bottom: 40px;
          left: 40px;
          right: 40px;
          z-index: 2;
          font-size: 24px;
          font-weight: 500;
          line-height: 28px;
          color: #f0ede3;
          margin: 0;
          transition: all 0.3s ease;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }
      }

      &__bottom {
        position: absolute;
        margin: 0;
        top: 40px;
        left: 40px;
        right: 40px;
        display: flex;
        justify-content: space-between;
        z-index: 2;

        h4 {
          font-size: 60px;
          font-weight: 600;
          color: #f0ede3;
          line-height: 60px;
          transition: color 0.3s ease;
        }

        p {
          font-size: 12px;
          color: #f0ede3;
          text-align: left;
          font-weight: 600;
          line-height: 18px;
          transition: color 0.3s ease;

          span {
            display: block;
            color: #f0ede3;
          }
        }
      }
    }

    &:hover {
      .blog-single__inner__content:after {
        height: 0;
      }

      .blog-single__inner__content__top {
        h5 {
          opacity: 0;
          transform: translateY(-20px);
        }

        p {
          transform: none;
          opacity: 1;
        }
      }

      .blog-single__inner__content__bottom {
        border-color: #fff;

        h4 {
          color: #f0ede3;
        }

        p {
          color: #f0ede3;

          span {
            color: #f0ede3;
          }
        }
      }
    }
  }

  @media (max-width: 767px) {
    .blog-single__inner__content__top {
      p,
      h2 {
        left: 30px;
        right: 30px;
        bottom: 30px;
      }
    }

    .blog-single__inner__content__bottom h4,
    .blog-single__inner__content__bottom p {
      left: 30px;
      right: 30px;
      top: 30px;
    }

    .swiper-initialized {
      margin-left: 0;
      margin-right: 0;
    }

    .blog-slider {
      &__slider-wrap {
        margin-left: 15px;
        margin-right: 15px;

        .slider-nav-mobile {
          margin-top: 40px;

          ul {
            display: flex;
          }

          li {
            height: 50px;
            width: 50px;
            background-color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;

            &:nth-of-type(1) {
              margin-right: 20px;
            }

            svg {
              color: #ffffff;
              z-index: 2;
            }
          }
        }
      }
    }

    .blog-button {
      margin-bottom: 40px;

      .slider-nav {
        display: none;
      }
    }

    .slider-nav-mobile {
      display: block;
    }
  }
`;
export default RandomSliderV1;
