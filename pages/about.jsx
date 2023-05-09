import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import About from "../components/about/About";
import {NextSeo} from "next-seo";
import Mission from "../components/about/Mission";
import Values from "../components/about/Values";
import AboutLeaders from "../components/about/AboutLeaders";
import Testimonial from "../components/about/Testimonial";


const MyComponent = () => {
    return (
        <>
            <NextSeo
                title={`About | Impit Limited`}
                description={'store in Dhaka'}
            />
            <About/>
            <Mission/>
            <Values/>
            <AboutLeaders/>
            <Testimonial/>
        </>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
