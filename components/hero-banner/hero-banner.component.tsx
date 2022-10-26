import React from "react";
import {
  HeroContent,
  HeroContentTitle,
  HeroWrapper,
  ImageBlobWrapper,
} from "./hero-banner.style";

const HeroBannerComponent = () => {
  return (
    <HeroWrapper className="container" id="home">
      <div className="container">
        <HeroContent className="hero__content">
          <HeroContentTitle className="hero__content__title">
            Strony internetowe Wrocław - Razem zbudujemy sukces Twojej firmy
          </HeroContentTitle>

          <p className="hero__content__text">
            Jesteśmy lokalną firmą skupiającą praktyktów w branży tworzenia oraz
            promocji stron internetowych we Wrocławiu i okolicach
          </p>

          <a href="#dlaczego-my">
            <button className="btn btn--primary">Zacznijmy!</button>
          </a>

        <div className="hero__content__banner"></div>

        </HeroContent>

        <div className="hero__content__banner"></div>
      </div>
        <ImageBlobWrapper
          src="/images/blob.png"
          alt="shape"
          className="hero__shape-content"
          loading="lazy"
        />
    </HeroWrapper>
  );
};

export default HeroBannerComponent;
