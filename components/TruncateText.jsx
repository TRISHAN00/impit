import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const TruncateText = ({ longText }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextDisplay = () => {
    setShowFullText(!showFullText);
  };

  const truncatedText = longText.slice(0, 200);
  const displayText = showFullText ? longText : truncatedText;

  return (
    <StyledComponent>
      <div className="fade-up">
        <p
          className={`truncate-text fade-up ${
            showFullText ? "show-full-text" : ""
          }`}
          onClick={toggleTextDisplay}
        >
          {displayText}
        </p>
        {longText.length > 200 && (
          <span className={"display"} onClick={toggleTextDisplay}>
            {showFullText ? (
              // <div className="svg">
              //     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
              //         <g id="Group_19016" data-name="Group 19016" transform="translate(-645.5 -6884.5)">
              //             <line id="Line_12372" data-name="Line 12372" y2="10" transform="translate(651.5 6885.5)" fill="none" stroke="#f0ede3" stroke-linecap="round" stroke-width="2"/>
              //             <line id="Line_12373" data-name="Line 12373" y2="10" transform="translate(656.5 6890.5) rotate(90)" fill="none" stroke="#f0ede3" stroke-linecap="round" stroke-width="2"/>
              //         </g>
              //     </svg>
              // </div>
              <div className="video-box">
                <div className="hover-btn hover-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="2"
                    viewBox="0 0 12 2"
                  >
                    <g
                      id="Group_19000"
                      data-name="Group 19000"
                      transform="translate(-645.5 -6889.5)"
                    >
                      <line
                        id="Line_12372"
                        data-name="Line 12372"
                        y2="10"
                        transform="translate(656.5 6890.5) rotate(90)"
                        fill="none"
                        stroke="#f0ede3"
                        stroke-linecap="round"
                        stroke-width="2"
                      />
                      <line
                        id="Line_12373"
                        data-name="Line 12373"
                        y2="10"
                        transform="translate(656.5 6890.5) rotate(90)"
                        fill="none"
                        stroke="#f0ede3"
                        stroke-linecap="round"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            ) : (
              <div className="video-box">
                <div className="hover-btn hover-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <g
                      id="Group_19016"
                      data-name="Group 19016"
                      transform="translate(-645.5 -6884.5)"
                    >
                      <line
                        id="Line_12372"
                        data-name="Line 12372"
                        y2="10"
                        transform="translate(651.5 6885.5)"
                        fill="none"
                        stroke="#f0ede3"
                        stroke-linecap="round"
                        stroke-width="2"
                      />
                      <line
                        id="Line_12373"
                        data-name="Line 12373"
                        y2="10"
                        transform="translate(656.5 6890.5) rotate(90)"
                        fill="none"
                        stroke="#f0ede3"
                        stroke-linecap="round"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            )}
          </span>
        )}
      </div>
    </StyledComponent>
  );
};

const StyledComponent = styled.section`
  .display {
    //transition: all 0.5s ease;
  }
  p {
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: rgba(28, 23, 24, 0.8);
    overflow: hidden;
  }

  .video-box {
    position: relative;
    cursor: pointer;
    top: 30px;
    width: fit-content;

    .hover-btn {
      height: 50px;
      width: 50px;
      background-color: #ed5333;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 2;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 0;
      right: 0;

      &.hover:after {
        border-radius: 50%;
      }

      svg {
        position: relative;
        z-index: 2;
      }

      path {
        transition: all 0.3s ease;
      }
    }

    &:hover {
      .hover-btn {
        &:after {
          height: 100%;
          width: 100%;
        }

        path {
          fill: #fff;
        }
      }
    }
    @media (max-width: 768px) {
      top: 0 !important;
      padding-bottom: 60px;
    }
  }
`;

export default TruncateText;
