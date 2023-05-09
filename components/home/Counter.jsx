import React, {useEffect} from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import {hover} from "../../styles/globalStyle";
import Button from "../Button";
import CountUp from 'react-countup';
// import VisibilitySensor from "react-visibility-sensor";
import Title from "../Title";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import ReactVisibilitySensor from "react-visibility-sensor";
import {Img} from "../Img";
import imf from '/public/images/dynamic/count.png'


const Counter = ({url, title}) => {



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (window.innerWidth > 767) {

            // parallax
            let container = gsap.utils.toArray(".image-parallax");
            container.forEach((cont) => {
                let img = cont.querySelector("svg");
                gsap.to(img, {
                    yPercent: 40,
                    // y: 150,
                    ease: "none",
                    scrollTrigger: {
                        trigger: cont,
                        // markers: true,
                        scrub: true
                    }
                });
            });


            // fade up
            let allAnim = document.querySelectorAll('.fade-up');
            allAnim.forEach((el, index) => {
                gsap.fromTo(el, {
                    autoAlpha: 0,
                    y: 50,
                    ease: "none",
                }, {
                    y: 0,
                    autoAlpha: 1,
                    ease: "power2",
                    duration: 1,
                    scrollTrigger: {
                        id: `${index + 1}`,
                        trigger: el,
                        // start: 'top center+=100',
                        toggleActions: 'play none none reverse',
                    }
                })
            })


        }

    }, [null])




    return (
        <>
            <StyledDetail className='pt-100 pb-100'>
                <Img src={'/images/dynamic/count.png'} />

                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="content-large">
                                <div className="counter">
                                    <h3>
                                        <CountUp start={0} end={4000} duration={1}
                                                 separator=","
                                                 decimals={0}
                                                 decimal=",">

                                            {({countUpRef, start}) => (
                                                <ReactVisibilitySensor onChange={start}
                                                                  partialVisibility={{top: 0, bottom: 20}}
                                                                  delayedCall>

                                                    <p ref={countUpRef}></p>


                                                </ReactVisibilitySensor>

                                            )}

                                        </CountUp>
                                        <div className={'plus'}>+</div>
                                    </h3>
                                </div>
                                <p>Customers served and counting</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className={'counter-bottom pb-200'}>
                        <Col className={'counter-bottom_single'} md={4}>
                            <div className="counter">
                                <h4>
                                    <CountUp start={3599} end={10000} duration={1}
                                             separator=","
                                             decimals={''}
                                             decimal=","
                                             suffix ="+"
                                    >

                                        {({countUpRef, start}) => (
                                            <ReactVisibilitySensor onChange={start}
                                                              partialVisibility={{top: 0, bottom: 20}}
                                                              delayedCall>

                                                <p ref={countUpRef}></p>


                                            </ReactVisibilitySensor>

                                        )}

                                    </CountUp>
                                </h4>
                                <p>Properties Managed</p>
                            </div>
                        </Col>
                        <Col className={'counter-bottom_single'} md={4}>
                            <div className="counter">
                                <h4>
                                    <CountUp start={0} end={30} duration={1}
                                             separator=","
                                             decimals={''}
                                             decimal=","
                                             suffix ="+"
                                    >

                                        {({countUpRef, start}) => (
                                            <ReactVisibilitySensor onChange={start}
                                                              partialVisibility={{top: 0, bottom: 20}}
                                                              delayedCall>

                                                <p ref={countUpRef}></p>


                                            </ReactVisibilitySensor>

                                        )}

                                    </CountUp>
                                </h4>
                                <p>Sub branches around the world</p>
                            </div>
                        </Col>
                        <Col className={'counter-bottom_single'} md={4}>
                            <div className="counter">
                                <h4>500+ </h4>
                                <p>Staffs happily employed</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </StyledDetail>
        </>

    );
};

const StyledDetail = styled.section`
  background: rgb(28, 23, 24);
  position: relative;
  height: 1200px;
  margin-top: -10px;



  .fixed-image-parallax {
    position: absolute;
    right: 20px;
    object-fit: contain;
    height: 100%;
    top: -100px;
  }

  p {
    color: #F0EDE3;
  }

  .content-large {
    margin: 120px 0;
    h3 {
      font-size: 160px;
      line-height: 160px;
      font-weight: 500;
      position: relative;
      padding-bottom: 20px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      color: #ED5333;

      &:after {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        background: #D80028;
        height: 1px;
        content: "";
        bottom: 0;
      }

      p {
        font-size: 160px;
        line-height: 160px;
        font-weight: 500;
        color: #ED5333;
      }
    }

    p {
      color: #ED5333;
      font-size: 18px;
      line-height: 40px;
    }

  }

  .counter-bottom {
    .counter {
      h4 {
        font-size: 60px;
        line-height: 60px;
        font-weight: 500;
        color: #F0EDE3;
        position: relative;
        padding-bottom: 12px;
        margin-bottom: 12px;

        &:after {
          position: absolute;
          left: 0;
          right: 0;
          width: 100%;
          background: #F0EDE3;
          height: 1px;
          content: "";
          bottom: 0;
        }


      }


    }
  }





  //responsive 
  @media (max-width: 1024px) and (min-width: 768px){
    .content-large{
      h3{
        font-size: 100px;
        line-height: 100px;
        p {
          font-size: 100px;
          line-height: 100px;
        }
      }
    }
  }
  @media (max-width: 992px) and (min-width: 768px){
    .counter-bottom{
      .counter-bottom_single {
        flex: 0 0 50%;
        max-width: 50%;
        margin-bottom: 40px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  @media (max-width: 767px) {
    padding: 100px 0;
    height: unset;

    .fixed-image-parallax {
      height: auto;
      right: 0;
      left: 0;
      bottom: 100px;
      svg {
        height: 100%;
        width: 100%;
      }
    }

    .counter-left{
      h2{
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 40px;

      }
    }

    .content-large{
      margin: 100px 0 40px;
      h3 {
        color: #D80028;
        font-size: 40px;
        line-height: 40px;
        padding-bottom: 12px;
        margin-bottom: 12px;
        p {
          color: #D80028;
          font-size: 40px;
          line-height: 40px;
        }
      }
    }

    .counter-bottom{
      .counter{
        p {
          font-size: 16px;
        }
        h4{
          font-size: 40px;
          line-height: 40px;
        }
      }
      .counter-bottom_single {
        margin-bottom: 40px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

  }


`;

export default Counter;
