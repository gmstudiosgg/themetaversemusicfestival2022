import React from "react";
import mvmfLogo from "../../images/logo-metaverse.png";
import dclLogo from "../../images/logo-dcl.svg";
import star from "../../images/star.svg";
import whiteRabbit from "../../images/rabbit.svg";
import polygon from "../../images/STD-polygon.svg";
import Countdown from "../Countdown/Countdown";
import { Container } from "../Container";
import ReactPlayer from "react-player";

import {
  StyledHero,
  LogoContainer,
  StyledVideo,
  EventDetails,
  EventData,
  EventDataBottom,
  EventDataItem,
  DateComponent,
  DateHighlight,
  DateLocation,
  StyledLogo,
  SaveTheDate,
  Decorator,
  WhiteRabbit,
  Polygon,
} from "./styles";

const Hero = () => {
  return (
    <StyledHero sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Container>
        <LogoContainer>
          <ReactPlayer
            muted
            autoPlay
            loop
            playing={true}
            url={"logo-animated.mp4"}
            poster={"logo-poster.png"}
            width={"100%"}
            playsinline
          />
        </LogoContainer>
        <EventDetails>
          <EventData>
            <EventDataItem>
              <DateComponent className="event-data">
                <p>
                  NOV. 10-13 • <DateHighlight>-12PM UTC</DateHighlight> •
                </p>
                <DateLocation>FESTIVAL LAND, [-62,70]</DateLocation>
              </DateComponent>
            </EventDataItem>
          </EventData>
          <EventDataBottom>
            <EventDataItem>
              <a href="https://play.decentraland.org/" target="_blank">
                <StyledLogo alt={"Decentraland Logo"} src={dclLogo} />
              </a>
            </EventDataItem>
            <EventDataItem>
              <SaveTheDate
                href="https://play.decentraland.org/?position=-62%2C63&realm=marvel&island=Ic5t9"
                target="_blank"
              >
                <WhiteRabbit src={whiteRabbit} /> ENTER HERE{" "}
                <Polygon src={polygon} />
              </SaveTheDate>
            </EventDataItem>
          </EventDataBottom>
          <Decorator
            src={star}
            top="50%"
            left="-60px"
            width="22px"
            height="62px"
          />
          <Decorator
            src={star}
            top="50%"
            right="-60px"
            width="22px"
            height="62px"
          />
        </EventDetails>
      </Container>
    </StyledHero>
  );
};

export default Hero;
