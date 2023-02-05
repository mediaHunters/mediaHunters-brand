import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import React from "react";

import { LinkDropdown,LinkText } from "../interfaces/link.interface";

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
      <Head>
        <title>Pozycjonowanie stron internetowych Wrocław</title>
        <meta
          name="title"
          content="Pozycjonowanie stron internetowych Wrocław"
        />
        <meta
          name="description"
          content="Przenieś swoją firmę ponad konkurencję w Google. Pozycjonujemy strony, prowadzimy
            kampanie oraz SEO lokalne
            "
        />
      </Head>
      <HeaderComponent links={links} />
      <SEOComponent />
      <FooterComponent />
    </>
  );
};

export default SEO;
