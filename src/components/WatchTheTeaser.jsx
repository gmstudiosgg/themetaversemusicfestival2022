import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../utils/theme";
import BannerMarquee from "./Marquee";

const WatchTheTeaser = ({ setShowVideo }) => {
  return (
    <>
      <BannerMarquee noBorderBottom />
      <WatchTeaser onClick={() => setShowVideo(true)}>
        <p>
          <TextHighlight>→</TextHighlight>
          Watch the teaser
          <TextHighlight>←</TextHighlight>
        </p>
      </WatchTeaser>
      <BannerMarquee noBorderTop direction="right" />
    </>
  );
};

const TextHighlight = styled.span`
  color: ${theme.accent};
`;

const WatchTeaser = styled.div`
  display: flex;
  backdrop-filter: blur(2px);
  justify-content: center;
  line-height: 22px;
  font-family: "Yapari Ultra expanded";
  font-weight: 500;
  letter-spacing: 0.22em;
  padding: 80px 0;
  cursor: pointer;
  p {
    font-size: 14px;
  }

  span {
    padding-right: 8px;
    padding-left: 8px;
    transition: padding 0.4s ease;
  }

  :hover {
    span {
      padding-right: 4px;
      padding-left: 4px;
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    p {
      font-size: 24px;
    }
  }
`;

export default WatchTheTeaser;
