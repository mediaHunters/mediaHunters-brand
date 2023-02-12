interface MenuLink {
    type: "link" | "dropdown";
    id?: string
};

interface ILinkText {
  text: string;
  url: string;
}

interface ILinkDropdown {
  text: string;
  links: ILinkText[];
}


export type LinkText = MenuLink & ILinkText;
export type LinkDropdown = MenuLink & ILinkDropdown