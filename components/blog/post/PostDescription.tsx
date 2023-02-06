import styled from "styled-components";

const PostDescriptionComponent = styled.div`
  margin-top: 0.4rem;
  font-size: 1.2rem;
  color: #909090;

  @media (min-width: 1024px) {
    font-size: 1.7rem;
  }
`;

const PostDescription: React.FCC = ({ children }) => {
  return <PostDescriptionComponent>{children}</PostDescriptionComponent>;
};

export default PostDescription;
