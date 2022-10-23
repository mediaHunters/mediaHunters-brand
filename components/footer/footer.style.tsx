import styled from "styled-components";

export const Footer = styled.footer`
  background: #f0f1f8;
`;

export const FooterTop = styled.div`
  padding: 80px 0 50px;
`;

export const FooterContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
`;

export const FooterBrand = styled.div`
  margin-bottom: 20px;
  @media (min-width: 560px) {
    margin-bottom: 40px;
  }

  @media (min-width: 1024) {
    margin-bottom: 0;
  }
`;

export const FooterLinkBox = styled.div`
  @media (min-width: 560px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
  }
`;

export const FooterLinkList = styled.ul`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  .text-one {
    margin-bottom: 10px;
  }
  .link-title {
    margin-bottom: 15px;
  }
  @media (min-widdth: 1024px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const FooterLinkTitle = styled.h3`
  color: #000;
  font-size: 15px;
  font-weight: 600;
`;
export const FooterLink = styled.a`
  color: #5839f6;
  font-size: 14px;
  margin-bottom: 10px;
  max-width: 150px;
  text-decoration: none;

  &:is(:hover, :focus) {
    color: lighten(#5839f6, 5%);
  }
`;

export const Topic = styled.li`
  font-weight: 500;
  color: #000;
  font-size: 15px;
  font-weight: 600;
`;
