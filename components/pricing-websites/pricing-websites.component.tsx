import Link from "next/link";
import FooterComponent from "../footer/footer.component";
import { Footer } from "../footer/footer.style";
import {
  WebsitesMainHeader,
  WebsitesDescription,
  WebsitesGrid,
  WebsitesGridHeaderText,
  WebsitesGridQuestion,
  WebsitePackageImage,
  WebsitesGirdHeader,
  WebsitesGridAnswer,
  WebsitesGridPrice,
  WebsitesPackageImageWrapper,
} from "./pricing-websites.style";

const PricingWebsitesComponent = () => {
  return (
    <>
      <div className="container">
        <WebsitesMainHeader className="mb-5">
          Strony Internetowe Cennik – dla Osób indywidualnych oraz firm
        </WebsitesMainHeader>
        <WebsitesDescription>
          Profesjonalny wizerunek Twojej osoby lub firmy to główny cel pracy
          naszych specjalistów. Podejmujemy się nie tylko zaawansowanych
          projektów, ale budujemy także strony wizytówki dla lokalnych
          działalności. Wybierz dla siebie odpowiedni wariant i wypełnij szybki
          formularz wyceny. Jeśli nie masz doświadczenia – skontaktuj się z nami
          telefonicznie, wspólnie przedyskutujmy kwestię wyboru najlepszej z
          opcji.
        </WebsitesDescription>
      </div>
      <div className="container">
        <WebsitesGrid className="container">
          <div>
            <WebsitesGirdHeader>
              Rozbudowana strona – Multipage
            </WebsitesGirdHeader>
            <WebsitesGridHeaderText>
              Najpopularniejszy format stron internetowych. Możliwość stworzenia
              do 8 podstron prezentujących poszczególne kategorie. Pozwala na
              szczegółowe poznanie oferty oraz daje duże możliwości do
              rozbudowy, także w kontekście pozycjonowania firmy w Internecie
            </WebsitesGridHeaderText>
            <WebsitesGridQuestion>
              Dla kogo jest przeznaczona?
            </WebsitesGridQuestion>
            <WebsitesGridHeaderText>
              Strona Multipage wybierana jest najczęściej przez właścicieli
              małego biznesu, np. restauracje lub usługi serwisowe. Jej
              możliwości pozwalają także bez trudu na zaadaptowanie dla
              większych działalności gospodarczych. Osoby prywatne wykorzystują
              ją często jako rozbudowane portfolio.
            </WebsitesGridHeaderText>
            <WebsitesGridAnswer>
              Od <WebsitesGridPrice>2000,00</WebsitesGridPrice> zł brutto
            </WebsitesGridAnswer>
            <button className="btn btn--primary">
              <Link href="/index.html#kontakt">ZAMÓW DARMOWĄ WYCENĘ</Link>
            </button>
          </div>
          <WebsitesPackageImageWrapper>
            <picture>
              <WebsitePackageImage
                src="/images/multi.png"
                alt=""
                width="400px"
                height="400px"
                loading="lazy"
              />
            </picture>
          </WebsitesPackageImageWrapper>
        </WebsitesGrid>
      </div>

      <div className="container  mb-5">
        <WebsitesGrid className="container">
          <WebsitesPackageImageWrapper >
            <picture>
              <WebsitePackageImage
                src="/images/single.png"
                alt=""
                width="400px"
                height="400px"
                loading="lazy"
              />
            </picture>
          </WebsitesPackageImageWrapper>
          <div>
            <WebsitesGirdHeader>Strona wizytówka - OnePage</WebsitesGirdHeader>
            <WebsitesGridHeaderText>
              Witryna OnePage to tak zwana wizytówka. Jej celem jest przekazanie
              szybkiej, prostej i skutecznej informacji dla Klienta o Twojej
              ofercie. Jak sama nazwa wskazuje, zazwyczaj składa się z jednej
              strony bez dodatkowych zakładek.
            </WebsitesGridHeaderText>
            <WebsitesGridQuestion>
              Dla kogo jest przeznaczona?
            </WebsitesGridQuestion>

            <WebsitesGridHeaderText>
              Małe firmy bez rozbudowanych usług i produktów. Osoby indywidualne
              – osobiste portfolio (Curriculum Vitae) lub promocja eventu.
              Dowolna ilość tekstu oraz multimediów stanowiąca spójną całość.
            </WebsitesGridHeaderText>
            <WebsitesGridAnswer>
              Od <WebsitesGridPrice>900,00</WebsitesGridPrice> zł brutto
            </WebsitesGridAnswer>
            <button className="btn btn--primary">
              <Link href="/index.html#kontakt">ZAMÓW DARMOWĄ WYCENĘ</Link>
            </button>
          </div>
        </WebsitesGrid>
      </div>

      <div className="container">
        <WebsitesGrid className="container">
          <div>
            <WebsitesGirdHeader>
              Zaawansowana witryna – Ekspert
            </WebsitesGirdHeader>
            <WebsitesGridHeaderText>
              Najbardziej rozbudowany format stron internetowych cechujący się
              dużą liczbą podstron wraz z menu nawigacyjnym. Pokaż się z
              najlepszej strony, oferując swoim Klientom dostęp szczegółowej
              oferty. Witryna może zawierać także rozbudowane formularze
              kontaktowe oraz integrację z GoogleMaps.
            </WebsitesGridHeaderText>
            <WebsitesGridQuestion>
              Dla kogo jest przeznaczona?
            </WebsitesGridQuestion>
            <WebsitesGridHeaderText>
              Najczęściej jest wybierana przez firmy z szeroką ofertą lub
              zaawansowanym produktem. Opcja Ekspert to doskonały wybór dla
              średnich oraz dużych firm. Dla zachowania bezpieczeństwa oraz
              stabilności oferujemy także usługę serwisową.
            </WebsitesGridHeaderText>
            <WebsitesGridAnswer>
              Od <WebsitesGridPrice>2490,00</WebsitesGridPrice> zł brutto
            </WebsitesGridAnswer>
            <button className="btn btn--primary">
              <Link href="/index.html#kontakt">ZAMÓW DARMOWĄ WYCENĘ</Link>
            </button>
          </div>
          <WebsitesPackageImageWrapper>
            <picture>
              <WebsitePackageImage
                src="/images/extended.png"
                alt=""
                width="400px"
                height="400px"
                loading="lazy"
              />
            </picture>
          </WebsitesPackageImageWrapper>
        </WebsitesGrid>
      </div>
      <Footer />
    </>
  );
};

export default PricingWebsitesComponent;