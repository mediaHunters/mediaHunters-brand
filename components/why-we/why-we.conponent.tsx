import React from "react";
import {
  IoCheckmarkDoneSharp,
  IoRocketOutline,
  IoWalletOutline,
} from "react-icons/io5";
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
          <AboutUsSectionTitle>Strony WWW szyte na miarę.</AboutUsSectionTitle>

          <AboutUsSectionParagaph>
            Jesteśmy praktykami w branży, którzy słuchają potrzeb swoich
            Klientów. Powiedz nam czego oczekujesz, a my to dla Ciebie
            stworzymy. Możemy zaproponować nowoczesne szablony WordPress lub
            stworzyć indywidualny projekt strony internetowej według Twoich
            wytycznych.
          </AboutUsSectionParagaph>

          <AboutUsList>
            <li>
              <AboutCard>
                <AboutCardIcon>
                  <IoCheckmarkDoneSharp />
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
                  Dzięki temu możemy zaoferować bardzo konkurencyjne
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
                    Analiza potrzeb Klienta. Spojrzenie na konkurencję, słowa
                    kluczowe i zestawienie z budżetem.
                  </p>
                </div>
              </TimeLlineElement>
              <TimeLlineElement>
                <div className="timeline-container__wrapper__content">
                  <TimelineHeader>Krok 2</TimelineHeader>
                  <p>
                    Zaplanowanie struktury oraz treści strony. Projekt graficzny
                    oraz prezentacja funkcjonalności.
                  </p>
                </div>
              </TimeLlineElement>
              <TimeLlineElement>
                <div className="timeline-container__wrapper__content">
                  <TimelineHeader>Krok 3</TimelineHeader>
                  <p>
                    Wybór odpowiedniego systemu zarządzania treścią. Akceptacja
                    po stronie Klienta.
                  </p>
                </div>
              </TimeLlineElement>
              <TimeLlineElement>
                <div className="timeline-container__wrapper__content">
                  <TimelineHeader>Krok 4</TimelineHeader>
                  <p>
                    Publikacja strony internetowej i ewentualne poprawki.
                    Administracja oraz dalszy rozwój.
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
