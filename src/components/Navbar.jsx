import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme, { breakpoints } from "../../utils/theme";
import { StaticImage } from "gatsby-plugin-image";
import twitter from "../images/Vector-3.svg";
import discord from "../images/Vector.svg";
import openSea from "../images/Vector-openSea.svg";

const Navbar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const Links = [
    {
      label: "ABOUT",
      targetId: "about",
    },
    {
      label: "LINEUP",
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
    <>
      <StyledNavbar className="navbar">
        <Nav>
          <div>
            <StaticImage src={"./../images/logo.svg"} height={140} />
          </div>

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
            <a
              href="https://twitter.com/decentraland"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon src={twitter} />
            </a>
            <a
              href="https://decentraland.org/discord/"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon src={discord} />
            </a>
            <a
              href="https://www.instagram.com/decentraland_foundation/"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon src={openSea} />
            </a>
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
    </>
  );
};

const StyledNavbar = styled.section`
  width: 100%;
  z-index: 100;
  position: fixed;

  /* Agregado fede */
  border-bottom: solid 3px ${theme.accent};
  display: flex;
  justify-content: space-between;
  /* ---------------- */

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
    /* ul {
      li {
        font-size: 64px;
        padding: 10px 0;
        border-bottom: 1px solid black;
        @media screen and (max-width: ${breakpoints.md}) {
          font-size: 48px;
        }
        a {
          -webkit-text-stroke: 1px black;
          color: transparent;
          &:hover {
            color: black;
          }
        }
      }
    } */
    &.open {
      bottom: 0;
      opacity: 1;
      pointer-events: unset;
    }
  }
  /* nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      justify-content: space-between;
      padding: 12px 80px;
      @media screen and (max-width: ${breakpoints.md}) {
        display: none;
      }
      li {
        font-size: 23px;
        a {
          cursor: pointer;
          font-family: "SpaceMono";
          opacity: 0.8;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  } */
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 24px;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 62px;
`;

const MenuItem = styled.li`
  font-family: "Yapari";
  font-size: 16px;
  font-weight: 700;
  padding-left: 40px;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export default Navbar;
