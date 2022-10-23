import "../styles/globals.scss";
import "../styles/services.scss";
import "../styles/cookies.scss";

import Theme from "../styles/Theme";
import type { AppProps } from "next/app";
import CookieConsent, { Cookies } from "react-cookie-consent";
import CookiesBannerComponent from "../components/cookies/cookies-banner.component";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
      <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText="Ok"
        declineButtonText="Odrzuć"
        cookieName="myAwesomeCookieName2"
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
    </Theme>
  );
}

export default MyApp;
