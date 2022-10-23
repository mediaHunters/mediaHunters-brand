import React from 'react';
import { ContactForm, Content, Form, InputWrapper, LeftSide, RightSide, SubmitButton, TopicText } from './contact.style';
import GoogleMapContainer from '../google-map/google-map.component';

class ContactFormComponent extends React.Component {
    render() {
        return (
            
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
        <p style={{fontSize: '12px'}}>
          * wysyłając zapytanie wyrażasz zgodę na przetwarzanie Twoich danych
          osobywch w celu realizacji zapytania
        </p>
        <Form action="#" id="contact-form" method="POST">
          <InputWrapper>
            <input type="text" placeholder="Imię" id="name" />
          </InputWrapper>
          <InputWrapper>
            <input type="text" placeholder="Email" id="email" />
          </InputWrapper>
          <InputWrapper>
            <input type="text" placeholder="nr tel." id="phone" />
          </InputWrapper>
          <InputWrapper>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
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
        )
    }
}

export default ContactFormComponent