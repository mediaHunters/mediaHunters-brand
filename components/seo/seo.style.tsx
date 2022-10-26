import styled from "styled-components";

export const PricingSection = styled.section`
  margin: 60px auto;
`;

export const PricingButton = styled.a`
  display: block;
  width: 100%;
  border: 1px solid #5839f6;
  background-color: #fff;
  transition: cubic-bezier(0.39, 0.575, 0.565, 1) ease-in all;
  &:hover {
    background-color: #5839f6;
    border: 1px solid #fff;

    a {
    color: #fff;
    }
  }
  a {
    /* color: #fff; */
    text-decoration: none;
  color: #5839f6;

  }
`;