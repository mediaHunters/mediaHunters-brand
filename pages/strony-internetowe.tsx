import React from 'react';
import { NextPage } from "next";
import dynamic from 'next/dynamic';
import { LinkDropdown, LinkText } from "../interfaces/link.interface";

const HeaderComponent  = dynamic(() => import("../components/header/header.component"));
const PricingWebsitesComponent = dynamic(() => import("../components/pricing-websites/pricing-websites.component"));

export const PricingWebsites: NextPage = () => {
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
      <PricingWebsitesComponent />
    </>
  );
};


export default PricingWebsites