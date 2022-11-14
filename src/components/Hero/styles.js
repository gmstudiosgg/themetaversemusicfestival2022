import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";
import Button from "../Button/Button";

export const StyledHero = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LogoContainer = styled.div`
  margin-bottom: 24px;
  @media screen and (min-width: ${breakpoints.md}) {
    padding: 0 33px;
  }
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: auto;
`;

export const EventDetails = styled.div`
  position: relative;
  padding: 0 24px;
  border-left: 3px solid white;
  border-right: 3px solid white;

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 0 121px;
  }
`;

export const EventData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 9px;
  @media screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const EventDataBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-top: 32px;
    flex-direction: row;
  }
`;

export const EventDataItem = styled.div`
  flex: 0 0 100%;
  width: 100%;
  text-align: center;

  @media screen and (min-width: ${breakpoints.md}) {
    flex: 1 0 50%;
    text-align: left;
  }
`;

export const DateComponent = styled.section`
  font-size: 9px;
  font-weight: 500;
  line-height: 16px;
  margin-top: 24px;
  font-family: "Yapari Expanded";
  padding-left: 0;
  width: 100%;
  text-align: justify;

  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 19px;
    text-align: justify;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 24px;
    letter-spacing: 4px;
    line-height: 120%;
    width: 100%;
  }
`;

export const DateHighlight = styled.span`
  color: ${theme.accent};
`;

export const DateLocation = styled.span`
  font-family: "Yapari";
  font-size: 13px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: justify;

  @media screen and (min-width: ${breakpoints.l}) {
    font-size: 26px;
    line-height: 72px;
    letter-spacing: 5px;
  }

  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: 32px;
    line-height: 72px;
    letter-spacing: 11px;
  }
`;

export const StyledLogo = styled.img`
  display: none;
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
    max-width: 60%;
    text-align: center;
  }
`;

export const SaveTheDate = styled(Button)`
  width: 100%;
  background-image: url(../images/boton.png);
`;

export const Decorator = styled.img`
  display: none;
  position: absolute;
  transform: translateY(-50%);
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  left: ${(props) => `${props.left}` || null};
  top: ${(props) => `${props.top}` || null};
  bottom: ${(props) => `${props.bottom}` || null};
  right: ${(props) => `${props.right}` || null};
  @media screen and (min-width: ${breakpoints.md}) {
    display: block;
  }
`;

export const WhiteRabbit = styled.img`
  width: 48px;
  box-sizing: border-box;
  padding-right: 8px;
  margin-right: 8px;
  border-right: 4px solid ${theme.accent};

  @media screen and (min-width: ${breakpoints.md}) {
    width: 52px;
    padding-right: 16px;
    margin-right: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

export const Polygon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 8px;
  @media screen and (min-width: ${breakpoints.md}) {
    margin-left: 16px;
  }
`;
