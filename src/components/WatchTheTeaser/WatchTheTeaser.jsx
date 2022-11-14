import React, { useEffect, useState } from "react";
import BannerMarquee from "../Marquee/Marquee";
import { TextHighlight, WatchTeaser } from "./styles";

const WatchTheTeaser = ({ setShowVideo, setMuted }) => {
  return (
    <>
      <BannerMarquee noBorderBottom />
      <WatchTeaser
        onClick={() => {
          setMuted(false);
          setShowVideo(true);
        }}
      >
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

export default WatchTheTeaser;
