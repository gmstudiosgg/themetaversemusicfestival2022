import React, { useState, Fragment } from "react";
import Button from "../Button";
import { StaticImage } from "gatsby-plugin-image";
import { breakpoints } from "../../../utils/theme";
import styled from "styled-components";
import { days } from "../../../utils/days-data";
import DaySchedule from "../DaySchedule";
import {
  StyledLineUpSchedule,
  StyledLineUpHeader,
  StyledLineUpBody,
  StyledLineUpFooter,
  StyledLineUpBtn,
  StyledLineUpBtnSection,
  StyledLineUpLogo,
  StyledFullLineUpList,
  StyledEyeIcon,
  StyledTextHighLight,
  StyledArrowBtn,
  StyledBodyBtnSection,
  Decorator,
  StyledHeaderImg,
  StyledHeaderVector,
} from "./styles";
import Logo from "../../images/logo-navbar.svg";
import EyeVector from "../../images/Eye-Vector.svg";
import ArrowUp from "../../images/arrowUp-vector.svg";
import ArrowDown from "../../images/arrowDown-vector.svg";
import star from "../../images/star.svg";
import LineUpHeaderSvgGroup from "../../images/LineUpHeader-svgGroup.svg";
import LineUpBarLine from "../../images/LineUpBarLine-Vector.svg";
import LineUpBarLineInverted from "../../images/LineUpBarLineInverted-Vector.svg";
import RectangleLine from "../../images/Rectangle-line.svg";

// markup
const LineUpSchedule = (props) => {
  const [currentSection, setCurrentSection] = useState("schedule");
  const [currentDay, setCurrentDay] = useState(1);

  const handleDaySelection = (day) => {
    setCurrentDay(day);
  };

  const lineup = [
    {
      stageName: "The Evolution Stage (main stage)",
      artists: [
        "3LAU",
        "Akira the Don",
        "ALISON WONDERLAND",
        "Aluna (of AlunaGeorge)",
        "Amber van Day",
        "AUTOGRAF",
        "Benji Patterson",
        "Berry Galazka",
        "Chet Porter",
        "Cody Frost",
        "Conor Byrne",
        "Crooked Colours",
        "DEADMAU5",
        "Eyes Of Bel",
        "Harrison First",
        "Louis III",
        "Miya Miya",
        "NINA NESBITT",
        "PARIS HILTON + Special Guest",
        "PNAU",
        "RAC",
        "RUFUS DU SOL",
        "Russ",
        "SPOTTIE WIFI",
        "The Luna Tapes",
      ],
    },
    {
      stageName: "The Harrison Acoustic Stage",
      artists: [
        "ADAM BEATTIE",
        "ALABASTER De PLUME",
        "Amadis and The Ambassadors",
        "BEN WALKER & KIRSTY MERRYN",
        "DANA IMMANUEL & THE STOLEN BAND",
        "DIZRAELI",
        "Dan Korn",
        "Djanan Turan",
        "FLATS & SHARPS",
        "ICHI",
        "LEONIE EVANS",
        "LÈA MONDO",
        "M G BOULTER",
        "MARCUS BONFANTI IN THE DELTA TRIO",
        "MIKEY KENNEY & FRIENDS",
        "NICK HART & TOM DIPPER",
        "RIOGHNACH CONNOLLY & ELLIS DAVIES",
        "SHAMA RAHMAN",
        "The Turbans unplugged",
        "YOUNG WATERS",
      ],
    },
    {
      stageName: "Pychedelic Techno Stage",
      artists: [
        "Aaron Sevilla",
        "Bemet",
        "Chaim",
        "Christian Smith",
        "Drunken Kong",
        "Effective",
        "Kate Ozz",
        "MAGA",
        "Magit Cacoon",
        "ORII",
        "SAMRA",
        "Sawlead",
      ],
    },
    {
      stageName: "World Stage",
      artists: [
        "Brooke Sharkey",
        "Charlie G",
        "Isak's Island",
        "Lokyii",
        "Magnos",
        "Morski",
        "Nancy",
        "Ovy on the drums",
        "RENU",
        "Salmo",
        "Sofia Campos",
        "The Turbans",
      ],
    },
    {
      stageName: "Jazz Club",
      artists: [
        "Awale",
        "Ilario Ferrari trio",
        "Ray Gelato giants",
        "The British Collective",
      ],
    },
    {
      stageName: "OG Smash Stage",
      artists: [
        "BoomboxHead",
        "COCO MAMBA",
        "Connie Digital",
        "MAI World",
        "Mighty 33",
        "Sadandsolo",
        "Scrilla",
        "Studio Nouveau",
        "Vandal",
        "Virtunaut",
        "Will Jeurgens",
      ],
    },
  ];

  const lineupRaw = [
    "3LAU",
    "AARON SEVILLA",
    "ADAM BEATTIE",
    "AKIRA THE DON",
    "ALABASTER DE PLUME",
    "ALISON WONDERLAND",
    "ALUNA [OF ALUNAGEORGE]",
    "AMADIS AND THE AMBASSADORS",
    "AMBER VAN DAY",
    "AUTOGRAF",
    "AWALE",
    "BEMET",
    "BEN WALKER & KIRSTY MERRYN",
    "BENJI PATTERSON",
    "BERRY GALAZKA",
    "BOOMBOXHEAD",
    "BROOKE SHARKEY",
    "CHAIM",
    "CHARLIE G",
    "CHRISTIAN SMITH",
    "COCO MAMBA",
    "CODY FROST",
    "CONNIE DIGITAL",
    "CONOR BYRNE",
    "CROOKED COLOURS",
    "DAN KORN",
    "DANA IMMANUEL & THE STOLEN BAND",
    "DANNY TENAGLIA",
    "DEADMAU5",
    "DIZRAELI",
    "DJANAN TURAN",
    "DRUNKEN KONG",
    "EFFECTIVE",
    "EYES OF BEL",
    "FLATS & SHARPS",
    "HARRISON FIRST",
    "ICHI",
    "ILARIO FERRARI TRIO",
    "ISAK'S ISLAND",
    "KATE OZZ",
    "LÈA MONDO",
    "LEONIE EVANS",
    "LOKYII",
    "LOUIS III",
    "M G BOULTER",
    "MAGA",
    "MAGIT CACOON",
    "MAGNOS",
    "MAI WORLD",
    "MARCUS BONFANTI IN THE DELTA TRIO",
    "MIGHTY 33",
    "MIKEY KENNEY & FRIENDS",
    "MIYA MIYA",
    "MORSKI",
    "NANCY",
    "NICK HART & TOM DIPPER",
    "NINA NESBITT",
    "ORII",
    "OVY ON THE DRUMS",
    "PARIS HILTON",
    "RAY GELATO GIANTS",
    "RENU",
    "RIOGHNACH CONNOLLY & ELLIS DAVIES",
    "RIZ LA VIE",
    "SADANDSOLO",
    "SAMRA",
    "SAWLEAD",
    "SCRILLA",
    "SHAMA RAHMAN",
    "SOFIA CAMPOS",
    "STUDIO NOUVEAU",
    "THE BRITISH COLLECTIVE",
    "THE LUNA TAPES",
    "THE TURBANS",
    "THE TURBANS UNPLUGGED",
    "VANDAL",
    "VIRTUNAUT",
    "WILL JEURGENS",
    "YOUNG WATERS",
  ];

  return (
    <StyledLineUpSchedule id="lineup">
      <StyledLineUpHeader>
        <StyledHeaderVector
          src={RectangleLine}
          width="1440px"
          height="22px"
          alignSelf="flex-start"
          left="-65px"
          position="relative"
        />
        <StyledHeaderVector
          src={LineUpBarLine}
          width="469px"
          height="22px"
          alignSelf="flex-end"
          justifySelf="flex-end"
        />
        <StyledHeaderImg src={LineUpHeaderSvgGroup} />
        {/* <Decorator src={star} width="22" height="62" />
        <Decorator src={star} width="22" height="62" />
        <Decorator
          src={star}
          top="50%"
          left="-60px"
          width="22px"
          height="62px"
        /> */}
        <StyledLineUpLogo src={Logo} />
        <StyledLineUpBtnSection>
          <StyledLineUpBtn
            onClick={() => setCurrentSection("lineup")}
            label={"⟶ Full Lineup"}
          >
            {"FULL LINE UP"}
          </StyledLineUpBtn>
          {days.map((dayInfo, i) => (
            <StyledLineUpBtn
              className={currentDay === i + 1 ? "selected" : ""}
              onClick={() => {
                handleDaySelection(i + 1);
              }}
              label={`⟶ Day 0${i + 1}`}
            >
              {`${dayInfo.date}`}
            </StyledLineUpBtn>
          ))}
        </StyledLineUpBtnSection>
      </StyledLineUpHeader>

      <StyledLineUpBody>
        <StyledFullLineUpList className="raw-lineup">
          {lineupRaw.map((artist, key) => (
            <>
              <span key={key}>{artist}</span>
              <StyledEyeIcon src={EyeVector} />
            </>
          ))}
        </StyledFullLineUpList>
        <StyledBodyBtnSection>
          <StyledArrowBtn src={ArrowUp} />
          <StyledArrowBtn src={ArrowDown} />
        </StyledBodyBtnSection>
      </StyledLineUpBody>
      <StyledLineUpFooter>
        <StyledLineUpBtnSection>
          <StyledLineUpBtn
            onClick={() => setCurrentSection("lineup")}
            label={"⟶ Full Lineup"}
          >
            {"FULL LINE UP"}
          </StyledLineUpBtn>
          {days.map((dayInfo, i) => (
            <StyledLineUpBtn
              className={currentDay === i + 1 ? "selected" : ""}
              onClick={() => {
                handleDaySelection(i + 1);
              }}
              label={`⟶ Day 0${i + 1}`}
            >
              {`${dayInfo.date}`}
            </StyledLineUpBtn>
          ))}
        </StyledLineUpBtnSection>
        <StyledHeaderVector
          src={LineUpBarLineInverted}
          width="469px"
          height="22px"
          alignSelf="flex-start"
          justifySelf="flex-start"
          marginTop="285px"
        />
        <StyledHeaderVector
          src={RectangleLine}
          width="1440px"
          height="22px"
          alignSelf="flex-start"
          left="-65px"
          position="relative"
        />
      </StyledLineUpFooter>

      {/* <section
        className={`${currentSection} ${
          currentSection === "schedule" ? `day-${currentDay}` : ""
        } content-toggler`}
      >
        {currentSection === "coming-soon" && (
          <>
            <h1>COMING SOONG</h1>
          </>
        )}
        {currentSection === "schedule" && (
          <>
            <Button
              onClick={() => setCurrentSection("lineup")}
              label={"⟶ Full Lineup"}
            />
            <div className="day-selector">
              {days.map((dayInfo, i) => (
                <Button
                  className={currentDay === i + 1 ? "selected" : ""}
                  onClick={() => {
                    handleDaySelection(i + 1);
                  }}
                  label={`⟶ Day 0${i + 1}`}
                />
              ))}
            </div>
            <h2 className="column-title">SCHEDULE</h2>
            <DaySchedule
              dayNumber={currentDay}
              dayInfo={days[currentDay - 1]}
            />
          </>
        )}
        {currentSection === "lineup" && (
          <> */}
      {/* <Button
                        type={'black'}
                        label={'⟶ Schedule'}
                        onClick={() => (setCurrentSection('schedule'))}
                    /> */}
      {/* <h2 className="column-title">FULL LINEUP</h2>
            <section className="lineup-body"> */}
      {/* {lineup.map((stage, key) => (
                            <div key={key} className="stage-lineup">
                                <h3>{stage.stageName}</h3>
                                <p>
                                    {stage.artists.map((artist,key) => (
                                        <>
                                            <span key={key}>{artist}</span>
                                            <span className="dash"> / </span>
                                        </>
                                    ))}
                                </p>
                            </div>
                        ))} */}
      {/* <p className="raw-lineup">
                {lineupRaw.map((artist, key) => (
                  <>
                    <span key={key}>{artist}</span>
                    <span className="dash"> / </span>
                  </>
                ))}
              </p>
            </section>
          </>
        )}
      </section> */}
    </StyledLineUpSchedule>
  );
};

/*<div>


 background: black;
  .content-toggler {
    display: flex;
    min-height: 850px;
    .button {
      color: white;
      border: 1px solid #b836a9;
      max-width: 232px;
      margin-bottom: 32px;
      transition: 0.1s ease-in-out all;
      @media screen and (max-width: ${breakpoints.md}) {
        margin-bottom: 30px;
        width: 100%;
      }
      &:hover {
        color: black;
        background: white;
        border-color: transparent;
      }
    }
    .column-title {
      font-weight: 500;
      font-size: 81px;
      position: relative;
      z-index: 1;
      @media screen and (max-width: ${breakpoints.md}) {
        font-size: 54px;
      }
    }
  }
  .schedule {
    padding: 52px 70px;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: 0.25s ease-in-out all;
    @media screen and (max-width: ${breakpoints.md}) {
      padding: 52px 24px;
    }
    .day-selector {
      display: flex;
      .button {
        margin-right: 16px;
        @media screen and (max-width: ${breakpoints.md}) {
          margin-right: 4px;
        }
        &.selected {
          background: white;
          color: black;
          border-color: transparent;
        }
      }
    }
    &.day-1 {
      background: #0025ae;
    }
    &.day-2 {
      background: #2a5b63;
    }
    &.day-3 {
      background: #3f00ae;
    }
    &.day-4 {
      background: #6d43c1;
    }
    .column-title {
      margin-bottom: 50px;
    }
  }
  .lineup {
    height: unset;
    padding: 52px 0px 52px 70px;
    background: black;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: ${breakpoints.md}) {
      padding: 52px 24px;
      flex-direction: column;
    }
    .raw-lineup {
      font-size: 42px;
      line-height: 58px;
      width: 80%;
      @media screen and (max-width: ${breakpoints.md}) {
        font-size: 27px;
        line-height: 50px;
        span {
          display: block;
          &.dash {
            display: none;
          }
        }
      }
    }
    .stage-lineup {
      margin-top: 20px;
      margin-bottom: 120px;
      h3 {
        font-size: 52px;
      }
      p {
        margin-top: 20px;
        font-size: 38px;
        line-height: 80px;
        width: 75%;
        opacity: 0.7;
        @media screen and (max-width: ${breakpoints.md}) {
          font-size: 27px;
          line-height: 50px;
        }
      }
    }
    .column-title {
      margin-bottom: 40px;
      color: white;
      @media screen and (max-width: ${breakpoints.md}) {
        margin-bottom: 20px;
      }
    }
  } 
</div> */
export default LineUpSchedule;
