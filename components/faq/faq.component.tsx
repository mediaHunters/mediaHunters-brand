import React from "react";
import { IFaqQuestion } from "./faq.questions";
import {
  FaqQuestionsContainer,
  FaqQuestionsContainerDescription,
  FaqQuestionsContainerHeader,
  FaqQuestionsContainerInputBox,
  FaqQuestionsContainerSubHeader,
  FaqQuestionsHeaderWrapper,
  FaqQuestionsWrapper,
  QuestionCard,
  QuestionDescrption,
  QuestionHeader,
  SearchIcon,
} from "./faq.style";
import Image from "next/image";
interface IFaqProps {
  questions: IFaqQuestion[];
  updateSearchedQuestions: (searchText: string) => void;
}

interface IFaqState {
  searchText: string;
  questions: IFaqQuestion[];
}

class FaqComponent extends React.Component<IFaqProps, IFaqState> {
  // TODO find way to reset array when click backspace and strinp is empty
  constructor(props: IFaqProps) {
    super(props);
    this.state = {
      searchText: "",
      questions: [],
    };
    this.updateSearchText = this.updateSearchText.bind(this);
  }
  componentDidMount(): void {
    this.setState({ questions: this.props.questions });
  }

  componentDidUpdate(prevProps: IFaqProps) {
    if (prevProps.questions !== this.props.questions) {
      this.setState({
        questions: this.props.questions,
      });
    }
  }

  updateSearchText(evt: any): void {
    this.setState({ searchText: evt.target.value });
    this.props.updateSearchedQuestions(this.state.searchText);
  }

  render() {
    return (
      <FaqQuestionsContainer>
          <FaqQuestionsHeaderWrapper>
          <FaqQuestionsContainerHeader>
            <Image
              src="/images/waving-hand.png"
              alt="waving hand"
              width="40"
              height="40"
              priority={true}
            />
            <FaqQuestionsContainerSubHeader>FAQ’S - Najczęściej zadawane pytania</FaqQuestionsContainerSubHeader>
          </FaqQuestionsContainerHeader>
          <FaqQuestionsContainerDescription>
            W tej sekcji znajdziesz odpowiedzi na najbardziej nurtujące pytania.
            Jeśli jednak nie uda Ci się znaleźć rozwiązania, skontaktuj się z
            nami - odpowiemy najszybciej jak to możliwe.
          </FaqQuestionsContainerDescription>
          <FaqQuestionsContainerInputBox>
            <SearchIcon className="form-control-feedback" />
            <input
              onChange={this.updateSearchText}
              type="text"
              value={this.state.searchText}
              id="faq-search"
              className="form-control"
              placeholder="Szukaj..."
            />
          </FaqQuestionsContainerInputBox>
          </FaqQuestionsHeaderWrapper>

        <FaqQuestionsWrapper>
          {this.props.questions.map((question: IFaqQuestion, idx: number) => {
            return (
              <QuestionCard key={idx}>
                <QuestionHeader>{question.question}</QuestionHeader>
                <QuestionDescrption>{question.answer}</QuestionDescrption>
              </QuestionCard>
            );
          })}
        </FaqQuestionsWrapper>
      </FaqQuestionsContainer>
    );
  }
}

export default FaqComponent;
