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
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
