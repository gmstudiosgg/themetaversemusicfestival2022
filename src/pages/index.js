import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "./../components/Layout";
import Hero from "./../components/Hero";
import Banner from "../components/Banner";
import StarsScene from "../components/Stars";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BannerMarquee from "../components/Marquee";
import WatchTheTeaser from "../components/WatchTheTeaser";
import About from "../components/About";

const seo = {
  title: "Metaverse Music Festival | Decentraland",
  description:
    "A four-day celebration of music, culture and creativity in the virtual social world of Decentraland, the Metaverse Festival is a grand collision of light, sound and portable toilets.",
  image: "https://themetaversefestival.io/logo-metaverse.png",
};

const meta = {
  ...seo,
  "og:title": seo.title || "",
  "twitter:title": seo.title || "",
  "og:description": seo.description || "",
  "twitter:description": seo.description || "",
  "og:image": seo.image || "",
  "twitter:image": seo.image || "",
  "twitter:card": "summary_large_image",
  "twitter:creator": "@decentraland",
  "og:type": "website",
};

// markup
const IndexPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <StyledIndexPage>
      <Helmet>
        {Object.keys(meta)
          .filter((name) => Boolean(meta[name]))
          .map((name) => {
            if (name === "title") {
              return <title key={name}>{meta[name]}</title>;
            }

            if (name.startsWith("og:")) {
              return <meta key={name} property={name} content={meta[name]} />;
            }

            return <meta key={name} name={name} content={meta[name]} />;
          })}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Layout>
        <header>
          <Navbar />
          <Hero />
          <WatchTheTeaser />
          <About />
          <Footer />
          <BannerMarquee />
        </header>
        <main>{showVideo && <Banner setShowVideo={setShowVideo} />}</main>
      </Layout>
      <StarsScene />
    </StyledIndexPage>
  );
};

const StyledIndexPage = styled.div`
  background: transparent;
`;

export default IndexPage;
