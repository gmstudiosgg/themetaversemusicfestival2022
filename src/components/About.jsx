import React from "react";
import styled from "styled-components";
import theme from "../../utils/theme";
import AboutThinIcon from "../images/about-thin-icon.png";
import EyeTriengleIcon from "../images/eye-triangle-icon.svg";

const About = (props) => {
  return (
    <>
      <StyledAbout>
        <AboutHeader>
          {" "}
          <AboutTitle>
            WELCOME <br /> TO THE <br />
            <TitleTextHighlight>METAVERSE</TitleTextHighlight>
            <br />
            FESTIVAL{" "}
          </AboutTitle>
          <img src="https://via.placeholder.com/150" />
        </AboutHeader>
        <Aboutbody>
          <AboutBodyImgContainer>
            <AboutBodyImg>
              <AboutBodyIcon src={AboutThinIcon} width="18px" height="371px" />
              <AboutBodyIcon src={EyeTriengleIcon} width="76px" height="76px" />
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
      </StyledAbout>
    </>
  );
};
const StyledAbout = styled.div`
  margin: auto 174px;
  padding: 7rem 0;
`;
const AboutHeader = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 56px;
`;

const AboutTitle = styled.h2`
  font-family: "Yapari";
  font-weight: 300;
  font-size: 58px;
  letter-spacing: 0.2em;
`;

const Aboutbody = styled.section`
  display: flex;
  justify-content: space-between;
`;

const AboutBodyIcon = styled.img``;

const AboutBodyText = styled.div`
  font-family: "Roboto", sans-serif;
  width: 60%;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  letter-spacing: 0.1em;
  padding-right: 64px;
`;

const AboutBodyParagraph = styled.p`
  font-family: "Roboto", sans-serif;
  max-width: 464px;
`;

const AboutBodyImgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
`;

const AboutBodyImg = styled.div`
  width: 70px;
  height: 479px;
  justify-content: space-between;
  padding: 5px 0;
  margin-left: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleTextHighlight = styled.span`
  font-family: "Yapari Wide";
  color: ${theme.accent};
  font-size: 58px;
  font-weight: 500;
  letter-spacing: 0.2em;
`;

const TextHighlight = styled.span`
  color: ${theme.accent};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

// --------------------------------------------------
// Necesito:
//

// assets:
// .gif del conejo
// Estrellas (las tengo en otro componenete
//---------------------------------------------------

export default About;
