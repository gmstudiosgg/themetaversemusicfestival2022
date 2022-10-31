import React from "react";
import { Container } from "../Container";
import { Section, Title, ThanksTitle, InnerSection, PartnersSection, PartnersImage, CuratingSection, CuratingImage, ThanksSection, ThanksItem } from "./styles";
import presenting from '../../images/partners-title-presenting.svg';
import curating from '../../images/partners-title-curating.svg';
import thanks from '../../images/partners-title-thanks.svg';
import kraken from '../../images/logo-kraken.png';
import limewire from '../../images/logo-limewire.png';
import ozz from '../../images/logo-ozz.png';
import ravers from '../../images/logo-ravers.png';
import over from '../../images/logo-over.png';


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
                        <CuratingImage src={limewire} />
                        <CuratingImage src={kraken} />
                        <CuratingImage src={ozz} />
                        <CuratingImage src={ravers} />
                        <CuratingImage src={over} />
                    </CuratingSection>
                </InnerSection>
                <InnerSection>
                    <ThanksTitle src={thanks} />
                    <ThanksSection>
                        <ThanksItem href="http://move.ai/">
                            Move.ai -
                        </ThanksItem>
                        <ThanksItem href="https://www.kinetix.tech/">
                            Kinetix -
                        </ThanksItem>
                        <ThanksItem>
                            Burble -
                        </ThanksItem>
                        <ThanksItem>
                            Klezma -
                        </ThanksItem>
                        <ThanksItem>
                            Music Finland -
                        </ThanksItem>
                        <ThanksItem>
                            Beam Studio -
                        </ThanksItem>
                        <ThanksItem>
                            DappCraft -
                        </ThanksItem>
                        <ThanksItem>
                            Polygonal Mind -
                        </ThanksItem>
                        <ThanksItem>
                            Vroomway
                        </ThanksItem>
                    </ThanksSection>
                </InnerSection>
            </Container>
        </Section>
    )
}

export default Partners;
