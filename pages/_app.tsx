import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Anish Mukherjee"
        titleTemplate="Anish | Software engineer"
        defaultTitle="Anish | Software engineer"
        description="Hey! I'm Anish, A software engineer and web developer"
        openGraph={{
          url: "https://anishmukherjee.me/",
          title: "Anish | Software engineer",
          description:
            "Hey! I'm Anish, A software engineer and web developer",
          images: [
            {
              url: "https://in.linkedin.com/in/anish-mukherjee-7546a679",
              width: 800,
              height: 420,
              alt: "Anish | Software engineer",
            },
          ],
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Software Developer, Anish, Anish Mukherjee, Web Developer, web development, web developer, Software developer,software developer",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="https://in.linkedin.com/in/anish-mukherjee-7546a679" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
