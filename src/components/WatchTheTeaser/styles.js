import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";

export const TextHighlight = styled.span`
  color: ${theme.accent};
`;

export const WatchTeaser = styled.div`
  display: flex;
  backdrop-filter: blur(12px);
  justify-content: center;
  line-height: 22px;
  font-family: "Yapari Expanded";
  font-weight: 500;
  letter-spacing: 0.11em;
  padding: 120px 0;
  cursor: crosshair;
  background: url("/teaser-banner.png");
  background-position: center;
  background-attachment: fixed;

  p {
    font-size: 10px;
  }
  transition: background 0.5s ease;

  span {
    padding-right: 8px;
    padding-left: 8px;
    transition: padding 0.4s ease;
  }

  &:hover {
    span {
      padding-right: 4px;
      padding-left: 4px;
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    p {
      font-size: 24px;
    }
  }
`;
