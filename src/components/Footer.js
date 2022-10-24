import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Discord } from "./icons/Vector-Discord.js";
import { Twitter } from "./icons/Vector-Twitter.js";
import { OpenSea } from "./icons/Vector-openSea";
import theme, { breakpoints } from "../../utils/theme";
import dclLogo from "../images/logo-dcl.svg";

const Footer = (props) => {
  const pages = [
    {
      name: "TERM & SERVICES",
      url: "#",
    },
    {
      name: "PRIVACY POLICIES",
      url: "#",
    },
    {
      name: "PRESS KIT",
      url: "#",
    },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      file: Twitter,
      url: "https://twitter.com/decentraland",
    },
    {
      name: "Discord",
      file: Discord,
      url: "https://discord.com/invite/JV8CbCx",
    },
    {
      name: "Open Sea",
      file: OpenSea,
      // cambiar url a correcta
      url: "https://www.reddit.com/r/decentraland/",
    },
  ];
  return (
    <StyledFooter>
      {/* <div className="primary-links">
            <a href="MusicFestivalGeneralInfo.pdf" download>Legal Information</a>
            <a href="MusicFestivalGeneralInfo.pdf" download>Press Kit</a>

        </div> */}
      <StyledLogoContainer>
        <a href="https://play.decentraland.org/" target="_blank">
          <StyledLogo alt={"Decentraland Logo"} src={dclLogo} />
        </a>
      </StyledLogoContainer>
      <StyledLinks>
        <StyledLinksList>
          {pages.map((page) => (
            <PageLink key={page.name}>
              <a target="_blank" href={page.url}>
                {page.name}
              </a>
            </PageLink>
          ))}
        </StyledLinksList>
      </StyledLinks>
      <StyledSocialLinksContainer>
        <StyledSocialLinks>
          {socialLinks.map(({ name, url, file: File }) => (
            <StyledSocialLink key={name}>
              <a height={100} target="_blank" href={url}>
                <File />
                {/* <img src={socialLink.file} width={24} height={24} /> */}
              </a>
            </StyledSocialLink>
          ))}
        </StyledSocialLinks>
      </StyledSocialLinksContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 48px 62px 40px;
  background-color: ${theme.black};
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 35px;
  margin-right: 78px;
`;

const StyledSocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
  vertical-align: center;
`;

const StyledLinks = styled.div`
  display: flex;
  flex: 1;
`;

const StyledLinksList = styled.ul`
  display: flex;
  align-items: center;
  vertical-align: center;
`;

const PageLink = styled.li`
  max-width: 160px;
  margin-right: 67px;
  line-height: 22px;
  a {
    transition: all 0.4s ease;
  }
  a:hover {
    color: ${theme.accent};
  }
`;

const StyledSocialLinks = styled.ul`
  display: flex;
  vertical-align: center;
  align-items: center;
  justify-content: flex-end;

  a svg {
    width: 25px;
    height: 25px;
  }
`;

const StyledSocialLink = styled.li`
  margin-left: 40px;
  svg path {
    transition: all 0.4s ease;
  }
  svg:hover {
    path {
      fill: ${theme.accent};
    }
  }
`;

export default Footer;
