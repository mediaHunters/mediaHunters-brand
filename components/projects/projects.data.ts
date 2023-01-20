export type ProjectsFiltersTypes = "all" | "wordpress" | "dedicated";


export interface IProjects {
  imageUrl: string;
  description: string;
  stack: string[];
  link: string;
  title: string;
  type: ProjectsFiltersTypes
}

export interface IFitlerBlock {
  text: string;
  value: ProjectsFiltersTypes;
  active: boolean;
}

export interface IFilterObject {
  activeIndex: number;
  filters: IFitlerBlock[];
}

export const projects: IProjects[] = [
  {
    imageUrl: "/images/eko-domy.png",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        consequatur magni voluptatibus suscipit eveniet. Sed voluptates velit
        totam tempore mollitia officia cupiditate rem. Consectetur nobis rerum
        doloribus est ut vel fugit, at praesentium nihil voluptas. Maxime quia
        soluta aspernatur reprehenderit quae possimus maiores obcaecati qui
        aperiam ipsum, vero fugit earum.`,
    stack: ["Wordpress", "Elementor", "WP-forms"],
    link: "https://budujzdrowo.pl",
    title: " Realizacja strony wizytówki dla wykonwacy domów szkieletowych",
    type: 'wordpress'
  },
];
