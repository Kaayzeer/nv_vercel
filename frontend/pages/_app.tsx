import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    /* Wrapp the whole app with the firebase authContext */
    <AuthContextProvider>
      <Component {...pageProps} />
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/25969894.js"
      ></script>
    </AuthContextProvider>
  );
}

export default MyApp;
