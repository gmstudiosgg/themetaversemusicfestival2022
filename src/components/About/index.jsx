import React from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";
import AboutThinIcon from "../../images/about-thin-icon.png";
import Logo from "../../images/logo-navbar.svg";
import AboutMobileThinIcon from "../../images/about-mobile-thin-icon.png";
import EyeTriengleIcon from "../../images/eye-triangle-icon.svg";
import AboutTitleImg from "../../images/about-title.png";
import Rabbit from "../../images/rabbit.gif";
import { Container } from "../Container";

const About = (props) => {
  return (
    <Container>
      <StyledAbout>
        <AboutHeader>
          {" "}
          <AboutTitle src={AboutTitleImg} />
          <RabbitAnimation src={Rabbit} alt="Follow the white rabbit" width={200} />
        </AboutHeader>
        <Aboutbody>
          <AboutBodyImgContainer>
            <AboutBodyImg>
              <AboutBodyCodebar src={AboutThinIcon} />
              <AboutMobileBodyCodebar src={AboutMobileThinIcon} />
              <AboutBodyIlluminati src={EyeTriengleIcon} width="76px" height="76px" />
            </AboutBodyImg>
          </AboutBodyImgContainer>
          <AboutBodyText>
            <AboutBodyParagraph>
              A four-day celebration of music,{" "}
              <TextHighlight>
                culture and creativity in the virtual social world
              </TextHighlight>{" "}
              of Decentraland, the Metaverse Festival is a grand collision of
              light, sound and portable toilets.
            </AboutBodyParagraph>
            <br />
            <AboutBodyParagraph>
              It’s the first event of its kind – a fully decentralized
              celebration of music that offers a weird and wonderful brew of
              world-class headline acts, mind blowing stages, games, exclusive
              artist merch, collectibles and more.
            </AboutBodyParagraph>
            <br />
            <AboutBodyParagraph>
              So, on <TextHighlight>October 21</TextHighlight> , dress your
              avatar in your very best wearables and jump into an experience
              like no other.
            </AboutBodyParagraph>
            <br />
            <AboutBodyParagraph>
              And if this is your first time in the virtual world, be sure to
              take a look at our Festival FAQs, which explain how you can be a
              part of the fun.
            </AboutBodyParagraph>
          </AboutBodyText>
        </Aboutbody>
        <AboutFooter>
          <AboutButtonContainer>
            <AboutButtonLink>
              WE CAN'T WAIT TO SEE YOU IN THE METAVERSE!
              <ButtonDecorator src={Logo} />
            </AboutButtonLink>
          </AboutButtonContainer>
        </AboutFooter>
      </StyledAbout>
    </Container>
  );
};

const StyledAbout = styled.div`
  margin: auto;
  padding: 96px 0;
`;

const AboutHeader = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 56px;
`;

const AboutTitle = styled.img`
  width: 100%;
  height: auto;
  @media screen and (min-width: ${breakpoints.md}) {
    width: 90%;
  }
  @media screen and (min-width: ${breakpoints.l}) {
    width: 80%;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    width: 70%;
  }
  @media screen and (min-width: ${breakpoints.xxl}) {
    width: 60%;
  }
`;

const RabbitAnimation = styled.img`
  display: none;

  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`

const Aboutbody = styled.section`
  display: flex;
  justify-content: space-between;
`;

const AboutBodyCodebar = styled.img`
  display: none;
  height: 100%;
  padding-bottom: 38px;
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`;

const AboutMobileBodyCodebar = styled.img`
  height: 62vh;
  display: block;

  @media screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

const AboutBodyIlluminati = styled.img`
  display: none;
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
    padding
  }
`;

const AboutBodyText = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  line-height: 22.5px;
  letter-spacing: 0.1em;
  @media screen and (min-width: ${breakpoints.md}) {
      font-size: 18px;
      line-height: 27px;
      font-weight: 400;
      padding-right: 64px;
  }
`;

const AboutBodyParagraph = styled.p`
  font-family: "Roboto", sans-serif;
  max-width: 464px;
`;

const AboutBodyImgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AboutBodyImg = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 100%;
  padding-right: 40px;
  @media screen and (min-width: ${breakpoints.md}) {
    padding: 5px 0;
    width: 70px;
    height: 479px;
    margin-left: 8px;
  }
`;

const TextHighlight = styled.span`
  color: ${theme.accent};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

const AboutFooter = styled.section`
`;

const AboutButtonContainer = styled.div`
  margin-top: 32px;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 72px;
  }
`;

const AboutButtonLink = styled.button`
  unset: all;
  position: relative;
  width: 100%;
  height: auto;
  background: transparent;
  font-size: 12px;
  letter-spacing: 120%;
  font-family: "Yapari Expanded";
  padding: 16px 32px;
  border: 4px solid ${theme.white};
  border-radius: 120px;
  transition: background-image color 0.4s ease;
  backdrop-filter: blur(2px);
  img {
    -webkit-animation: rotating 10s linear infinite;
    -moz-animation: rotating 10s linear infinite;
    -ms-animation: rotating 10s linear infinite;
    -o-animation: rotating 10s linear infinite;
    animation: rotating 10s linear infinite;
  }

  &:hover {
    color: black;

    img {
      -webkit-animation: rotating 10s linear infinite;
      -moz-animation: rotating 10s linear infinite;
      -ms-animation: rotating 10s linear infinite;
      -o-animation: rotating 10s linear infinite;
      animation: rotating 10s linear infinite;
    
      @keyframes rotating {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    font-size: 22px;
    padding: 32px 72px;

    img {
      -webkit-animation: unset;
      -moz-animation: unset;
      -ms-animation: unset;
      -o-animation: unset;
      animation: unset;
    }
  }

  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 26px;
    padding: 48px 120px;
  }
`;

const ButtonDecorator = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 27px;
  @media screen and (min-width: ${breakpoints.md}) {
    width: 47px;
    height: 52px;
    top: 0;
    right: -5px;
}
`

export default About;
