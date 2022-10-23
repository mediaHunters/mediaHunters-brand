import React from "react";
import dynamic from "next/dynamic";
import { LinkText, LinkDropdown } from "../interfaces/link.interface";
import { faqQuestions } from "../components/faq/faq.questions";

const FaqComponent = dynamic(() => import("../components/faq/faq.component"));
const FooterComponent = dynamic(
  () => import("../components/footer/footer.component")
);
const HeaderComponent = dynamic(
  () => import("../components/header/header.component")
);

class Faq extends React.Component<any, any> {
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
      text: "FAQ",
      url: "/faq",
      type: "link",
    },
  ];

  constructor(props: any) {
    super(props);
    this.state = {
      questions: faqQuestions,
    };
    this.updateSearchedQuestions = this.updateSearchedQuestions.bind(this);
  }

  updateSearchedQuestions(searchText: string): void {
    const questions = faqQuestions.filter((o: any) =>
      Object.keys(o).some((k: any) =>
        o[k].toLowerCase().includes(searchText.toLowerCase())
      )
    );
    this.setState({ questions });
  }

  render() {
    return (
      <>
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
