import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";

export const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 100;
`;

export const StyledNavbar = styled.section`
  position: relative;
  border-bottom: solid 5px ${theme.white};
  display: flex;
  justify-content: space-between;
`;

export const SocialIcon = styled.a`
  margin-left: 24px;
  cursor: crosshair;
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

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px;
  @media screen and (min-width: ${breakpoints.md}) {
    padding: 18px 62px;
  }
`;

export const LogoContainer = styled.a`
  cursor: crosshair;
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
`;

export const MenuItem = styled.li`
  font-family: "Yapari";
  font-size: 16px;
  font-weight: 700;
  padding-left: 40px;
  letter-spacing: 2px;
  cursor: crosshair;

  a {
    transition: color 0.5s ease;
  }

  a:hover {
    color: ${theme.accent};
  }
`;

export const MenuList = styled.ul`
  display: none;
  justify-content: space-between;
  @media screen and (min-width: ${breakpoints.md}) {
    display: flex;
  }
`;

export const StyledBorder = styled.div`
  width: 100%;
  height: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 101;
  background-image: url("/navbar-border.png");
`;
