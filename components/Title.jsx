import React from 'react';
import styled from 'styled-components';
import {text, title} from "../styles/globalStyleVars";
import ReactHtmlParser from "react-html-parser";

const Title = ({
                   text,
                   fontSize,
                   fontWeight,
                   color,
                   letterSpacing,
                   lineHeight,
                   textTransform,
                   margin,
                   padding,
                   borderColor,
                   varient,
                   small_text
               }) => {


    return (

        <StyledTitle className={`title `}
                     fontSize={fontSize}
                     fontWeight={fontWeight}
                     color={color}
                     lineHeight={lineHeight}
                     LetterSpacing={letterSpacing}
                     textTransform={textTransform}
                     margin={margin}
                     padding={padding}
                     varient={varient}
                     borderColor={borderColor}>
            { text ? <h2>            {ReactHtmlParser(text)} </h2> : '' }
            {small_text ? <p className={'small_title fade-up'}>{ReactHtmlParser(small_text)}</p> : "" }

        </StyledTitle>

    )
};


const StyledTitle = styled.div`
  ${props => props.varient ? props.varient : ''};
  margin: ${props => props.margin || '0px'};
  color: ${props => props.color || text};
  font-weight: ${props => props.fontWeight || '600'};
  position: relative;
  width: 100%;
  font-family: ${title};
  text-transform: ${props => props.textTransform || ''};
  display: flex;
  justify-content: space-between;
  
  h2 {
    font-size: ${p => p.fontSize || '20'}px;
    font-weight: ${props => props.fontWeight || '600'};
    line-height ${p => p.lineHeight || '20'}px;
  }
  
  .small_title{
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.5px;
    line-height: 30px;
    color: #010A1A;
    position: relative;
    min-width: 150px;
    span{
      display: block;
    }
    &:after{
      position: absolute;
      left: 0;
      width: 100%;
      content: "";
      background: #010A1A;
      height: 1px;
      bottom: 30px;
    }
  }


  @media (max-width: 767px) {
    margin-bottom: 40px;
    //flex-direction: column-reverse;
    display: grid;
    grid-auto-flow: row;
    h2{
      order: 2;
    }
    .small_title{
      order: 1;
      margin-bottom: 60px;
      margin-bottom: 30px;
    }
  }
`;


export default Title;














