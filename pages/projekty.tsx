import react from 'react';
import FooterComponent from '../components/footer/footer.component';
import HeaderComponent from '../components/header/header.component';
import ProjectsComponent from '../components/projects/projects.component';
import { LinkText, LinkDropdown } from '../interfaces/link.interface';


function Projects() {
    const links: Array<LinkText | LinkDropdown> = [
        {
          text: "Home",
          url: "/",
          type: "link",
        },
        {
            text: "Projekty",
            url: "/projekty",
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
      <ProjectsComponent />
      <FooterComponent />
        </>
    )
}

export default Projects