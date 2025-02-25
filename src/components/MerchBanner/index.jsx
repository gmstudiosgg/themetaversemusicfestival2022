import React from "react"
import styled from "styled-components"

export const MerchBanner = ({ src, href }) => (
    <Link href={href} target="_blank">
        <Banner src={src} />
    </Link>
)

const Link = styled.a`
 cursor: crosshair;
`

const Banner = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    font-family: "Yapari";
`


export default MerchBanner
