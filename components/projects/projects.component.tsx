import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useRef, useState } from "react";

import {
  MODAL_TYPES,
  useGlobalModalContext,
} from "../modal/globalModal.component";

import {
  IFilterObject,
  IFitlerBlock,
  IProjects,
  projects,
} from "./projects.data";
import {
  FilterButton,
  FilterProjectsCard,
  FilterProjectsCardImage,
  FilterProjectsOverlay,
  FilterProjectsSection,
  FiltersSection,
  ProjectsMainHeader,
  ProjectSubHeaderDescription,
  ProjectsWrapper,
} from "./projects.style";

function ProjectsComponent(): JSX.Element {
  const { showModal } = useGlobalModalContext();

  const allProjects = useRef<IProjects[]>(projects);
  const [filteredProjects, setFilteredProjects] = useState<IProjects[]>([]);

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
  function openModal({
    description,
    stack,
    link,
    imageUrl,
  }: Omit<IProjects, "title" | "type">): void {
    showModal(MODAL_TYPES.PROJECT_MODAL, {
      description,
      stack,
      link,
      imageUrl,
    });
  }

  useEffect(() => {
    allProjects.current =
      filters.filters[filters.activeIndex].value === "all"
        ? projects
        : projects.filter(
            (project: IProjects) =>
              project.type === filters.filters[filters.activeIndex].value
          );
    setFilteredProjects(allProjects.current);
  }, [filters]);

  return (
    <ProjectsWrapper className="container">
      <ProjectsMainHeader>Projekty</ProjectsMainHeader>
      <ProjectSubHeaderDescription></ProjectSubHeaderDescription>
      <FiltersSection>
        Filtry:
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

      <FilterProjectsSection className="container card-group">
        {filteredProjects.map(
          (
            { title, imageUrl, description, stack, link }: IProjects,
            idx: number
          ) => (
            <FilterProjectsCard key={idx}>
              <FilterProjectsCardImage src={imageUrl} alt={title} />
              <p
                style={{
                  margin: "0",
                  marginTop: "10px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {title}
              </p>
              <FilterProjectsOverlay>
                <div>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="cr-primary-bittersweet"
                    style={{ fontSize: "36px" }}
                    onClick={() =>
                      openModal({ description, stack, link, imageUrl })
                    }
                  />
                </div>
              </FilterProjectsOverlay>
            </FilterProjectsCard>
          )
        )}
      </FilterProjectsSection>
    </ProjectsWrapper>
  );
}

export default ProjectsComponent;
