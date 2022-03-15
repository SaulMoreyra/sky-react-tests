import "@fontsource/poppins";
import "styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import Providers from "providers";
import { Fragment } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Skydropx</title>
        <meta name="description" content="Skydropx react tests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </Provider>
    </Fragment>
  );
}

export default MyApp;
