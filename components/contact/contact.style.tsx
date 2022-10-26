import styled from "styled-components";

export const ContactForm = styled.div`
  width: 80%;
  background: #fff;
  border-radius: 6px;
  padding: 60px 60px 30px 40px;
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
  justify-content: space-between;

  @media (max-width: 820px) {
    flex-direction: column-reverse;
  }
`;

export const LeftSide = styled.div`
  width: 60%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  position: relative;

  @media (max-width: 820px) {
    flex-direction: row;
    margin-top: 40px;
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
  color: #3e2093;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  height: 50px;
  width: 100%;
  margin: 12px 0;
  & input,
  & textarea {
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    background: #f0f1f8;
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
  background: #3e2093;
  border: none;
  transition: background 0.3s ease;

  &:hover {
    background: #5029bc;
  }
  input[type="submit"] {
    background-color: transparent;
    color: #fff;
    font-size: 18px;
    outline: none;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
  }
`;