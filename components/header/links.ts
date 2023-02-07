interface ILinkText {
  text: string;
  url: string;
}

const links: Array<ILinkText> = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Projekty",
    url: "/projekty",
  },
  {
    text: "Strony internetowe",
    url: "/strony-internetowe-cennik",
  },
  {
    text: "Pozycjonowanie",
    url: "/pozycjonowanie",
  },
  {
    text: "Blog",
    url: "/blog",
  },
  {
    text: "Kontakt",
    url: "/#contact",
  },
  {
    text: "FAQ",
    url: "/faq",
  },

];

export { links };
export type { ILinkText };
