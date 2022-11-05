import styled from "styled-components";
import theme, { breakpoints } from '../../../utils/theme';

export const Section = styled.section`
    padding-bottom: 150px;
    background: black;
`;

export const Title = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 62px;
    @media screen and (min-width: ${breakpoints.md}) {
    width: 80%;
    }
    @media screen and (min-width: ${breakpoints.l}) {
    width: 70%;
    }
    @media screen and (min-width: ${breakpoints.xl}) {
    width: 60%;
    }
    @media screen and (min-width: ${breakpoints.xxl}) {
    width: 50%;
    }
`;

export const StagesContainer = styled.div`
    margin: 32px 0;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 16px;
    justify-content: center;
    justify-items: center;

    @media screen and (min-width: ${breakpoints.md}) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: ${breakpoints.xl}) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`;

export const Stage = styled.a`
    margin-bottom: 16px;
    cursor: crosshair;
`

export const StageCard = styled.div`
    position: relative;
    border-top-right-radius: 8px;
    border: 3px solid white;
    margin-bottom: 8px;
    transition: box-shadow 0.4s ease;
    :hover {
        box-shadow:
          0 0 14px #fff,
          0 0 9px violet,
          0 0 3px blue;
          div {
            display: flex;
          }
    }

    div {
        display: none;
    }
`

export const StageImage = styled.img`
    max-width: 100%;
    aspect-ratio: 1 / 1.5;
    object-fit: cover;
    width: 100%;

    @media screen and (min-width: ${breakpoints.md}) {
        aspect-ratio: 
    }

    @media screen and (min-width: ${breakpoints.l}) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`

export const StageName = styled.p`
    font-family: 'Yapari Expanded';
    font-size: 12px;
    line-height: 120%;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 16px;
    margin-bottom: 8px;
    min-height: 42px;
`
export const StageLocation = styled.caption`
    font-family: 'Yapari';
    font-size: 16px;
    line-height: 16px
    font-weight: 600;
    text-transform: uppercase;
    color: ${theme.accent};
`

export const StageHover = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.7);
    animation: fedeIn 0.4ss linear;

    @keyframes fadeIn {
        0% { opacity: 0; }
        50% { opacity: 50%; }
        100% { opacity: 1; }
      }
`

export const StageButton = styled.button`
      font-family: 'Yapari Expanded';
      border: unset;
      box-shadow: unset;
      text-transform: uppercase;
      border-radius: 58px;
      padding: 8px 16px;
      font-weight: 700;
      color: black;
      font-size: 10px;
      cursor: crosshair;
`