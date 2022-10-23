import styled from "styled-components";

export const NavbarLinkDropdownWrapper = styled.ul<{isActive: boolean}>`
    position: absolute;
    right: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 160px;
    align-items: flex-end;
    transition: 0.25s ease-in-out;
    opacity: ${(props) => props.isActive ? 1 : 0};
    * {
      padding: 0;
    }
    &:hover {

    }
`

