import MDXRenderer from "@components/blog/mdx/MDXRenderer";
import styled from "styled-components";

export const PostBodyWrapper = styled.div`
  padding: 20px;
  display: flex;
    flex-direction: column;
`

const PostBody: React.FCC<{ content: string }> = ({ content }) => {
  return (
    <PostBodyWrapper>
      <MDXRenderer code={content} />
    </PostBodyWrapper>
  );
};

export default PostBody;
