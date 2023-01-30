import React from "react";
import dynamic from "next/dynamic";
import { LinkText, LinkDropdown } from "../interfaces/link.interface";
import { faqQuestions, IFaqQuestion } from "../components/faq/faq.questions";
import Head from "next/head";

const FaqComponent = dynamic(() => import("../components/faq/faq.component"));
const FooterComponent = dynamic(
  () => import("../components/footer/footer.component")
);
const HeaderComponent = dynamic(
  () => import("../components/header/header.component")
);

export interface IFaqState {
  questions: IFaqQuestion[];
}

class Faq extends React.Component<unknown, IFaqState> {
  private readonly links: Array<LinkText | LinkDropdown> = [
    {
      text: "Home",
      url: "/",
      type: "link",
    },
    {
      text: "Cennik",
      type: "dropdown",
      links: [
        {
          text: "Strony internetowe",
          url: "/strony-internetowe",
        },
        {
          text: "Pozycjonowanie",
          url: "/pozycjonowanie",
        },
      ],
    },
    {
      text: "Projekty",
      url: "/projekty",
      type: "link",
    },
    {
      text: "FAQ",
      url: "/faq",
      type: "link",
    },
  ];

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
        <HeaderComponent links={this.links} />
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
