import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Navbar } from "@components/header/navbar";

import React from "react";

import HeroBannerComponent from "../components/hero-banner/hero-banner.component";

const ServicesComponent = dynamic(() =>
  import("../components/services/services.component").then((mod) => mod.default)
);
const WhyWe = dynamic(() =>
  import("../components/why-we/why-we.conponent").then((mod) => mod.default)
);
const ContactFormComponent = dynamic(() =>
  import("../components/contact/contact.component").then((mod) => mod.default)
);
const FooterComponent = dynamic(() =>
  import("../components/footer/footer.component").then((mod) => mod.default)
);

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Strony Internetowe Wrocław – Media Hunters</title>
        <meta
          name="title"
          content="Strony Internetowe Wrocław – Media Hunters"
        />
        <meta
          name="description"
          content="Media Hunters to specjaliści tworzenia i wdrażania stron internetowych we Wrocławiu i okolicach. Sprawdź nasz cennik usług WWW. Nieszablonowe, autorskie projekty oraz strony na abonament. "
        />
      </Head>
      <Navbar />
      <HeroBannerComponent />
      <WhyWe />
      <ServicesComponent />
      <ContactFormComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
