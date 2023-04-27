import React, {useEffect} from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import {useRouter} from "next/router";


const MyComponent = () => {

    const router = useRouter()

    console.log('router', router)


    return (
        <StyledComponent>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <h1>{router.query.slug}</h1>
        </StyledComponent>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
