import styled from "styled-components";

const PostTitleComponent = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
    font-weight: 900;
  }
`;

const PostTitle: React.FCC = ({ children }) => {
  return <PostTitleComponent>{children}</PostTitleComponent>;
};

export default PostTitle;
