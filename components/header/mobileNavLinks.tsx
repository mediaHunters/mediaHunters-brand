import Link from 'next/link';
import { ILinkText, links } from '@components/header/links';
import { MenuToggle } from '@components/header/menuToggle';
import styled from "styled-components";

import React, { useState } from "react";


const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1000;
  background-color: #fff;
`;

const LinksWrapper = styled.section`
  margin: 0;
  padding: 30px;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 20px;
  display: flex;
  margin-bottom: 10px;
`;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          {links.map(({ text, url }: ILinkText) => (
            <LinkItem key={text} onClick={() => setOpen(false)}>
              <MobileNavLink href={url}>{text}</MobileNavLink>
            </LinkItem>
          ))}
          <Marginer />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
