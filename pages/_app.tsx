import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.scss";
import "../styles/services.scss";
import "../styles/cookies.scss";

import Theme from "../styles/Theme";
import type { AppProps } from "next/app";
import CookieConsent from "react-cookie-consent";
import CookiesBannerComponent from "../components/cookies/cookies-banner.component";
import Head from "next/head";
import Script from "next/script";
import { Router } from "next/router";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";





function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on("routeChangeStart", () => NProgress.start());
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());
  }, [])
  return (
    <Theme>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-237114672-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-237114672-1');
        `}
      </Script>
      <Component {...pageProps} />
      <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText="Ok"
        declineButtonText="Odrzuć"
        cookieName="Cookies"
        style={{ background: "#d3cbfd", color: "#6d51f7", padding: "20px" }}
        declineButtonStyle={{
          border: "2px solid #6d51f7",
          backgroundColor: "#fff",
          color: "#6d51f7",
          width: "130px",
        }}
        buttonStyle={{
          color: "#fff",
          fontSize: "13px",
          width: "130px",
          border: "2px solid #6d51f7",
          backgroundColor: "#6d51f7",
        }}
        expires={30}
      >
        <CookiesBannerComponent />
      </CookieConsent>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </Theme>
  );
}

export default MyApp;
