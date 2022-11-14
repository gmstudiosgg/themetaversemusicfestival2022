import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Twitter } from "../icons/Vector-Twitter.js";
import { Discord } from "../icons/Vector-Discord.js";
import { Instagram } from "../icons/Vector-Instagram.js";
import border from "../../images/navbar-border.png";
import {
  Header,
  StyledNavbar,
  SocialIcon,
  Nav,
  LogoContainer,
  MenuItem,
  MenuList,
  StyledBorder,
} from "./styles";

const Navbar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const Links = [
    {
      label: "ABOUT",
      targetId: "about",
    },
    {
      label: "LINE UP",
      targetId: "lineup",
    },
    {
      label: "STAGES",
      targetId: "stages",
    },
    {
      label: "EXPERIENCES",
      targetId: "experiences",
    },
    {
      label: "SITEMAP",
      targetId: "sitemap",
    },
    {
      label: "FAQ",
      targetId: "faq",
    },
    // {
    //   label: 'SPONSORS',
    //   targetId: 'sponsors'
    // },
  ];

  const scrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView();
    }
  };
  return (
    <Header>
      <StyledNavbar className="navbar">
        <Nav>
          <LogoContainer href="#">
            <StaticImage src={"./../images/logo-navbar.svg"} height={140} />
          </LogoContainer>

          <div>
            <MenuList>
              {Links.map((link, i) => (
                <MenuItem key={i}>
                  <a
                    onClick={() => {
                      scrollTo(link.targetId);
                    }}
                  >
                    {link.label}
                  </a>
                </MenuItem>
              ))}
            </MenuList>
          </div>
          <div>
            <SocialIcon
              href="https://twitter.com/decentraland"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/decentraland_foundation/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </SocialIcon>
            <SocialIcon
              href="https://decentraland.org/discord/"
              target="_blank"
              rel="noreferrer"
            >
              <Discord />
            </SocialIcon>
          </div>
        </Nav>
      </StyledNavbar>
      <StyledBorder src={border} />
    </Header>
  );
};

export default Navbar;
