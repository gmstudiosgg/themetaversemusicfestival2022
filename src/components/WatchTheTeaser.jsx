import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../utils/theme";
import BannerMarquee from "./Marquee";

const WatchTheTeaser = (props) => {
  return (
    <>
      <BannerMarquee noBorderBottom />

      <WatchTeaser>
        <p>
          <TextHighlight>→</TextHighlight> Watch the teaser{" "}
          <TextHighlight>←</TextHighlight>
        </p>
      </WatchTeaser>

      <BannerMarquee noBorderTop direction="right" />
    </>
  );
};

const TextHighlight = styled.span`
  color: ${theme.accent};
  padding-right: 8px;
  padding-left: 8px;
`;

const WatchTeaser = styled.div`
  display: flex;
  justify-content: center;
  line-height: 22px;
  font-family: "Yapari Ultra expanded";
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0.22em;
  padding: 80px 0;
`;

export default WatchTheTeaser;
