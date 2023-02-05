import { NextPage } from "next";
import dynamic from "next/dynamic";

import React from "react";

import { LinkDropdown,LinkText } from "../interfaces/link.interface";

const CookiesComponent = dynamic(() => import("../components/cookies/cookies.component"));
const HeaderComponent = dynamic(() => import("../components/header/header.component"));

const Cookies: NextPage = () => {
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
      text: "FAQ",
      url: "/faq",
      type: "link",
    },
  ];

  return (
    <>
      <HeaderComponent links={links} />
      <CookiesComponent />
    </>
  );
};

export default Cookies;
