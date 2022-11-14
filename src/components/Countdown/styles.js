import styled from "styled-components";
import theme, { breakpoints } from "../../../utils/theme";

export const StyledCountdown = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Yapari";
  width: 100%;
  max-width: 100%;
  padding-right: 16px;
  .days-wrapper {
    display: flex;
    justify-content: center;
  }
  .time-block {
    display: flex;
    flex-direction: column;
    text-align: center;
    .number {
      color: white;
      font-weight: 500;
      margin-bottom: 6px;
      font-size: 26px;

      @media screen and (min-width: ${breakpoints.md}) {
        font-size: 28px;
      }

      @media screen and (min-width: ${breakpoints.l}) {
        font-size: 36px;
      }
    }
    .label {
      text-align: center;
      color: white;
      font-size: 16px;
      @media screen and (max-width: ${breakpoints.md}) {
        font-size: 12px;
      }
    }
  }
`;
