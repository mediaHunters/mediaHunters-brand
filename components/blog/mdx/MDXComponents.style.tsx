import styled from "styled-components";

export const MDXh1 = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const MDXh2 = styled.h2`
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0 0.5em;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media only screen and (max-width: 767px) {
    font-size: 1.5em;
  }
`;
export const MDXh3 = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  margin: 1em 0 0.5em;
  text-transform: uppercase;

  @media only screen and (max-width: 767px) {
    font-size: 1.25em;
  }
`;
export const MDXh4 = styled.h4`
  font-size: 1.25em;
  font-weight: bold;
  margin: 1em 0 0.5em;

  @media only screen and (max-width: 767px) {
    font-size: 1.15em;
  }
`;
export const MDXh5 = styled.h5`
  font-size: 1.15em;
  font-weight: bold;
  margin: 1em 0 0.5em;

  @media only screen and (max-width: 767px) {
    font-size: 1em;
  }
`;

export const Blockquote = styled.blockquote`
  background: #f9f9f9;
  border-left: 10px solid #5839f6;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\\201C\\201D\\2018\\2019";

  &:before {
    color: #5839f6;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  p {
    display: inline;
  }
`;

export const Pre = styled.pre`
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  overflow-x: auto;
`;

export const Code = styled.code`
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  background-color: #f9f9f9;
  color: #333;
  border-radius: 5px;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #333;
  margin: 1.5rem 0;
  text-align: justify;
  @media (min-width: 720px) {
    font-size: 1.5rem;
  }
`;


export const ListItem = styled.li`
  list-style-type: decimal;
  margin: 1em 0;
  padding: 0 1em;

@media only screen and (max-width: 480px) {
    font-size: 0.8em;
}

  margin: 0.5em 0;
`