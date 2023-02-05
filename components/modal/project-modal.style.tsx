import styled from "styled-components";

import Modal from "react-bootstrap/Modal";

export const ModalBody = styled(Modal.Body)`
  display: flex;
  max-height: 400px;
  overflow-y: auto;
  @media(max-width: 700px) {
    flex-direction: column;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  position: relative;
  object-fit: contain;
`;

export const CardDescription = styled.p`
  width: 59%;
  font-size: 14px;
  padding: 10px;
  @media(max-width: 700px) {
    width: 100%;
  }
`;

export const CardStack = styled.div`
  width: 50%;
  padding: 10px;
  padding-left: 40px;
  @media(max-width: 700px) {
    width: 100%;
  }
`;

export const CardStackItem = styled.p``;

export const ModalButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.bittersweet};
  background-color: ${(props) => props.theme.colors.white};
  padding: 5px 40px !important;
  transition: cubic-bezier(0.39, 0.575, 0.565, 1) ease-in all;
  &:hover {
    background-color: ${(props) => props.theme.colors.bittersweet};
    border: 1px solid ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.white};
  }
  a {
    text-decoration: none;
  color: ${(props) => props.theme.colors.bittersweet};

  }
`;
