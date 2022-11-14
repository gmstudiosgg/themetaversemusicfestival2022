import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 48px 24px;
  backdrop-filter: blur(32px);
  @media screen and (min-width: ${breakpoints.l}) {
    padding: 48px 62px 40px;
    flex-direction: row;
  }
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLogo = styled.img`
  height: 35px;
  margin-bottom: 32px;
  @media screen and (min-width: ${breakpoints.l}) {
    margin-bottom: unset;
    margin-right: 78px;
  }
`;

export const StyledSocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  vertical-align: center;
`;

export const StyledLinks = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledLinksList = styled.ul`
  display: flex;
  align-items: center;
  vertical-align: center;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.l}) {
    flex-direction: row;
  }
`;

export const PageLink = styled.li`
  font-family: "Yapari";
  text-align: center;
  line-height: 22px;
  margin: 16px 0;

  a {
    transition: all 0.4s ease;
    cursor: crosshair;
  }
  a:hover {
    color: ${theme.accent};
  }

  @media screen and (min-width: ${breakpoints.l}) {
    margin: unset;
    max-width: 160px;
    margin-right: 67px;
    text-align: left;
  }
`;

export const StyledSocialLinks = styled.ul`
  display: flex;
  vertical-align: center;
  align-items: center;
  justify-content: flex-end;
  margin-top: 32px;

  a svg {
    width: 25px;
    height: 25px;
  }

  /* @media screen and (min-width: ); */
`;

export const StyledSocialLink = styled.li`
  margin-left: 20px;
  margin-right: 20px;

  svg path {
    transition: all 0.4s ease;
  }
  svg:hover {
    path {
      fill: ${theme.accent};
    }
  }
  a {
    cursor: crosshair;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    margin-right: unset;
    margin-left: 40px;
  }
`;
