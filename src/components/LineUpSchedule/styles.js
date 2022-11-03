import styled from "styled-components";

export const StyledLineUpSchedule = styled.div`
  margin-top: 48px;
  margin-bottom: 272px;
  margin-left: 64px;
  margin-right: 64px;
`;

// --------------  HEADER --------------------
export const StyledLineUpHeader = styled.section`
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLineUpBtnSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLineUpBtn = styled.button`
  /* Frame 3 */

  box-sizing: border-box;
  font-family: "Yapari wide";
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 29px 1px;
  gap: 10px;

  width: 232px;
  height: 70px;

  background: #000000;
  border: 3px solid #ffffff;
  /* sombra2 */

  box-shadow: 0px 0px 20px rgba(211, 207, 255, 0.7);
  border-radius: 58px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  color: #ffffff;

  transition: all 0.5s ease;

  &:hover {
    background: #ffffff;
    color: black;
  }
`;

//---------------- BODY  -----------------------
export const StyledLineUpBody = styled.section`
  height: auto;
`;

export const StyledFullLineUpList = styled.p`
  font-family: "Yapari Expanded";
  font-weight: 500;
  line-height: 80px;
  font-size: 32px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;

export const StyledTextHighLight = styled.span`
  font-family: "Yapari Expanded";
  font-weight: 700;
`;

// ------------ FOOTER  --------------------
export const StyledLineUpFooter = styled.section`
  height: 446px;
`;

// ----------- EXTRA  -----------------
export const StyledLineUpLogo = styled.img`
  width: 44px;
  height: 50px;
  margin-bottom: 29px;
`;

export const StyledEyeIcon = styled.img`
  width: 44px;
  height: 25px;
  margin-left: 16px;
  margin-right: 16px;
`;
