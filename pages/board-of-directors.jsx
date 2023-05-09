import React from 'react';
import styled from "styled-components";
import Directors from "../components/bod/Directors";
import {NextSeo} from "next-seo";


const MyComponent = () => {
    return (
        <StyledComponent>
            <NextSeo
                title={`Board of Directors | Impit Limited`}
                description={'store in Dhaka'}
            />
            <Directors/>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
