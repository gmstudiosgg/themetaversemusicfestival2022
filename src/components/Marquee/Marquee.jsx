import React from "react";
import Marquee from "react-fast-marquee";
import { StyledBannerMarquee, DateHighlight } from "./styles";

const BannerMarquee = (props) => {
  return (
    <StyledBannerMarquee {...props}>
      <Marquee
        direction={props.direction}
        speed={100}
        delay={props.delay && props.delay}
        gradient={false}
      >
        • [-62,70] ©️DECENTRALAND NOV. 10-13 •
        <DateHighlight> -12PM UTC </DateHighlight> • [-62,70] ©️DECENTRALAND
        NOV. 10-13 •<DateHighlight> -12PM UTC </DateHighlight>
      </Marquee>
    </StyledBannerMarquee>
  );
};

export default BannerMarquee;
