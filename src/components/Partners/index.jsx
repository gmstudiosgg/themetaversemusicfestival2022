import React from "react";
import { Container } from "../Container";
import {
  Section,
  Title,
  ThanksTitle,
  InnerSection,
  PartnersSection,
  PartnersImage,
  CuratingSection,
  CuratingImage,
  ThanksSection,
  ThanksItem,
} from "./styles";
import presenting from "../../images/partners-title-presenting.svg";
import curating from "../../images/partners-title-curating.svg";
import thanks from "../../images/partners-title-thanks.svg";
import kraken from "../../images/logo-kraken.png";
import limewire from "../../images/logo-limewire.png";
import ozz from "../../images/logo-ozz.png";
import ravers from "../../images/logo-ravers.png";
import over from "../../images/logo-over.png";

const Partners = () => {
  return (
    <Section id="partners">
      <Container>
        <InnerSection>
          <Title src={presenting} />
          <PartnersSection>
            <PartnersImage src={kraken} />
          </PartnersSection>
        </InnerSection>
        <InnerSection>
          <Title src={curating} />
          <CuratingSection>
            <a href="https://limewire.com/" target="_blank">
              <CuratingImage src={limewire} />
            </a>
            <a href="https://www.kraken.com/" target="_blank">
              <CuratingImage src={kraken} />
            </a>
            <a href="https://www.ozzfest.com/" target="_blank">
              <CuratingImage src={ozz} />
            </a>
            <a href="https://randomravers.com/" target="_blank">
              <CuratingImage src={ravers} />
            </a>
            <a href="https://www.overthereality.ai/" target="_blank">
              <CuratingImage src={over} />
            </a>
          </CuratingSection>
        </InnerSection>
        <InnerSection>
          <ThanksTitle src={thanks} />
          <ThanksSection>
            <ThanksItem href="http://move.ai/">Move.ai -</ThanksItem>
            <ThanksItem href="https://www.kinetix.tech/">Kinetix -</ThanksItem>
            <ThanksItem>Burble -</ThanksItem>
            <ThanksItem href="https://www.klezma.io/">Klezma -</ThanksItem>
            <ThanksItem href="https://musicfinland.com/">
              Music Finland -
            </ThanksItem>
            <ThanksItem>Beam Studio -</ThanksItem>
            <ThanksItem href="https://dappcraft.io/">DappCraft -</ThanksItem>
            <ThanksItem href="https://www.polygonalmind.com/">
              Polygonal Mind -
            </ThanksItem>
            <ThanksItem href="https://www.vroomway.io/">Vroomway</ThanksItem>
          </ThanksSection>
        </InnerSection>
      </Container>
    </Section>
  );
};

export default Partners;
