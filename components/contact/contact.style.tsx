import { lighten } from "polished";
import styled from "styled-components";

export const ContactForm = styled.div`
  width: 80%;
  background: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  padding: 30px 40px;
  box-shadow: 0px 0px 16px 10px rgba(0, 0, 0, 0.4);
  margin: 0 auto 50px auto;
  z-index: 5;
  position: relative;

  @media (max-width: 950px) {
    width: 90%;
  }

  @media (max-width: 820px) {
    .contact-form {
      height: 100%;
      padding: 20px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 820px) {
    flex-direction: column-reverse;
    justify-content: stretch;
    align-items: stretch;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  align-items: flex-start;

  @media (max-width: 820px) {
    flex-direction: row;
    margin-bottom: 20px;
    justify-content: center;
    flex-wrap: wrap;

    &::before {
      display: none;
    }
  }
`;


export const RightSide = styled.div`
  width: 75%;
  margin-left: 75px;

  @media (max-width: 950px) {
    width: 75%;
    margin-left: 55px;
  }

  @media (max-width: 820px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const TopicText = styled.p`
  font-size: 23px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.bittersweet};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  /* height: 50px; */
  width: 100%;
  margin: 12px 0;
  & input {
    height: 50px;
  }

  & textarea {
    height: 100px;
  }
  & input,
  & textarea {
    width: 100%;
    border: none;
    font-size: 16px;
    background: ${(props) => props.theme.colors.gray};
    border-radius: 6px;
    padding: 0 15px;
    resize: none;
  }

  & textarea {
    padding-top: 6px;
  }

  .message-box {
    min-height: 110px;
  }
`;

export const SubmitButton = styled.button`
  display: inline-block;
  margin-top: 12px;
  background: ${(props) => props.theme.colors.bittersweet};
  border: none;
  transition: background 0.1s ease;

  &:hover {
    background: ${(props) => lighten(0.05, props.theme.colors.bittersweet)};
  }
  input[type="submit"] {
    background-color: transparent;
    color: ${(props) => props.theme.colors.white};
    font-size: 18px;
    outline: none;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
  }
`;
