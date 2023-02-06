import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Navbar } from "@components/header/navbar";

import React from "react";

import FooterComponent from "../components/footer/footer.component";

const PricingWebsitesComponent = dynamic(
  () => import("../components/pricing-websites/pricing-websites.component")
);

export const PricingWebsites: NextPage = () => {

  return (
    <>
      <Head>
        <title>Strony internetowe Wrocław – Cennik</title>
        <meta name="title" content="Strony internetowe Wrocław – Cennik" />
        <meta
          name="description"
          content="Sprawdź nasz cennik stron internetowych we Wrocławiu. Nie jesteśmy dużą agencją, za
          to mamy atrakcyjne stawki!"
        />
      </Head>
      <Navbar/>
      <PricingWebsitesComponent />
      <FooterComponent />
    </>
  );
};

export default PricingWebsites;
