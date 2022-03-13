import "@fontsource/poppins";
import "styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import Providers from "providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </Provider>
  );
}

export default MyApp;
