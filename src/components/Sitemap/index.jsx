import React from "react";
import { Section, Title } from "./styles";
import title from '../../images/sitemap-title.png';
import { Container } from "../Container";
import { StaticImage } from "gatsby-plugin-image";
import { Map } from "./sitemap";

const Sitemap = () => (
    <Section id="sitemap">
        <Container>
            <Title src={title} />
            <Map />
        </Container>
    </Section>
)

export default Sitemap;
