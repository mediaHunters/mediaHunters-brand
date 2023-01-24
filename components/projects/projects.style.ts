import styled from "styled-components";
import { lighten } from "polished";
import { Card } from "react-bootstrap";

export const ProjectsWrapper = styled.main`
  margin-bottom: 60px;
  min-height: 400px;
  @media (min-width: 548px) {
    padding-left: 60px;
  }
`;

export const ProjectsMainHeader = styled.h1`
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.black};
`;

export const ProjectSubHeaderDescription = styled.p`
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  max-width: 600px;
  margin-top: 10px;
  color: ${(props) => lighten(0.2, props.theme.colors.black)};
`;

export const FiltersSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 40px;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  display: inline-block;
  margin: 10px;
  background: ${(props) => props.theme.colors.white};
  border: none;
  transition: background 0.3s ease;
  color: ${(props) => props.theme.colors.black};
  border: 2px solid ${(props) => props.theme.colors.black};
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  &:hover {
    background: ${(props) => props.theme.colors.bittersweet};
    border-color: ${(props) => props.theme.colors.bittersweet};
    color: ${(props) => props.theme.colors.white};
  }

  ${(props) =>
    props.active
      ? `
        background: ${props.theme.colors.bittersweet};
        border-color: ${props.theme.colors.bittersweet};
        color: ${props.theme.colors.white};
  `
      : ``}
`;

export const FilterProjectsSection = styled.div`
  margin-top: 40px;
`;
export const FilterProjectsCard = styled(Card)`
  max-width: 500px;
  width: 100%;
  position: relative;
  padding: 10px;
  align-items: flex-start;
  border: none;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.5s ease;
  &:hover {
    box-shadow: none;
  }
`;

export const FilterProjectsOverlay = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: all 0.5s ease;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    color: transparent;
    transition: all 0.5s ease;
    &:hover {
      scale: 1.7;
      cursor: pointer;
    }
  }
  &:hover {
    background: rgba(0, 0, 0, 0.3);
    * {
      color: ${(props) => props.theme.colors.bittersweet};
    }
  }
`;

export const FilterProjectsCardImage = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  object-fit: contain;
`;
