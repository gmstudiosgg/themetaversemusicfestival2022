import React from "react";
import styled from "styled-components";
import Button from "./../components/Button";
// import AboutImage from "./../images/about.png";
import { breakpoints } from "../../utils/theme";
import theme from "../../utils/theme";
import AboutThinIcon from "../images/about-thin-icon.png";
import EyeTriengleIcon from "../images/eye-triangle-icon.svg";

// const About = (props) => {
//   return (
//     <StyledAbout id="about" className="what-is-metaverse">
//       <div className="about-content">
//         <h2>
//           Welcome
//           <br /> to the <br />
//           Metaverse Festival
//         </h2>
//         <p>
//           A four-day celebration of music, culture and creativity in the virtual
//           social world of Decentraland, the Metaverse Festival is a grand
//           collision of light, sound and portable toilets.
//         </p>
//         <p>
//           It’s the first event of its kind – a fully decentralized celebration
//           of music that offers a weird and wonderful brew of world-class
//           headline acts, mind blowing stages, games, exclusive artist merch,
//           collectibles and more.
//         </p>
//         <p>
//           So, on October 21, dress your avatar in your very best wearables and
//           jump into an experience like no other.
//         </p>
//         <p>
//           And if this is your first time in the virtual world, be sure to take a
//           look at our Festival FAQs, which explain how you can be a part of the
//           fun.
//         </p>
//         <p>We can’t wait to see you in the metaverse!</p>
//         <Button
//           download
//           href={"MusicFestivalFAQs.pdf"}
//           label={"⟶ Festival FAQs"}
//           type={"black"}
//         />
//       </div>
//       <div className="about-image-container">
//         <div
//           className="about-image"
//           // style={{ backgroundImage: `url('${AboutImage}')` }}
//           style={{
//             backgroundImage: `url('${`https://via.placeholder.com/150`}')`,
//           }}
//         />
//         {/* <img src={AboutImage} alt="Welcome to Metaverse"/> */}
//       </div>
//     </StyledAbout>
//   );
// };

// const StyledAbout = styled.div`
//   background: #f7f2ed;
//   padding: 52px 70px;
//   display: flex;
//   @media screen and (max-width: ${breakpoints.md}) {
//     flex-direction: column;
//     padding: 52px 24px;
//   }
//   .about-content {
//     width: 50%;
//     position: relative;
//     z-index: 1;
//     @media screen and (max-width: ${breakpoints.md}) {
//       width: 100%;
//     }
//     h2,
//     p {
//       color: black;
//     }
//     h2 {
//       font-size: 81px;
//       margin-bottom: 72px;
//       font-family: "SpaceMono";
//       text-transform: uppercase;
//       font-weight: 400;
//       @media screen and (max-width: ${breakpoints.l}) {
//         font-size: 62px;
//       }
//       @media screen and (max-width: ${breakpoints.md}) {
//         font-size: 54px;
//       }
//     }
//     p {
//       font-size: 16px;
//       line-height: 23px;
//       margin-bottom: 22px;
//       font-family: "Inter";
//     }
//     .button {
//       margin-top: 120px;
//       border: 1px solid #b836a9;
//     }
//   }
//   .about-image-container {
//     width: 50%;
//     display: flex;
//     align-items: baseline;
//     justify-content: center;
//     position: relative;
//     @media screen and (max-width: ${breakpoints.md}) {
//       height: 300px;
//       width: 100%;
//       left: 20px;
//     }
//     .about-image {
//       width: 100%;
//       height: 100%;
//       position: absolute;
//       background-size: 90%;
//       background-repeat: no-repeat;
//       background-position: top right;
//       position: relative;
//       top: 30px;
//       right: 30px;
//       @media screen and (max-width: ${breakpoints.md}) {
//         background-size: contain;
//         background-position: center;
//       }
//     }
//     @media screen and (max-width: ${breakpoints.md}) {
//       margin-top: 80px;
//     }
//   }
// `;

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
