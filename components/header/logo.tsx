import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import React from "react";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href={"/"}>
        <Image
          alt="tworzenie-i-projektowanie-stron"
          src="/images/MediaHunters.png"
          width="125"
          height="125"
          priority={true}
          loader={({ src }: { src: string }) => src}
        />
      </Link>
    </LogoWrapper>
  );
};
export default Logo;
