import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { AuthContextProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    /* Wrapp the whole app with the firebase authContext */
    <AuthContextProvider>
      <Layout title="" description="" keywords="">
        <Component {...pageProps} />
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/25969894.js"
        ></script>
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
