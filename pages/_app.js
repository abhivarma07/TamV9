import Head from "next/head";

import "../styles/globals.css";
import "../styles/hero2.scss";
import "../styles/app.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>TAM</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/eagle_logo.png" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
