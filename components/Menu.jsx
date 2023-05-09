import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Accordion, Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
import {hover} from "../styles/globalStyleVars";
import {CSSPlugin, gsap, TimelineLite} from "gsap";
import disableScroll from 'disable-scroll';

const MyComponent = () => {
    gsap.registerPlugin(CSSPlugin);
    let tl = new TimelineLite();
    let tl2 = new TimelineLite();

    // get offset
    const [offset, setOffset] = useState()
    useEffect(() => {
        setOffset(document.querySelector('.container').offsetLeft)
        window.addEventListener('resize', () => {
            setOffset(document.querySelector('.container').offsetLeft)
        })
    }, [])

    // set menu width
    // const [menuWidth, setMenuWidth] = useState(0)
    // useEffect(() => {
    //     if (window.innerWidth < 480) {
    //         setMenuWidth(window.innerWidth - 50)
    //     } else {
    //         setMenuWidth(450)
    //     }
    //     window.addEventListener('resize', function () {
    //         if (window.innerWidth < 480) {
    //             setMenuWidth(window.innerWidth - 50)
    //         } else {
    //             setMenuWidth(450)
    //         }
    //     });
    // }, [])

    //toggle menu action
    useEffect(() => {
        let getMenuClick = document.querySelector('.main-menu__hamburger  ');
        getMenuClick.addEventListener('click', function () {
            disableScroll.on()
            if (!document.body.classList.contains('menu-open')) {
                tl.to('.line', {
                    opacity: 0,
                    duration: .2,
                }).to('.line', {
                    display: 'none',
                    duration: 0,
                }).to('.close', {
                    display: 'block',
                    duration: 0,
                }).to('.close', {
                    opacity: 1,
                    duration: .3
                }).to('.main-menu__items', {
                    display: 'block',
                    duration: 0
                }, '-=.7').to('.main-menu__items', {
                    width: window.innerWidth > 480 ? 450 : window.innerWidth - 80,
                    duration: .6,
                    // ease: "Expo.easeInOut",
                }, '-=.5').to('.main-menu__items .parent', {
                    display: 'flex',
                    duration: 0,
                }, '-=.2').to('.main-menu__items .parent', {
                    x: 0,
                    stagger: .1,
                }, '-=.2')
                document.body.classList.add('menu-open')
            }
        });

        // close menu
        window.addEventListener('click', (e) => {
            if (document.body.classList.contains('menu-open')) {
                if (!e.target.matches('.main-menu__hamburger,.line,.main-menu__items,.main-menu__items__menu,.main-menu__items__menu li,.main-menu__items__bottom,.main-menu__items__bottom p,.accordion,.accordion-header,button, button svg')) {
                    disableScroll.off()
                    document.body.classList.remove('menu-open')
                    tl2.to('.close', {
                        opacity: 0,
                        duration: .4
                    }).to('.close', {
                        display: 'none',
                        duration: 0,
                    }).to('.main-menu__items .parent', {
                        x: '200%',
                        stagger: .1,
                        duration: .5,
                    }, '-=.3').to('.main-menu__items .parent', {
                        display: 'none',
                        duration: 0,
                    }, '-=.2').to('.main-menu__items', {
                        width: 0,
                        duration: .5,
                        // ease: "Expo.easeInOut",
                    }, '-=.2').to('.main-menu__items', {
                        display: 'none',
                        duration: 0
                    }).to('.line', {
                        display: 'block',
                        duration: 0,
                    }).to('.line', {
                        opacity: 1,
                        duration: .2,
                    })
                }
            }
        })


    }, [])


    useEffect(() => {
        if (document.body.classList.contains("scroll-down")) {
            document.body.classList.remove("scroll-down");
        }
    });


    const [scrollUp, setScrollUp] = useState(false)
    const [scrollDown, setScrollDown] = useState(false)

    useEffect(() => {
        const body = document.body;
        const scrollUp = "scroll-up";
        const scrollDown = "scroll-down";
        let lastScroll = 0;
        let howMuchScroll = 100;

        window.addEventListener("scroll", () => {
            if (!document.querySelector('.main-menu').classList.contains('menu-active')) {
                let currentScroll = window.pageYOffset;

                if (currentScroll <= howMuchScroll) {
                    setScrollUp(false)
                    setScrollDown(false)

                    return;
                }
                if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {

                    setScrollDown(true)
                    setScrollUp(false)

                } else if (
                    currentScroll < lastScroll
                    // body.classList.contains(scrollDown)
                ) {

                    setScrollUp(true)
                    setScrollDown(false)

                }
                lastScroll = currentScroll;
            }


        });


    }, []);


    return (
        <StyledComponent className={`main-menu ${scrollDown ? "scroll-down" : ""} ${scrollUp ? "scroll-up" : ""}`}>
            <Container>
                <Row>
                    <Col xs={6} className={'main-menu__logo'}>
                        <Link href="/"><a><img src="/images/static/logo-white.svg" alt=""/></a></Link>
                    </Col>

                    <Col xs={6} className={'justify-content-end d-flex align-items-center'}>
                        <div className="main-menu__hamburger  ">
                            <div className="line"/>
                            <div className="line"/>
                            <div className="line"/>


                            <svg className={'close'} xmlns="http://www.w3.org/2000/svg" width="27.577" height="27.577"
                                 viewBox="0 0 27.577 27.577">
                                <g id="Group_18580" data-name="Group 18580" transform="translate(-1241.837 -61.211)">
                                    <line id="Line_3541" data-name="Line 3541" x2="35"
                                          transform="translate(1243.251 62.626) rotate(45)" fill="none" stroke="#f0ede3"
                                          stroke-linecap="round" stroke-width="2"/>
                                    <line id="Line_12368" data-name="Line 12368" x2="35"
                                          transform="translate(1243.251 87.374) rotate(-45)" fill="none"
                                          stroke="#f0ede3"
                                          stroke-linecap="round" stroke-width="2"/>
                                </g>
                            </svg>
                        </div>

                    </Col>
                </Row>
            </Container>

            <div className="main-menu__items">

                <ul className={'main-menu__items__menu'} style={{paddingRight: offset + 15 + 'px'}}>
                    <li className={'active parent'}><Link href={'/'}><a>Home</a></Link></li>
                    <li className={'parent'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.829" height="7.828"
                             viewBox="0 0 12.829 7.828">
                            <g id="Group_19013" data-name="Group 19013" transform="translate(-2770.586 909.414)">
                                <g id="Group_19012" data-name="Group 19012" transform="translate(1514 -1103)">
                                    <g id="Group_18581" data-name="Group 18581"
                                       transform="translate(1268 195) rotate(90)">
                                        <line id="Line_3865" data-name="Line 3865" y1="5" x2="5"
                                              transform="translate(0 5)" fill="none" stroke="#f0ede3"
                                              stroke-linecap="round" stroke-width="2"/>
                                        <line id="Line_3866" data-name="Line 3866" x2="5" y2="5" fill="none"
                                              stroke="#f0ede3" stroke-linecap="round" stroke-width="2"/>
                                    </g>
                                </g>
                            </g>
                        </svg>


                        <Accordion>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>About us
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.829" height="7.828"
                                         viewBox="0 0 12.829 7.828">
                                        <g id="Group_19014" data-name="Group 19014"
                                           transform="translate(-2754.586 910.414)">
                                            <g id="Group_19013" data-name="Group 19013" transform="translate(-16 -1)">
                                                <g id="Group_19012" data-name="Group 19012"
                                                   transform="translate(1514 -1103)">
                                                    <g id="Group_18581" data-name="Group 18581"
                                                       transform="translate(1268 195) rotate(90)">
                                                        <line id="Line_3865" data-name="Line 3865" y1="5" x2="5"
                                                              transform="translate(0 5)" fill="none" stroke="#f0ede3"
                                                              stroke-linecap="round" stroke-width="2"/>
                                                        <line id="Line_3866" data-name="Line 3866" x2="5" y2="5"
                                                              fill="none" stroke="#f0ede3" stroke-linecap="round"
                                                              stroke-width="2"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>

                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li><Link href="/about"><a>About Us</a></Link></li>
                                        <li><Link href="/board-of-directors"><a>Board of Directors</a></Link></li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion></li>
                    <li className={'parent'}><Link href={'/services'}><a>Our Services</a></Link></li>
                    <li className={'parent'}><Link href={'/blog'}><a>News & Events</a></Link></li>
                    <li className={'parent'}><Link href={'/our-team'}><a>Our team</a></Link></li>
                    <li className={'parent'}><Link href={'/career'}><a>career</a></Link></li>
                    <li className={'parent'}><Link href={'/contact'}><a>Contact</a></Link></li>
                    <li className={'parent'}><Link href="/contact#faq"><a>FAQ</a></Link></li>
                </ul>

                <div className="main-menu__items__bottom">
                    <ul className={'parent'}>
                        <li className={'hover'}><a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="4.877" height="10.466"
                                 viewBox="0 0 4.877 10.466">
                                <path id="Path_26" data-name="Path 26"
                                      d="M1012.361,3918.425v-.9a1.965,1.965,0,0,1,.019-.315.612.612,0,0,1,.086-.219.351.351,0,0,1,.216-.149,1.551,1.551,0,0,1,.4-.041h.9V3915h-1.441a2.344,2.344,0,0,0-1.8.594,2.5,2.5,0,0,0-.546,1.75v1.086h-1.08v1.8h1.079v5.233h2.166v-5.233h1.442l.19-1.8Z"
                                      transform="translate(-1009.116 -3914.995)" fill="#3f62a9"/>
                            </svg>
                        </a></li>
                        <li className={'hover'}><a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="11.186" height="11.186" viewBox="0 0 11.186 11.186">
                                <defs>
                                    <linearGradient id="linear-gradient" x1="0.085" y1="0.901" x2="0.908" y2="0.104"
                                                    gradientUnits="objectBoundingBox">
                                        <stop offset="0" stop-color="#774bdf"/>
                                        <stop offset="0.272" stop-color="#ea4167"/>
                                        <stop offset="0.64" stop-color="#ee525f"/>
                                        <stop offset="1" stop-color="#f2b243"/>
                                    </linearGradient>
                                </defs>
                                <g id="Group_13724" data-name="Group 13724" transform="translate(-2167 -9029)">
                                    <path id="Path_5912" data-name="Path 5912"
                                          d="M5.593,1.008c1.493,0,1.67.006,2.26.033a3.093,3.093,0,0,1,1.038.193,1.733,1.733,0,0,1,.643.418,1.733,1.733,0,0,1,.418.643,3.1,3.1,0,0,1,.193,1.038c.027.59.033.767.033,2.26s-.006,1.67-.033,2.26a3.1,3.1,0,0,1-.193,1.038A1.852,1.852,0,0,1,8.891,9.953a3.093,3.093,0,0,1-1.038.193c-.59.027-.767.033-2.26.033s-1.67-.006-2.26-.033a3.093,3.093,0,0,1-1.038-.193,1.733,1.733,0,0,1-.643-.418,1.733,1.733,0,0,1-.418-.643A3.093,3.093,0,0,1,1.04,7.853c-.027-.59-.033-.767-.033-2.26s.006-1.67.033-2.26a3.093,3.093,0,0,1,.193-1.038,1.733,1.733,0,0,1,.418-.643,1.733,1.733,0,0,1,.643-.418A3.093,3.093,0,0,1,3.333,1.04c.59-.027.767-.033,2.26-.033M5.593,0C4.074,0,3.883.006,3.287.034a4.106,4.106,0,0,0-1.358.26A2.741,2.741,0,0,0,.939.939a2.741,2.741,0,0,0-.645.991,4.106,4.106,0,0,0-.26,1.358C.006,3.883,0,4.074,0,5.593S.006,7.3.034,7.9a4.106,4.106,0,0,0,.26,1.358,2.741,2.741,0,0,0,.645.991,2.743,2.743,0,0,0,.991.645,4.106,4.106,0,0,0,1.358.26c.6.027.787.034,2.306.034S7.3,11.179,7.9,11.152a4.106,4.106,0,0,0,1.358-.26,2.86,2.86,0,0,0,1.636-1.636,4.106,4.106,0,0,0,.26-1.358c.027-.6.034-.787.034-2.306s-.006-1.709-.034-2.306a4.106,4.106,0,0,0-.26-1.358,2.743,2.743,0,0,0-.645-.991A2.741,2.741,0,0,0,9.256.294,4.106,4.106,0,0,0,7.9.034C7.3.006,7.112,0,5.593,0"
                                          transform="translate(2167 9029)" fill="url(#linear-gradient)"/>
                                    <path id="Path_5913" data-name="Path 5913"
                                          d="M23.548,20.676a2.872,2.872,0,1,0,2.872,2.872,2.872,2.872,0,0,0-2.872-2.872m0,4.736a1.864,1.864,0,1,1,1.864-1.864,1.864,1.864,0,0,1-1.864,1.864"
                                          transform="translate(2149.045 9011.045)" fill="url(#linear-gradient)"/>
                                    <path id="Path_5914" data-name="Path 5914"
                                          d="M61.429,15.384a.671.671,0,1,1-.671-.671.671.671,0,0,1,.671.671"
                                          transform="translate(2114.82 9016.224)" fill="url(#linear-gradient)"/>
                                </g>
                            </svg>

                        </a></li>

                        <li className={'hover'}><a href="#">
                            <svg id="Group_28" data-name="Group 28" xmlns="http://www.w3.org/2000/svg" width="9.063"
                                 height="8.562" viewBox="0 0 9.063 8.562">
                                <path id="LinkedIn"
                                      d="M1096.5,3921.554v3.313h-1.942v-3.091c0-.776-.281-1.306-.984-1.306a1.061,1.061,0,0,0-1,.7,1.3,1.3,0,0,0-.065.469v3.226h-1.943s.026-5.234,0-5.777h1.943v.82l-.013.018h.013v-.018a1.932,1.932,0,0,1,1.751-.955C1095.539,3918.955,1096.5,3919.781,1096.5,3921.554Zm-7.964-5.249a1,1,0,1,0-.026,2h.013a1,1,0,1,0,.013-2Zm-.984,8.561h1.943v-5.777h-1.943Z"
                                      transform="translate(-1087.435 -3916.306)" fill="#0076b5"/>
                            </svg>

                        </a></li>

                        <li className={'hover'}><a href="#">
                            <svg id="Group_31" data-name="Group 31" xmlns="http://www.w3.org/2000/svg" width="9.97"
                                 height="6.979" viewBox="0 0 9.97 6.979">
                                <path id="Path_29" data-name="Path 29"
                                      d="M1176.069,3919.422c-.36-.425-1.025-.6-2.294-.6h-4.606c-1.3,0-1.974.185-2.333.638a3.24,3.24,0,0,0-.349,1.993v1.717c0,1.745.415,2.631,2.682,2.631h4.606a2.913,2.913,0,0,0,2.1-.529,2.759,2.759,0,0,0,.577-2.1v-1.717A3.158,3.158,0,0,0,1176.069,3919.422Zm-3.181,3.128-2.092,1.087a.322.322,0,0,1-.47-.284v-2.168a.32.32,0,0,1,.154-.273.325.325,0,0,1,.315-.011l2.092,1.081a.319.319,0,0,1,0,.568Z"
                                      transform="translate(-1166.487 -3918.823)" fill="red"/>
                            </svg>


                        </a></li>

                    </ul>

                    <p className={'parent'}>© {new Date().getFullYear()} Impit. All Rights Reserved.</p>
                    <a className={'parent'} href="https://dcastalia.com/" target={'_blank'}>Designed & Developed by
                        Dcastalia</a>
                </div>
            </div>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  transition: all .6s ease;

  .container {
    z-index: 99999;
  }

  .main-menu__logo {
    z-index: 999999;
    img {
      height: 60px;
    }
  }

  .main-menu__hamburger {
    display: flex;
    //width: 75px;
    flex-direction: column;
    align-items: end;
    padding: 0px;
    cursor: pointer;

    .line {
      background-color: #F0EDE3;
      height: 2px;
      border-radius: 10px;
      display: block;
      transition: all 0.5s cubic-bezier(0.25, 0.74, 0.22, 0.99) 0s;

      &:nth-of-type(1) {
        width: 50px;

      }

      &:nth-of-type(2) {
        width: 70px;
        margin: 10px 0;
      }

      &:nth-of-type(3) {
        width: 35px;
      }
    }

    .close {
      display: none;
      opacity: 0;
    }

    &:hover {
      .line {
        &:nth-of-type(1) {
          width: 35px;
        }

        &:nth-of-type(2) {
          width: 50px;
        }

        &:nth-of-type(3) {
          width: 75px;
        }
      }
    }
  }


  .main-menu__items {
    height: 100vh;
    position: fixed;
    right: 0;
    background-color: rgba(28, 23, 24, 0.90);
    z-index: 9999;
    bottom: 0;
    top: 0;
    display: none;
    width: 0;


    .close {
      cursor: pointer;
      position: absolute;
      right: 70px;
      top: 60px;
      display: none;
      opacity: 0;

      line {
        transition: all 0.5s cubic-bezier(0.25, 0.74, 0.22, 0.99) 0s;
      }

      &:hover {
        line {
          stroke: ${hover};
        }
      }
    }

    .main-menu__items__menu {
      padding-left: 70px;
      padding-top: 120px;
      height: calc(100vh - 200px);
      overflow: hidden;

      li {
        position: relative;
        transform: translateX(200%);
        display: none;

        a {
          font-size: 20px;
          line-height: 20px;
          color: #F0EDE3;
          text-transform: capitalize;
          display: block;
          width: 100%;
          white-space: nowrap;
        }

        &:not(:nth-last-child(1)) {
          margin-bottom: 20px;
        }

        &.active a {
          color: ${hover};
        }

        svg {
          position: absolute;
          right: 0px;
          top: 10px;
          z-index: 2;
          //bottom: 0;
          margin: auto;
        }

        .accordion {
          width: 100%;

          .accordion-header {
            line-height: unset;
            //padding-bottom: 20px;
          }

          .accordion-body {
            padding-top: 20px;
            a{
              padding: 0;
            }
          }

          button {
            background-color: transparent;
            border: none;
            box-shadow: none;
            font-size: 20px;
            line-height: 20px;
            color: #F0EDE3;
            text-transform: capitalize;
            height: auto;
            padding: 0;
            margin: 0;
            transition: color .4s ease;
            width: 100%;
            text-align: left;
            white-space: nowrap;

            &:hover {
              color: ${hover};
            }
          }

          li {
            display: block;
            opacity: 1;
            transform: none;

            a {
              font-size: 16px;
              padding-left: 10px;
            }
          }
        }

        &:hover {
          svg {
            line {
              stroke: ${hover};
            }
          }
        }

      }
    }

    &__bottom {
      position: absolute;
      bottom: 30px;
      padding-left: 70px;

      ul {
        display: flex;
        margin-bottom: 20px;

        li {
          height: 25px;
          width: 25px;
          border-radius: 50%;
          background-color: #F0EDE3;
          position: relative;


          a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            z-index: 2;
            position: relative;

            svg {
              position: relative;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
            }
          }
          &:hover{
            svg{
              path{
                fill: white;
              }
            }
          }

          &:not(:nth-last-child(1)) {
            margin-right: 20px;
          }
        }
      }

      p, a {
        color: #ffffff;
        font-size: 12px;
        line-height: 15px;
        font-weight: 500;
        white-space: nowrap;
      }
    }

  }

  .parent {
    display: none;
    transform: translateX(200%);
  }

  //menu fixed
  //menu fixed
  &.scroll-down {
    transform: translate3d(0, -160px, 0);
  }

  &.scroll-up {
    //border-bottom: 1px solid #f0ede3;
    background-color: #00000080;

    .menu__desktop {
      //padding-top: 25px;

      //&__logo {
      //  img {
      //    height: 35px;
      //  }
      //}
    }
  }


  @media (max-width: 480px) {
    background-color: rgba(0, 0, 0, 0.8);
    
    .main-menu__items .main-menu__items__menu {
      padding-top: 160px;
      padding-left: 30px;
      padding-right: 30px;
    }

    .main-menu__items__bottom {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

`;

export default MyComponent;
