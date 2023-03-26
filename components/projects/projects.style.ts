import { lighten } from "polished";
import styled, { keyframes } from "styled-components";

import Card from "react-bootstrap/Card";

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
  @media (max-width: 548px) {
    justify-content: center;
  }
`;

export const FilterButton = styled.button<{ active: boolean }>`
  display: inline-block;
  margin: 10px;
  background: ${(props) => props.theme.colors.white};
  border: none;
  transition: background 0.3s ease;
  color: ${(props) => props.theme.colors.black};
  border: 2px solid ${(props) => props.theme.colors.black};
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

export const showUp = keyframes`
0% { opacity: 0 }
  100% { opacity: 1; } 
`;

export const FilterProjectsCard = styled(Card)`
  margin: 20px 0;
  max-width: 500px;
  position: relative;
  padding: 10px;
  align-items: flex-start;
  border: none;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.5s ease;
  animation-name: ${showUp} 1.4s;
  min-width: 350px;
  width: 100%;
  &:hover {
    box-shadow: none;
  }

  @media (min-width: 768px) {
    margin: 0 40px;
  }
`;

export const FilterProjectsOverlay = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: all 0.5s ease;
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
  margin-bottom: 30px;
`;

export const FilterProjectsCardImageText = styled.p`
    position: absolute;
    margin-bottom: 0;
    bottom: 8px;
    width: 100%;
    text-align: center;
`;
