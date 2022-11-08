import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import theme, { breakpoints } from '../../../utils/theme';

export const Section = styled.section`
    padding-top: 150px;
    padding-bottom: 150px;
`;

export const Title = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 62px;
    padding: 0;
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

export const Map = styled.div`
    padding: 0 24px;
    @media screen and (min-width: ${breakpoints.md}) {
        padding: 0 24px;
    }
    @media screen and (min-width: ${breakpoints.l}) {
        padding: 0 120px;
    }
`

export const Stage = styled.g`
    polygon, path {
        transition: all 0.4s ease;
    }

    &:hover {
        path.st0 {
            fill: #000000;
        }
        polygon {
            fill: url(#metallic-pattern);
            filter: drop-shadow( 0px 0 10px hsla(0, 100%, 100%, 1));
        }
    }
`

export const SVG = styled.svg`
    .st0{fill:#FFFFFF;}
	.st1{fill:none;stroke:#FFFFFF;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st2{fill:none;stroke:#FFFFFF;stroke-width:5.5092;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
    .st3{fill:none;stroke:#FFFFFF;stroke-width:5.6189;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
    .st4{fill:none;stroke:#FFFFFF;stroke-width:4;stroke-miterlimit:10;}
`

export const Grid = styled.g`
    rect:hover {
        fill: #fff;
    }
`