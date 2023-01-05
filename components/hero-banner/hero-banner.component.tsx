import React from "react";
import {
  HeroContent,
  HeroContentTitle,
  HeroWrapper,
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
            Tworzenie stron internetowych Wrocław - atrakcyjnej i skuteczne
            strony WWW wraz z usługą pozycjonowania oraz administracji.
            Kompleksowa usługa dla osób indywidualnych oraz biznesu.
          </p>

          <a href="#dlaczego-my">
            <button className="btn btn--primary">Zacznijmy!</button>
          </a>

          <div className="hero__content__banner"></div>
        </HeroContent>

        <div className="hero__content__banner"></div>
      </div>
    </HeroWrapper>
  );
};

export default HeroBannerComponent;
