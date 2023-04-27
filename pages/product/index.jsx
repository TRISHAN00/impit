import React from 'react';
import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import Link from 'next/link'
import Banner from "../../components/product/Banner";
import Button from "../../components/Button";


const MyComponent = () => {

    function fun(a,b){
        console.log('a', a)
        console.log('a', b)
    }

    fun(1,2)

    return (
        <StyledComponent>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <h1>Product list</h1>
            <Banner/>
            <Button  background={'red'} text={'button'}  />

        </StyledComponent>
    );
};

const StyledComponent = styled.section`

`;

export default MyComponent;
