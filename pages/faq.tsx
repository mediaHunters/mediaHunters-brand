import dynamic from "next/dynamic";
import Head from "next/head";
import { Navbar } from "@components/header/navbar";

import React from "react";

import { faqQuestions, IFaqQuestion } from "../components/faq/faq.questions";
import FooterComponent from "../components/footer/footer.component";

const FaqComponent = dynamic(() => import("../components/faq/faq.component"));

export interface IFaqState {
  questions: IFaqQuestion[];
}

class Faq extends React.Component<unknown, IFaqState> {

  constructor(props: unknown) {
    super(props);
    this.state = {
      questions: faqQuestions,
    };
    this.updateSearchedQuestions = this.updateSearchedQuestions.bind(this);
  }

  updateSearchedQuestions(searchText: string): void {
    const questions: IFaqQuestion[] = faqQuestions.filter(
      (question: IFaqQuestion) =>
        Object.keys(question as IFaqQuestion).some(
          (questionProperty: string) => {
            return (question as any)[questionProperty]
              .toLowerCase()
              .includes(searchText.toLowerCase());
          }
        )
    );
    this.setState({ questions });
  }

  render() {
    return (
      <>
        <Head>
          <title>Tworzenie stron internetowych Wrocław - FAQ</title>
          <meta
            name="title"
            content="Tworzenie stron internetowych Wrocław - FAQ"
          />
          <meta
            name="description"
            content="Czy warto stworzyć firmową stronę WWW? Znajdź odpowiedz w naszej części FAQ"
          />
        </Head>
        <Navbar />
        <FaqComponent
          questions={this.state.questions}
          updateSearchedQuestions={this.updateSearchedQuestions}
        />
        <FooterComponent />
      </>
    );
  }
}

export default Faq;
