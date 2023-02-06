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
    url: "/strony-internetowe",
  },
  {
    text: "Pozycjonowanie",
    url: "/pozycjonowanie",
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
