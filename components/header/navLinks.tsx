import { ILinkText, links } from "@components/header/links";
import styled from "styled-components";

import React from "react";

const NavLinksContainer = styled.article`
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavLinksWrapper = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
  list-style: none;
  padding-right: 40px;
  li:last-of-type {
    margin-right: 30px;
  }
`;

const NavLinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid ${(props) => props.theme.colors.bittersweet};
  }

`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks() {
  return (
    <NavLinksContainer>
      <NavLinksWrapper>
        {links.map(({ text, url }: ILinkText) => (
          <NavLinkItem key={text}>
            <Link href={url}>{text}</Link>
          </NavLinkItem>
        ))}
        <Link href="/#contact" key="#contact">
          <button className="btn btn--primary" key={"wycena"}>
            Wycena
          </button>
        </Link>
      </NavLinksWrapper>
    </NavLinksContainer>
  );
}
