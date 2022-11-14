import React from "react";
import ReactPlayer from "react-player";
import volumeMuted from "../../images/volume-muted.svg";
import volume from "../../images/volume.svg";
import { StyledBanner, SkipVideo, SoundButton } from "./styles";

const Banner = ({ setShowVideo, muted, setMuted }) => {
  return (
    <section id="2022-banner">
      <StyledBanner>
        <ReactPlayer
          muted={muted}
          autoPlay
          playing={true}
          url={"teaser-2022.mp4"}
          poster={"teaser-banner.png"}
          width={"100vw"}
          height={"100vh"}
          onEnded={() => {
            localStorage.setItem("hasWatchedVideo", true);
            setShowVideo(false);
          }}
          playsinline
        />
        <SoundButton
          src={muted ? volumeMuted : volume}
          onClick={() => setMuted(!muted)}
        />
        <SkipVideo
          onClick={() => {
            localStorage.setItem("hasWatchedVideo", true);
            setShowVideo(false);
          }}
        >
          X
        </SkipVideo>
      </StyledBanner>
    </section>
  );
};

export default Banner;
