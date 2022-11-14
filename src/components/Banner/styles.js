import styled from "styled-components";

export const StyledBanner = styled.div`
  z-index: 9999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: auto;
  display: flex;
  background: #000;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const SkipVideo = styled.a`
  font-family: "Yapari Expanded";
  position: fixed;
  top: 40px;
  right: 40px;
  letter-spacing: 2px;
  cursor: crosshair;
  padding: 8px;
`;

export const SoundButton = styled.img`
  position: fixed;
  top: 40px;
  width: 32px;
  height: 32px;
  left: 40px;
  letter-spacing: 2px;
`;
