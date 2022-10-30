import styled from "styled-components";
import theme, { breakpoints } from '../../../utils/theme';

export const Section = styled.section`
    padding-top: 150px;
    padding-bottom: 150px;
    background: url(faq-background.png);
`;

export const Title = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 62px;
    @media screen and (min-width: ${breakpoints.md}) {
    width: 90%;
    }
    @media screen and (min-width: ${breakpoints.l}) {
    width: 80%;
    }
    @media screen and (min-width: ${breakpoints.xl}) {
    width: 70%;
    }
    @media screen and (min-width: ${breakpoints.xxl}) {
    width: 60%;
    }
`;

export const FaqList = styled.ul``;

export const FaqItem = styled.li`
    width: 100%;
    border-top: 2px solid ${theme.accent};
    padding: 40px 0;
    font-size: 34px;
    line-height: 140%;
    text-transform: uppercase;
`;

export const Question = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    
    p {
        max-width: 690%;
    }
`

export const Answer = styled.p`
    margin-top: 12px;
    padding: 0 12px;
    font-size: 16px;
    line-height: 200%;
    transition: max-height 1s ease;
    overflow: hidden;
    max-height: ${props => props.open ? "auto" : 0}
`

export const Toggle = styled.img`
    display: flex;
    width: 8px;
    height: auto;
    transition: all 0.4s ease;
    transform: ${props => props.open && "rotate(-180deg)"}
`