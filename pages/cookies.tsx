import React from "react";
import { NextPage } from "next";
import { LinkText, LinkDropdown } from "../interfaces/link.interface";
import dynamic from "next/dynamic";

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
