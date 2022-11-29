import React, { ChangeEvent } from "react";
import {
  ContactForm,
  Content,
  Form,
  InputWrapper,
  LeftSide,
  RightSide,
  SubmitButton,
  TopicText,
} from "./contact.style";
import GoogleMapContainer from "../google-map/google-map.component";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

interface IContactFormState {
  [input: string]: string;
}

const initialState: IContactFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

class ContactFormComponent extends React.Component<{}, IContactFormState> {
  private readonly recaptchaRef = React.createRef<ReCAPTCHA>();

  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChangeEdit = this.handleInputChangeEdit.bind(this);
  }

  handleInputChangeEdit = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;

    this.setState({
      [target.name]: target?.value as any,
    });
  };

  async onSubmit(evt: Event) {
    evt.preventDefault();
    const recaptchaValue = await this.recaptchaRef?.current?.execute() as any;
      
      this.sendEmail(recaptchaValue);
  }

  sendEmail(token: string) {
    fetch(`https://mediahunters.pl/api/send-email`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        captcha: token,
        ...this.state,
      }),
      mode: "no-cors",
    })
      .then((): void => {
        this.setState(initialState);
        console.log('lol')
        toast.success("Twoja wiadomość została pomyślnie wysłana!");
      })
      .catch((): void => {
        toast.error("Wystąpił problem, spróbuj ponownie na chwile");
      });
  }

  render() {
    return (
      <>
        <ContactForm id="contact">
          <Content>
            <LeftSide id="left-side">
              <GoogleMapContainer />
            </LeftSide>

            <RightSide>
              <TopicText>Skontaktuj się z nami</TopicText>
              <p>
                Umów bezpłatną konsultację Twojego projektu. Przygotujemy jego
                analizę oraz przedstawimy ofertę.
              </p>
              <p style={{ fontSize: "12px" }}>
                * wysyłając zapytanie wyrażasz zgodę na przetwarzanie Twoich
                danych osobywch w celu realizacji zapytania
              </p>
              <Form
                action="#"
                id="contact-form"
                method="POST"
                onSubmit={this.onSubmit as any}
              >
                <InputWrapper>
                  <input
                    type="text"
                    placeholder="Imię"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleInputChangeEdit}
                  />
                </InputWrapper>
                <InputWrapper>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleInputChangeEdit}
                  />
                </InputWrapper>
                <InputWrapper>
                  <input
                    type="text"
                    placeholder="nr tel."
                    name="phone"
                    id="phone"
                    value={this.state.phone}
                    onChange={this.handleInputChangeEdit}
                  />
                </InputWrapper>
                <InputWrapper>
                  <textarea
                    onChange={this.handleInputChangeEdit}
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    value={this.state.message}
                    placeholder="wiadomość..."
                  ></textarea>
                </InputWrapper>
                <SubmitButton>
                  <input type="submit" value="Wyślij" />
                </SubmitButton>
              </Form>
            </RightSide>
          </Content>
        </ContactForm>
        <ReCAPTCHA
          ref={this.recaptchaRef}
          size="invisible"
          sitekey={"6LepbOQiAAAAAJLuE1zHvgD-8MuXTnsIZu17zX74"}
        />
      </>
    );
  }
}

export default ContactFormComponent;
