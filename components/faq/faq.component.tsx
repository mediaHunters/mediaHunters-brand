import React from "react";
import { IFaqQuestion } from "./faq.questions";
import {
  FaqQuestionsContainer,
  FaqQuestionsContainerHeader,
  FaqQuestionsContainerInputBox,
  FaqQuestionsWrapper,
  QuestionCard,
  QuestionDescrption,
  QuestionHeader,
  SearchIcon,
} from "./faq.style";
import Image from 'next/image';
interface IFaqProps {
  questions: IFaqQuestion[];
  updateSearchedQuestions: (searchText: string) => void;
}

interface IFaqState {
  searchText: string;
  questions: IFaqQuestion[];
}

class FaqComponent extends React.Component<IFaqProps, IFaqState> {
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
      <FaqQuestionsContainer className="container">
        <div>
          <FaqQuestionsContainerHeader>
            <Image src="/images/waving-hand.png" alt="waving hand" width="100%" height="100%" priority={true}/>
            FAQ’S - Najczęściej zadawane pytania
          </FaqQuestionsContainerHeader>

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
        </div>

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
