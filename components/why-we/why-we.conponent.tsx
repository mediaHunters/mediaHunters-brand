import React from 'react';
import { IoCheckmarkDoneSharp, IoRocketOutline, IoWalletOutline } from 'react-icons/io5';
import {
  AboutCard,
  AboutCardIcon,
  AboutCardText,
  AboutCardTitle,
  AboutUs,
  AboutUsList,
  AboutUsSectionParagaph,
  AboutUsSectionTitle,
  AboutUsTop,
  TimelineContainer,
  TimelineHeader,
  TimelineWrapper,
  TimeLlineElement,
  TimeLlineList,
} from "./why-we.style";

const WhyWe = () => {
  return (
    <AboutUs className="about-us" id="dlaczego-my">
      <div className="container">
        <AboutUsTop>
          <AboutUsSectionTitle>
            Dlaczego warto wybrać właśnie nas?
          </AboutUsSectionTitle>

          <AboutUsSectionParagaph>
            W Internecie nietrudno znaleźć oferty oparte o darmowe kreatory
            stron internetowych. My podchodzimy do tematu znacznie ambitniej.
            Strona Twojej firmy zostanie napisana od zera przez doświadczonego
            programistę. Dzięki temu będzie dużo szybsza, bezpieczniejsza oraz
            skrojona na miarę Twoich potrzeb.
          </AboutUsSectionParagaph>

          <AboutUsList>
            <li>
              <AboutCard>
                <AboutCardIcon>
                  <IoCheckmarkDoneSharp/>
                </AboutCardIcon>

                <AboutCardTitle>Najwyższa jakość</AboutCardTitle>

                <AboutCardText>
                  Oferujemy najwyższą jakość świadczonych przez nas usług. Nasza
                  realizacja obejmuje projektowanie oraz tworzenie stron
                  internetowych, serwisów internetowych oraz rozwiązań
                  e-commerce.
                </AboutCardText>
              </AboutCard>
            </li>

            <li>
              <AboutCard>
                <AboutCardIcon>
                  <IoRocketOutline />
                </AboutCardIcon>

                <AboutCardTitle>Szybka realizację</AboutCardTitle>

                <AboutCardText>
                  W każdej firmie czas to pieniądz, a my szanujemy czas naszych
                  Klientów. W zależności od złożoności projektu, realizacja to
                  średnio 30 dni robocznych.
                </AboutCardText>
              </AboutCard>
            </li>

            <li>
              <AboutCard>
                <AboutCardIcon>
                  <IoWalletOutline />
                </AboutCardIcon>

                <AboutCardTitle>Przystępna cena</AboutCardTitle>

                <AboutCardText>
                  Nie jesteśmy wielką korporacją obciążoną wysokimi kosztami.
                  Dzięki temu będzie możemy zaoferować bardzo konkurencyjne
                  stawki. Daj się zaskoczyć i sprawdź, jak mało może kosztować
                  dedykowana strona
                </AboutCardText>
              </AboutCard>
            </li>
          </AboutUsList>
        </AboutUsTop>
          
          <TimelineContainer id="wspolpraca">
            <AboutUsSectionTitle>Współpraca z nami</AboutUsSectionTitle>
            <TimelineWrapper>
              <TimeLlineList>
                <TimeLlineElement>
                  <div className="timeline-container__wrapper__content">
                    <TimelineHeader>Krok 1</TimelineHeader>
                    <p>
                      Klient przedstawia nam swoje wymagania oraz założenia
                      projektu. Wspólnie przedyskutujemy wstępne wytyczne, które
                      będą miały wpływ na wygląd i funkcjonowanie strony
                      internetowej.
                    </p>
                  </div>
                </TimeLlineElement>
                <TimeLlineElement>
                  <div className="timeline-container__wrapper__content">
                    <TimelineHeader>Krok 2</TimelineHeader>
                    <p>
                      Przedstawienie wyceny projektu oraz akceptacja ze strony
                      Klienta.
                    </p>
                  </div>
                </TimeLlineElement>
                <TimeLlineElement>
                  <div className="timeline-container__wrapper__content">
                    <TimelineHeader>Krok 3</TimelineHeader>
                    <p>
                      Realizacja oraz zaprezentowanie nowej strony internetowej. W
                      tym etapie konsultujemy i wdrażamy ewentualne poprawki, aż
                      do uzyskania całkowitej satysfakcji po stronie Klienta.
                    </p>
                  </div>
                </TimeLlineElement>
                <TimeLlineElement>
                  <div className="timeline-container__wrapper__content">
                    <TimelineHeader>Krok 4</TimelineHeader>
                    <p>
                      Po wszystkich testach następuje publikacja gotowego
                      produktu.
                    </p>
                  </div>
                </TimeLlineElement>
              </TimeLlineList>
            </TimelineWrapper>
          </TimelineContainer>
      </div>
    </AboutUs>
  );
};

export default WhyWe;
