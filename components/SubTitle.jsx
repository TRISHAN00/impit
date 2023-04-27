import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from "react-html-parser";
import {text} from "../styles/globalStyleVars";

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
                   marginMb
               }) => {


    return (

        <StyledTitle className={`sub-title fade-up`}
                     fontSize={fontSize}
                     fontWeight={fontWeight}
                     color={color}
                     lineHeight={lineHeight}
                     LetterSpacing={letterSpacing}
                     textTransform={textTransform}
                     margin={margin}
                     marginMb={marginMb}
                     padding={padding}
                     borderColor={borderColor}>
            {text ? <h3 className={'fade-up'}>{ReactHtmlParser(text)} </h3> : ''}

        </StyledTitle>

    )
};


const StyledTitle = styled.div`
  position: relative;
  width: 100%;

  h3 {
    font-weight: ${props => props.fontWeight || '500'};
    margin: ${props => props.margin || '0px 0 60px 0'};
    color: ${props => props.color || '#1C1718'};
    text-transform: ${props => props.textTransform || 'capitalize'};
    font-size: ${p => p.fontSize || '16'}px;
    line-height: ${p => p.lineHeight || '20'}px;
    border-bottom: 1px solid ${p => p.borderColor || text};
    padding-bottom: 20px;
  }

  @media (max-width: 767px) {
    h2 {
      margin: ${p => p.marginMb || '0 0 40px 0'};
      font-size: ${p => p.fontSize || '16'}px;
      line-height: ${p => p.lineHeight || '20'}px;
    }
  }
`;


export default Title;














