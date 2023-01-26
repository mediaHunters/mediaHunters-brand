import React from "react";
import { NextPage } from "next";
import { LinkText, LinkDropdown } from "../interfaces/link.interface";

import dynamic from "next/dynamic";
const HeaderComponent = dynamic(
  () => import("../components/header/header.component")
);

const SEOComponent = dynamic(() => import("../components/seo/seo.component"));
const FooterComponent = dynamic(
  () => import("../components/footer/footer.component")
);

const SEO: NextPage = () => {
  const links: Array<LinkText | LinkDropdown> = [
    {
      text: "Home",
      url: "/",
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
      text: "Projekty",
      url: "/projekty",
      type: "link",
    },
    {
      text: "FAQ",
      url: "/faq",
      type: "link",
    },
  ];

  return (
    <>
      <HeaderComponent links={links} />
      <SEOComponent />
      <FooterComponent />
    </>
  );
};

export default SEO;
