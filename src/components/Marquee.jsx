import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import theme from "../../utils/theme";

const BannerMarquee = (props) => {
  return (
    <StyledBannerMarquee>
      <Marquee speed={260} delay={props.delay && props.delay}>
        • [-57,70] ©️DECENTRALAND NOV. 10-13 •
        <DateHighlight> -12PM UTC </DateHighlight> • [-57,70] ©️DECENTRALAND
        NOV. 10-13 •<DateHighlight> -12PM UTC </DateHighlight>
      </Marquee>
    </StyledBannerMarquee>
  );
};

const StyledBannerMarquee = styled.div`
  background: black;
  font-size: 12px;
  position: relative;
  &:before,
  &:after {
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    background: ${theme.accent};
    box-shadow: 0 0 2px 0.3px ${theme.accent};
    content: "";
  }
  &:before {
    bottom: 0;
  }
  &:after {
    top: 0;
  }
  .marquee-container {
    padding: 12px 0;
    .overlay {
      display: none;
    }
    .marquee {
      min-width: unset;
    }
    * {
      font-family: "Yapari expanded";
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 2px;

      margin-top: 4px;
      margin-bottom: 4px;
    }
  }
`;

const DateHighlight = styled.span`
  color: ${theme.accent};
  padding-right: 8px;
  padding-left: 8px;
`;

export default BannerMarquee;
