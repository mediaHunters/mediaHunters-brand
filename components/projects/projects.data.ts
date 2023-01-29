export type ProjectsFiltersTypes = "all" | "wordpress" | "dedicated";

export interface IProjects {
  imageUrl: string;
  description: string;
  stack: string[];
  link: string;
  title: string;
  type: ProjectsFiltersTypes;
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
    description: `Strona dla wykonawcy domów szkieletowych w województwie mazowieckim.
    Zlecenie obejmowało projekt graficzny, ukierunkowanie treści na świadomego Klienta,
    przedstawienie firmy oraz jej zespołu w osobnych zakładach oraz wykonanie formularza kontaktowego w przjrzystej i nowoczesnej formie.
    Dodatkowo strona naszego Inwestora otrzymała integrację z Google Maps, Google Analytics / Search Console oraz generowaną politykę prywatności. 
    Klient zdecydował się na kontynuowanie współpracy i rozwijanie projektu przez pozycjonowanie biznesu online (SEO lokalne).`,
    stack: ["Wordpress", "Elementor", "WP-forms"],
    link: "https://budujzdrowo.pl",
    title: "Realizacja strony wizytówki dla wykonwacy domów szkieletowych",
    type: "wordpress",
  },
  {
    imageUrl: "/images/enter-auto.png",
    description: `Strona dla wykonawcy domów szkieletowych w województwie mazowieckim.
    Zlecenie obejmowało projekt graficzny, ukierunkowanie treści na świadomego Klienta,
    przedstawienie firmy oraz jej zespołu w osobnych zakładach oraz wykonanie formularza kontaktowego w przjrzystej i nowoczesnej formie.
    Dodatkowo strona naszego Inwestora otrzymała integrację z Google Maps, Google Analytics / Search Console oraz generowaną politykę prywatności. 
    Klient zdecydował się na kontynuowanie współpracy i rozwijanie projektu przez pozycjonowanie biznesu online (SEO lokalne).
  `,
    stack: ["Wordpress", "Elementor", "WP-forms"],
    link: "https://enterauto.pl",
    title: "Realizacja strony wizytówki dla sprzedawcy aut",
    type: "wordpress",
  },
];
