import { useState } from "react";
import {
  FilterButton,
  FiltersSection,
  ProjectsMainHeader,
  ProjectSubHeaderDescription,
  ProjectsWrapper,
} from "./projects.style";

type ProjectsFilters = "all" | "wordpress" | "dedicated";

function ProjectsComponent() {
    const [filtersObject, setFiltersObject] = useState({
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
      })

  function changeCategory(idx: number) {

    setFiltersObject(prevState => {
    filtersObject.filters[filtersObject.activeIndex].active = false;
    filtersObject.filters[idx].active = true;
    filtersObject.activeIndex = idx;
        return {
            ...prevState,
            filtersObject
        }
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
        {filtersObject.filters.map((filter, idx: number) => (
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
