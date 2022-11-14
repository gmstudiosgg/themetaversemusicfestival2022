import styled from "styled-components";
import theme from "../../../utils/theme";

export const StyledBannerMarquee = styled.div`
  background: black;
  font-size: 12px;
  position: relative;
  border-top: ${(props) =>
    !props.noBorderTop ? `solid 2px ${theme.accent}` : "none"};
  border-bottom: ${(props) =>
    !props.noBorderBottom ? `solid 2px ${theme.accent}` : "none"};
  line-height: 24px;
  .marquee-container {
    padding: 12px 0;
    .overlay {
      display: none;
    }
    .marquee {
      min-width: unset;
    }
    * {
      font-family: "Yapari expanded";
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
    }
  }
`;

export const DateHighlight = styled.span`
  color: ${theme.accent};
  padding-right: 8px;
  padding-left: 8px;
`;
