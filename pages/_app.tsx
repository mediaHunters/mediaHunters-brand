import type { AppProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import Script from "next/script";
import MDXThemeProvider from "@components/blog/ThemeProvider";
import { config } from "@fortawesome/fontawesome-svg-core";
import NProgress from "nprogress";

import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { ToastContainer } from "react-toastify";

import CookiesBannerComponent from "../components/cookies/cookies-banner.component";
import { GlobalModal } from "../components/modal/globalModal.component";
import Theme from "../styles/Theme";

import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/services.scss";
import "../styles/syntax-highlight.scss";
import "nprogress/nprogress.css";

config.autoAddCss = false;


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on("routeChangeStart", () => NProgress.start());
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());
  }, []);

  return (
    <Theme>
      <MDXThemeProvider>
        <Head>
          <link rel="shortcut icon" href="#"></link>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="google-site-verification"
            content="nkpPTpP-0xL8HdHEdKuOKsLyuNvYSTKcSMsGbWvsoEg"
          />
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
        <GlobalModal>
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
        </GlobalModal>
      </MDXThemeProvider>
    </Theme>
  );
}

export default MyApp;
