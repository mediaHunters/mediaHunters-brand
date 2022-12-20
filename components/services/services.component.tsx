import React from 'react'; 
import { ServiceData, servicesData } from "./services.data";
import Image from 'next/image';

const ServicesComponent = () => {
  return (
    <section className="c-section" id="uslugi">
      <div className="about-bottom">
        <figure className="about-bottom__banner">
          <Image
            src="/images/cennik-strony-WWW.png"
            alt="responsywne-strony-www"
            loading="lazy"
            width="400px"
            height="500px"
          />
        </figure>

        <div className="about-bottom__content">
          <h2 className="h1 section-title">
            Kiedyś sami byliśmy na Twoim miejscu!
          </h2>

          <p className="section-text">
            Wiemy, jakich błędów nie popełniać i jak zdobywać wartościowych
            Klientów. Kluczem sukcesu Twojej firmy na dzisiejszym rynku jest
            dobrze wykonana strona internetowa i jej promocja na tle
            konkurencji. Polacy spędzają w Internecie średnio 23 lata życia -
            naszym zdaniem warto jest pokazać się w wirtualnym świecie z jak
            najlepszej strony.
          </p>
        </div>
      </div>

      <h2 className="c-section__title">
        <span>Nasze usługi</span>
      </h2>
      <ul className="c-services">
        {servicesData.map((service: ServiceData, idx: number) => (
          <li className="c-services__item" key={idx}>
            <h3>{service.header}</h3>
            <p style={{fontSize: "16px"}}>{service.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesComponent;
 