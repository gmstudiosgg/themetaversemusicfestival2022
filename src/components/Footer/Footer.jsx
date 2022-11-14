import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Discord } from "../icons/Vector-Discord.js";
import { Twitter } from "../icons/Vector-Twitter.js";
import { OpenSea } from "../icons/Vector-openSea.js";
import theme, { breakpoints } from "../../../utils/theme";
import dclLogo from "../../images/logo-dcl.svg";
import { Instagram } from "../icons/Vector-Instagram.js";

import {
  StyledFooter,
  StyledLogoContainer,
  StyledLogo,
  StyledSocialLinksContainer,
  StyledLinksList,
  StyledLinks,
  PageLink,
  StyledSocialLinks,
  StyledSocialLink,
} from "./styles";

const Footer = (props) => {
  const pages = [
    {
      name: "TERMS & SERVICES",
      url: "https://decentraland.org/terms/",
    },
    {
      name: "PRIVACY POLICIES",
      url: "https://decentraland.org/privacy/",
    },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      file: Twitter,
      url: "https://twitter.com/decentraland",
    },
    {
      name: "Instagram",
      file: Instagram,
      url: "https://www.instagram.com/decentraland_foundation/",
    },
    {
      name: "Discord",
      file: Discord,
      url: "https://decentraland.org/discord",
    },
  ];

  return (
    <StyledFooter>
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

export default Footer;
