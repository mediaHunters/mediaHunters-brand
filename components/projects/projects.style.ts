import styled from "styled-components";
import { lighten } from "polished";
import { Card } from "react-bootstrap";

export const ProjectsWrapper = styled.main`
  padding-left: 60px;
  margin-bottom: 60px;
  min-height: 400px;
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
    color: #fff;
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
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`;

export const FilterProjectsOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: inherit;
  background: rgba(0, 0, 0, 0);
  transition: all .5s ease;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  * {
    color: transparent;
    transition: all .5s ease;
    &:hover {
      scale: 1.7;
      cursor: pointer;
    }
  }
  &:hover {
  background: rgba(0, 0, 0, .3);
  * {
    color: #5839f6;
  }
  }
`

export const FilterProjectsCardImage = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  object-fit: contain;
`
