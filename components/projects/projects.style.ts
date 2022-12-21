import styled from "styled-components";
import { lighten } from "polished";

export const ProjectsWrapper = styled.main`
  padding-left: 60px;
  margin-bottom: 60px;
`;

export const ProjectsMainHeader = styled.h1`
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  color: #000;
`;

export const ProjectSubHeaderDescription = styled.p`
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  max-width: 600px;
  margin-top: 10px;
  color: ${() => lighten(0.2, "#000")};
`;

export const FiltersSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 40px;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  display: inline-block;
  margin-top: 12px;
  background: #fff;
  border: none;
  transition: background 0.3s ease;
  color: #000;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 0 15px;
  padding: 10px 20px;
  font-size: 16px;
  &:hover {
    background: #5029bc;
    border-color: #5029bc;
  }

  ${(props) =>
    props.active
      ? `
        background: #5029bc;
        border-color: #5029bc;
        color: #fff;
  `
      : ``}
`;
