import { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Navbar } from "@components/header/navbar";

import React from "react";


const SEOComponent = dynamic(() => import("../components/seo/seo.component"));
const FooterComponent = dynamic(
  () => import("../components/footer/footer.component")
);

const SEO: NextPage = () => {

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
      <Navbar/>
      <SEOComponent />
      <FooterComponent />
    </>
  );
};

export default SEO;
