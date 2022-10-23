import Image from "next/image";
import {
  Footer,
  FooterBrand,
  FooterContainer,
  FooterLink,
  FooterLinkBox,
  FooterLinkList,
  FooterLinkTitle,
  FooterTop,
  Topic,
} from "./footer.style";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
const FooterComponent = () => {
  return (
    <Footer>
      <FooterTop>
        <FooterContainer className="container">
          <FooterBrand>
            <FooterLink href="/" style={{ marginBottom: "30px" }}>
              <Image
                alt="Company logo"
                src="/images/logo.png"
                width="125px"
                height="125px"
              />
            </FooterLink>
          </FooterBrand>

          <FooterLinkBox>
            <div>
              <FooterLinkList>
                <Topic>Adres</Topic>
                <li>Wrocław</li>
                <li>Przejazdowa 21</li>
                <li>51-167</li>
              </FooterLinkList>

              <FooterLinkList>
                <Topic>
                  <AiOutlinePhone /> Telefon
                </Topic>
                <li>+48 601 630 456</li>
              </FooterLinkList>

              <FooterLinkList>
                <Topic>
                  <BsEnvelope /> Email
                </Topic>
                <li>hello.mediahunters@gmail.com</li>
              </FooterLinkList>
            </div>

            <FooterLinkList>
              <li>
                <FooterLinkTitle>Firma</FooterLinkTitle>
              </li>

              <li>
                <FooterLink href="/#dlaczego-my">Dlaczego my?</FooterLink>
              </li>

              <li>
                <FooterLink href="/#uslugi">Usługi</FooterLink>
              </li>
            </FooterLinkList>

            <FooterLinkList>
              <li>
                <FooterLinkTitle>Produkty</FooterLinkTitle>
              </li>

              <li>
                <FooterLink href="/cennik-strony.html">
                  Strony internetowe
                </FooterLink>
              </li>

              <li>
                <FooterLink href="/cennik-seo.html">Pozycjonowanie</FooterLink>
              </li>

              <li>
                <FooterLink href="#kontakt">Kontakt</FooterLink>
              </li>
            </FooterLinkList>

            <ul>
              <li>
                <FooterLinkTitle>Zasoby</FooterLinkTitle>
              </li>

              <li>
                <FooterLink href="/faq.html">FAQ’S</FooterLink>
              </li>
            </ul>
          </FooterLinkBox>
        </FooterContainer>
      </FooterTop>
    </Footer>
  );
};

export default FooterComponent;
