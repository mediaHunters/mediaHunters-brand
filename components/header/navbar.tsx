import dynamic from "next/dynamic";
import styled from "styled-components";

import React from "react";
import { useMediaQuery } from "react-responsive";

import Logo from "./logo";
import { DeviceSize } from "./responsive";

const NavLinks = dynamic(() => import('./navLinks').then(mod => mod.NavLinks), {ssr: false})
const MobileNavLinks = dynamic(() => import("./mobileNavLinks").then(mod => mod.MobileNavLinks), {ssr: false})

const NavbarContainer = styled.div`
  width: 100%;
  height: 90px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  overflow: hidden;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (

      <NavbarContainer>
        <LeftSection>
          <Logo />
        </LeftSection>
        <MiddleSection></MiddleSection>
        <RightSection>{isMobile ? <MobileNavLinks /> : <NavLinks />}</RightSection>
      </NavbarContainer>
  );
}
