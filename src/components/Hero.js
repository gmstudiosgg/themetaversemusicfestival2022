import React from "react";
import styled from "styled-components";
import Button from "./Button";
import theme, { breakpoints } from "../../utils/theme";
import mvmfLogo from "../images/logo-metaverse.svg";
import dclLogo from "../images/logo-dcl.svg";
import star from "../images/star.svg";
import whiteRabbit from "../images/rabbit.svg";
import polygon from "../images/STD-polygon.svg";
import { Container } from "./Container";

const Hero = () => {
  return (
    <StyledHero sx={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <Container>
        <LogoContainer>
          <StyledImage
            placeholder={"none"}
            backgroundColor={"black"}
            objectFit={"contain"}
            loading={"eager"}
            className="index-hero-logo"
            alt={"Metaverse Music Festival"}
            src={mvmfLogo}
          />
        </LogoContainer>
        <EventDetails>
          <EventData>
            <EventDataItem>
              <DateComponent className="event-data">
                <p>
                  NOV. 10-13 <DateHighlight>-12PM UTC-</DateHighlight>
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
                href="https://events.decentraland.org/event/?id=7148716b-ff25-4d5f-8267-55fed7ab15bc"
                target="_blank"
              >
                <WhiteRabbit src={whiteRabbit} /> Save the date{" "}
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

const StyledHero = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const LogoContainer = styled.div`
  padding: 0 66px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

const EventDetails = styled.div`
  position: relative;
  padding: 0 121px;
  border-left: 3px solid white;
  border-right: 3px solid white;
`;

const EventData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 9px;
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

const EventDataBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

const EventDataItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
  text-align: center;

  @media screen and (min-width: ${breakpoints.md}) {
    flex: 1 0 50%;
    text-align: left;
  }
`;

const DateComponent = styled.section`
  font-size: 26px;
  font-weight: 500;
  line-height: 88%;
  padding-left: 0;
  width: 100%;
  text-align: center;
  letter-spacing: 3px;

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 18px;
    letter-spacing: 0;
    text-align: center;
  }

  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 26px;
    line-height: 88%;
    letter-spacing: 16px;
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 32px;
    line-height: 88%;
    letter-spacing: 12px;
  }
`;

const DateHighlight = styled.span`
  color: ${theme.accent};
`;

const DateLocation = styled.span`
  font-size: 36px;
  font-weight: 600;
  line-height: 72px;
  letter-spacing: 7px;
`;

const StyledLogo = styled.img`
  max-width: 70%;

  @media screen and (max-width: ${breakpoints.md}) {
    max-width: 50%;
    margin: 0 auto;
    text-align: center;
  }
`;

const SaveTheDate = styled(Button)`
  width: 100%;
  background-image: url(../images/boton.png);
`;

const Decorator = styled.img`
  position: absolute;
  transform: translateY(-50%);
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  left: ${(props) => `${props.left}` || null};
  top: ${(props) => `${props.top}` || null};
  bottom: ${(props) => `${props.bottom}` || null};
  right: ${(props) => `${props.right}` || null};
`;

const WhiteRabbit = styled.img`
  width: 52px;
  height: 30px;
  box-sizing: border-box;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 16px;
  margin-right: 16px;
  border-right: 4px solid ${theme.accent};
`;

const Polygon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 16px;
`;

export default Hero;
