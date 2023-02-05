import styled from "styled-components";

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    .container {
      max-width: 720px;
      padding: 10px;
    }
  }
`;

const LayoutContainer: React.FCC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default LayoutContainer;
