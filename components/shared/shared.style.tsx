import Link from "next/link";
import { lighten } from "polished";
import styled from "styled-components";

export const Button = styled.button<{ buttonType?: string }>`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  border: 1px solid ${(props) => props.theme.colors.bittersweet};
  border-radius: 0 25px;
  box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.1);
  ${(props) => {
    if (props?.buttonType === "primary") {
      return `
            background: #5839f6;
            color: #fff;

            &:is(:hover, :focus) {
            background-color: lighten(#5839f6, 5%);
          }
            `;
    }
  }}
`;

export const BasicLink = styled(Link)`
  text-decoration: none;
  color: #5839f6;
  cursor: pointer;
  font-size: 14px;
`;

export const MenuLink = styled(BasicLink)`
  padding: 0 15px;
  color: black;
  font-size: 14px;
  font-weight: 600;
  transition: 0.25s ease-in-out;
  &:is(:hover, :focus) {
    color: ${(props) => lighten(0.2, props.theme.colors.bittersweet)};
  }
`
