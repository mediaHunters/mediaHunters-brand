import type { NextPage } from "next";
import React from "react";

import dynamic from "next/dynamic";
import { LinkDropdown, LinkText } from "../interfaces/link.interface";

import HeaderComponent from "../components/header/header.component";
import HeroBannerComponent from "../components/hero-banner/hero-banner.component";
import ServicesComponent from "../components/services/services.component";


import Head from "next/head";

const WhyWe = dynamic(() => import("../components/why-we/why-we.conponent"));
const ContactFormComponent = dynamic(
  () => import("../components/contact/contact.component")
);
const FooterComponent = dynamic(
  () => import("../components/footer/footer.component")
);

const HomePage: NextPage = () => {
  const links: Array<LinkText | LinkDropdown> = [
    {
      text: "Home",
      url: "/",
      type: "link",
    },
    {
      text: "Dlaczego my?",
      url: "#dlaczego-my",
      type: "link",
    },
    {
      text: "Współpraca",
      url: "#wspolpraca",
      type: "link",
    },
    {
      text: "Usługi",
      url: "#uslugi",
      type: "link",
    },
    {
      text: "Cennik",
      type: "dropdown",
      links: [
        {
          text: "Strony internetowe",
          url: "/strony-internetowe",
        },
        {
          text: "Pozycjonowanie",
          url: "/pozycjonowanie",
        },
      ],
    },
    {
      text: "FAQ",
      url: "/faq",
      type: "link",
    },
    {
      text: "Kontakt",
      url: "#contact",
      type: "link",
    },
  ];

  return (
    <div>
      <Head>
        <title>Media hunters</title>
        <meta
          name="title"
          content="Strony Internetowe Wrocław – Media Hunters"
        />
        <meta
          name="description"
          content="Media Hunters to specjaliści tworzenia i wdrażania stron internetowych we Wrocławiu i okolicach. Sprawdź nasz cennik usług WWW. Nieszablonowe, autorskie projekty oraz strony na abonament. "
        />
      </Head>
      <HeaderComponent links={links} />
      <HeroBannerComponent />
      <WhyWe />
      <ServicesComponent />
      <ContactFormComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
