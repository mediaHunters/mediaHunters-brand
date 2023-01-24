import styled from "styled-components";

export const PricingSection = styled.section`
  margin: 60px auto;
`;

export const PricingButton = styled.button`
  display: block;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.bittersweet};
  background-color: ${props => props.theme.colors.white};
  transition: cubic-bezier(0.39, 0.575, 0.565, 1) ease-in all;
  &:hover {
    background-color: ${props => props.theme.colors.bittersweet};
    border: 1px solid ${props => props.theme.colors.white};

    a {
    color: ${props => props.theme.colors.white};
    }
  }
  a {
    text-decoration: none;
  color: ${props => props.theme.colors.bittersweet};

  }
`;
