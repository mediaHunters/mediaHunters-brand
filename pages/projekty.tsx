import Head from "next/head";
import React from "react";
import FooterComponent from "../components/footer/footer.component";
import HeaderComponent from "../components/header/header.component";
import ProjectsComponent from "../components/projects/projects.component";
import { LinkText, LinkDropdown } from "../interfaces/link.interface";

function Projects() {
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
      <HeaderComponent links={links} />
      <ProjectsComponent />
      <FooterComponent />
    </>
  );
}

export default Projects;
