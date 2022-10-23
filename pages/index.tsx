import type { NextPage } from "next";
import React from "react";

import dynamic from "next/dynamic";
import { LinkDropdown, LinkText } from "../interfaces/link.interface";
const HeaderComponent = dynamic(
  () => import("../components/header/header.component")
);
const HeroBannerComponent = dynamic(
  () => import("../components/hero-banner/hero-banner.component")
);
const WhyWe = dynamic(() => import("../components/why-we/why-we.conponent"));
const ServicesComponent = dynamic(
  () => import("../components/services/services.component")
);
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
      url: "#services",
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
