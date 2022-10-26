import Image from "next/image";
import styled from "styled-components";

export const HeroWrapper = styled.section`
  position: relative;
  padding: 130px 0 140px;
  z-index: 1;
  display: flex;
  min-width: 300px;
`;

export const HeroContent = styled.div`
  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (min-width: 1024px) {
    max-width: 550px;
    padding: 20px;
    &__banner {
      display: block;
      position: absolute;
      top: 61%;
      right: 0;
      transform: translateY(-50%);
      width: 500px;
      padding-top: 500px;
      background: url("../assets/images/hero-banner.png") no-repeat;
      background-size: contain;
      text-align: left;
    }
  }
`;

export const HeroContentTitle = styled.h1`
  color: #000;
  font-weight: bold;
  margin-bottom: 40px;
  font-size: 36px;
  font-weight: 700;
`;

export const HeroContentText = styled.p`
  margin-bottom: 40px;
`;

export const ImageBlobWrapper = styled.img`
  position: absolute;
  width: 100%;
  max-width: 900px;
  z-index: -10000;
  top: -120px;
  right: -175px;
  display: none;
  @meida(min-widht: 1024px) {
    display: block;
  }
`;