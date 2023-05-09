import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import {Img} from "../components/Img";
import {NextSeo} from "next-seo";
import OverView from "../components/services/OverView";

const MyComponent = () => {
    return (
        <StyledComponent>
            <NextSeo
                title={'Services | Impit Limited'}
                description={'description'}

            />
            <OverView/>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
