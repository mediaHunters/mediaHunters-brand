import Head from "next/head";
import { Navbar } from "@components/header/navbar";

import React from "react";

import FooterComponent from "../components/footer/footer.component";
import ProjectsComponent from "../components/projects/projects.component";

function Projects() {

  return (
    <>
      <Head>
        <title>Portfolio – strony internetowe we Wrocławiu</title>
        <meta
          name="title"
          content="Portfolio – strony internetowe we Wrocławiu"
        />
        <meta
          name="description"
          content="Poznaj niektóre z naszych projektów. Tworzymy strony WordPress, dedykowane oraz
            sklepy internetowe
            "
        />
      </Head>
      <Navbar />
      <ProjectsComponent />
      <FooterComponent />
    </>
  );
}

export default Projects;
