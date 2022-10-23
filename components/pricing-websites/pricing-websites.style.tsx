import Image from "next/image";
import styled from "styled-components";
import { lighten } from "polished";

export const WebsitesMainHeader = styled.h1`
  text-align: center;
  color: #000;
  font-size: 40px;
  margin-bottom: 15px;
`;

export const WebsitesDescription = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
  color: ${(props) => lighten(0.2, '#000')};
  margin-bottom: 120px;
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
  color: #000;
  margin-bottom: 30px;
`;

export const WebsitesGridHeaderText = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
  color: ${(props) => lighten(0.2, '#000')};
  margin-bottom: 30px;
`;

export const WebsitesGridQuestion = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5rem;
  color: #000;
`;
export const WebsitesGridAnswer = styled(WebsitesGridQuestion)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const WebsitesGridPrice = styled.span`
  color: #000;
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
`