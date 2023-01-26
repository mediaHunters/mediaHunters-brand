import styled from "styled-components";
import { lighten } from "polished";


export const MainHeaderWrapper = styled.header<{ scrollY: number }>`
  position: relative;
  z-index: ${(props) => props.theme.zIndex["z-index-10"]};
  ${(props) => {
    if (props.scrollY > 2.5) {
      return `
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            background-color: ${props.theme.colors.white};
            width: 100vw;
            `;
    }
  }}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 0 33px;
  }
`;

export const Navbar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const NavbarList = styled.ul<{ activeMenu: boolean }>`
  padding: 10px;
  display: flex;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    gap: 10px;
    margin-right: 20px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    position: absolute;
    text-align: center;
    right: 13%;
    top: 0;
    left: 0;
    right: 0;
    max-height: 0;
    overflow: hidden;
    background-color: transparent;
    transition: max-height 0.15s ease-out;
    a {
      color: ${(props) => props.theme.colors.white};
    }
    ${(props) => {
      if (props.activeMenu) {
        return `
            max-height: 500px;
            transition: max-height 0.25s ease-in;
            background-color: ${props.theme.colors.bittersweet};
            a {
              color: ${props.theme.colors.white};
            }
            `;
      }
    }}
  }
`;
export const NavbarItem = styled.li`
  list-style-type: none;
  position: relative;
`;

export const NavbarLink = styled.a`
  padding: 0 15px;
  color: black;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s ease-in-out;
  text-decoration: none;
  &:is(:hover, :focus) {
    color: ${(props) => lighten(0.2, props.theme.colors.bittersweet)};
  }
`;

export const CrossBox = styled.div<{ visible: boolean; windowWidth: number }>`
  display: ${({ visible, windowWidth }) =>
    visible && windowWidth < 1024 ? "block" : "none"};
    font-size: 24px;
  transition: 0.75s ease-in-out;
  position: absolute;
  top: 33px;
  right: 33px;
  z-index: ${(props) => props.theme.zIndex["z-index-10"]};
`;
