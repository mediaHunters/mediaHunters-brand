import styled from "styled-components";

import { Container } from "react-bootstrap";

export const BlogContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 720px !important;
  padding: 20px;
  @media only screen and (min-width: 768px) {
    padding: 20px 80px;
  }
`;

export const BlogHeaderWrapper = styled.div`
  margin-top: 24px;
  border-bottom: 1px solid #e2e2e2;
  width: 100%;

  @media only screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const BlogHeader = styled.h1`
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: -0.05em;
  color: #212121;
  margin-bottom: 20px;

  @media only screen and (min-width: 576px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const BlogText = styled.p`
  font-size: 1.25rem;
  color: #737373;
  display: flex;
  margin-bottom: 0;
`;

export const BlogPostPreview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e2e2e2;
  padding: 20px 0;
`;

export const BlogPostHeader = styled.div`
  color: #333;
  font-weight: 700;
  font-size: 18px;
`;


export const BlogPagination = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BlogPaginationLink = styled.p`
  margin: 30px 10px 0 0;
  color: ${(props) => props.theme.colors.bittersweet};
  cursor: pointer
`

