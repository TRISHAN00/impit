import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import {NextSeo} from "next-seo";

const MyComponent = () => {
    return (
        <StyledComponent>
            <NextSeo
                title={'title | website'}
                description={'description'}

            />
        </StyledComponent>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
