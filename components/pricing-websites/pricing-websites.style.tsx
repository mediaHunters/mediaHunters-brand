import Image from "next/image";
import { lighten } from "polished";
import styled from "styled-components";

export const WebsitesMainHeader = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.black};
  font-size: 40px;
  margin-bottom: 15px;
  @media(max-width: 850px) {
    font-size: 14px;
  }
`;

export const WebsitesDescription = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
  color: ${(props) => lighten(0.2, props.theme.colors.black)};
  margin-bottom: 120px;
  @media(max-width: 850px) {
    font-size: 12px;
  }
`;

export const WebsitesGrid = styled.div`
  gap: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 690px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

export const WebsitesGirdHeader = styled.h2`
  font-size: 40px;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 30px;
`;

export const WebsitesGridHeaderText = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
  color: ${(props) => lighten(0.2, props.theme.colors.black)};
  margin-bottom: 30px;
`;

export const WebsitesGridQuestion = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.black};
`;
export const WebsitesGridAnswer = styled(WebsitesGridQuestion)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const WebsitesGridPrice = styled.span`
  color: ${(props) => props.theme.colors.black};
  font-weight: 500;
  font-size: 16px;
  margin: 0 3px;
`;

export const WebsitePackageImage = styled(Image)`
  width: 100%;
  max-width: 600px;
  height: auto;

`;

export const WebsitesPackageImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media(max-width: 850px) {
      order: 1
  }
`;
