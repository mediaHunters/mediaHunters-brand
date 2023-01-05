import styled from "styled-components";
import { lighten } from "polished";
import { AiOutlineSearch } from "react-icons/ai";

export const FaqQuestionsContainer = styled.main`
  padding-left: 60px;
  margin-bottom: 60px;
`;

export const FaqQuestionsContainerHeader = styled.h1`
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  color: #000;
`;

export const FaqQuestionsContainerSubHeader = styled.p`
  margin-left: 20px;
`

export const FaqQuestionsContainerDescription = styled.p`
  font-weight: 300;
  line-height: 18px;
  margin: 10px 0 10px 10px;
  color: lighten(0.2, #000);
  max-width: 650px;
`;

export const FaqQuestionsContainerInputBox = styled.div`
  max-width: 400px;
  width: 100%;
  position: relative;
  margin-top: 15px;

  input {
    padding-left: 30px;
    font-size: 18px;
    border: 1px solid ${(props) => props.theme.colors.bittersweet};
  }
`;

export const FaqQuestionsWrapper = styled.div`
  margin: 120px auto 0 auto;
  max-width: 1240px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  grid-gap: 50px;
  @media (max-width: 770px) {
    justify-content: center;
  }
`;

export const QuestionCard = styled.div`
  display: flex;
  min-width: 250px;
  max-width: 370px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-height: 350px;
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 4px ${(props) => lighten(0.2, props.theme.colors.bittersweet)};
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px;
`;

export const QuestionHeader = styled.h3`
  position: relative;
  color: ${(props) => props.theme.colors.bittersweet};
  margin-bottom: 30px;
  margin-right: auto;

  &:after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 20%;
    height: 3px;
    background-image: linear-gradient(
      180deg,
      ${(props) => props.theme.colors.bittersweet},
      #fff
    );
  }
`;

export const QuestionDescrption = styled.p`
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  color: lighten(0.2, #000);
`;


export const SearchIcon = styled(AiOutlineSearch)`
      width: 14px;
  position: absolute;
  top: 11px;
  left: 9px;
  color: ${(props) => props.theme.colors.bittersweet};
`