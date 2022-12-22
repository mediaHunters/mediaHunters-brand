import { useState } from "react";
import {
  FilterButton,
  FiltersSection,
  ProjectsMainHeader,
  ProjectSubHeaderDescription,
  ProjectsWrapper,
} from "./projects.style";

type ProjectsFiltersTypes = "all" | "wordpress" | "dedicated";

interface IFitlerBlock {
  text: string;
  value: ProjectsFiltersTypes;
  active: boolean;
}

interface IFilterObject {
  activeIndex: number;
  filters: IFitlerBlock[];
}

function ProjectsComponent(): JSX.Element {
  const [filters, setFilters] = useState<IFilterObject>({
    activeIndex: 0,
    filters: [
      {
        text: "Wszystkie",
        value: "all",
        active: true,
      },
      {
        text: "Wordpress",
        value: "wordpress",
        active: false,
      },
      {
        text: "Dedykowane",
        value: "dedicated",
        active: false,
      },
    ],
  });

  function changeCategory(idx: number): void {
    setFilters((prevFilters: IFilterObject): IFilterObject => {
      const updatedFilters = [...prevFilters.filters];
      updatedFilters.forEach((filter: IFitlerBlock) => (filter.active = false));
      updatedFilters[idx].active = true;
      return {
        activeIndex: idx,
        filters: updatedFilters,
      };
    });
  }
  return (
    <ProjectsWrapper className="container">
      <ProjectsMainHeader>Projekty</ProjectsMainHeader>
      <ProjectSubHeaderDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        consequatur magni voluptatibus suscipit eveniet. Sed voluptates velit
        totam tempore mollitia officia cupiditate rem. Consectetur nobis rerum
        doloribus est ut vel fugit, at praesentium nihil voluptas. Maxime quia
        soluta aspernatur reprehenderit quae possimus maiores obcaecati qui
        aperiam ipsum, vero fugit earum.
      </ProjectSubHeaderDescription>

      <FiltersSection>
        Filters:
        {filters.filters.map((filter, idx: number) => (
          <FilterButton
            active={filter.active}
            onClick={() => changeCategory(idx)}
            key={filter.value}
          >
            {filter.text}
          </FilterButton>
        ))}
      </FiltersSection>
    </ProjectsWrapper>
  );
}

export default ProjectsComponent;
