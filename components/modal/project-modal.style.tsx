import { Modal } from "react-bootstrap";
import styled from "styled-components";

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
  border: 1px solid #5839f6;
  background-color: #fff;
  padding: 5px 40px !important;
  transition: cubic-bezier(0.39, 0.575, 0.565, 1) ease-in all;
  &:hover {
    background-color: #5839f6;
    border: 1px solid #fff;
    color: #fff;
  }
  a {
    text-decoration: none;
  color: #5839f6;

  }
`;
