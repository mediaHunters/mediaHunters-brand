import { NextPage } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@components/header/navbar";

import React from "react";


const CookiesComponent = dynamic(() => import("../components/cookies/cookies.component"));
const HeaderComponent = dynamic(() => import("../components/header/header.component"));

const Cookies: NextPage = () => {


  return (
    <>
    <Navbar />

      <CookiesComponent />
    </>
  );
};

export default Cookies;
