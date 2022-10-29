import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../utils/theme";
import { StaticImage } from "gatsby-plugin-image";
import { Twitter } from "../components/icons/Vector-Twitter.js";
import { Discord } from "../components/icons/Vector-Discord.js";
import { OpenSea } from "../components/icons/Vector-openSea.js";
import { border } from "../images/navbar-border.png";

const Navbar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
      label: "MAP",
      targetId: "map",
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
          <LogoContainer>
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
              href="https://decentraland.org/discord/"
              target="_blank"
              rel="noreferrer"
            >
              <Discord />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/decentraland_foundation/"
              target="_blank"
              rel="noreferrer"
            >
              <OpenSea />
            </SocialIcon>
          </div>
        </Nav>
        <div
          className="mobile-toggle"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`mobile-navbar ${isMobileMenuOpen ? "open" : ""}`}>
          <StaticImage
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className="close-menu-icon"
            src={"./../images/close_menu_icon.png"}
            alt="close"
            title="close"
          />
          <ul>
            {Links.map((link, i) => (
              <li key={i}>
                <a
                  onClick={() => {
                    scrollTo(link.targetId);
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </StyledNavbar>
      <StyledBorder src={border} />
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 100;
`

const StyledNavbar = styled.section`
  position: relative;
  
  border-bottom: solid 5px ${theme.white};
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${breakpoints.md}) {
    bottom: 0;
    height: 52px;
    background: #eefe56;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:before {
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    content: "";
    @media screen and (max-width: ${breakpoints.md}) {
      display: none;
    }
  }
  .mobile-toggle {
    display: none;
    width: 80px;
    @media screen and (max-width: ${breakpoints.md}) {
      display: unset;
    }
    div {
      width: 80px;
      height: 1px;
      background: black;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .mobile-navbar {
    width: 100vw;
    height: 100vh;
    bottom: -100vh;
    position: absolute;
    background: #eefe56;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s ease-in-out all;
    padding: 24px;
    .close-menu-icon {
      width: 50px;
      margin-bottom: 30px;
    }
    &.open {
      bottom: 0;
      opacity: 1;
      pointer-events: unset;
    }
  }
`;

const SocialIcon = styled.a`
  margin-left: 24px;
  svg {
    width: 24px;
    height: 24px;

    path {
      transition: fill 0.4s ease;
    }

    :hover {
      path {
        fill: ${theme.accent};
      }
    }
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 62px;
`;

const LogoContainer = styled.div`
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
`

const MenuItem = styled.li`
  font-family: "Yapari";
  font-size: 16px;
  font-weight: 700;
  padding-left: 40px;
  letter-spacing: 2px;

  a {
    transition: color 0.5s ease;
  }

  a:hover {
    color: ${theme.accent};
  }
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 101;
  background-image: url('/navbar-border.png');
`

export default Navbar;