import dynamic from "next/dynamic";
import Link from "next/link";
import BlogPost from "@lib/blog/blog-post";
import styled from "styled-components";

const AuthorComponent = dynamic<{ post: BlogPost }>(
  () => import("../utils/AuthorComponent").then((mod) => mod.AuthorComponent),
  { ssr: false }
);

const PostPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  box-shadow: 0px 2px 10px #ccc;
  border-radius: 10px;
  background-color: #fff;
  width: 300px;
  cursor: pointer;
  margin: 2 0px auto;
  @media (min-width: 700px) {
    justify-content: space-between;
  }
`;

const PreviewImage = styled.img`
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-out;
  background-color: #f7fafc;
  border-radius: 0.25rem;
  width: 100%;
  height: 80%;

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  @media (min-width: 700px) {
    max-width: 450px;
    max-height: 450px;
    margin-bottom: 0;
  }
`;

const PreviewTitle = styled.h3`
  font-size: 24px;
  text-align: center;
`;

const PrieviewTitleWrapper = styled.div`
  margin-top: 1rem;
  padding: 5px 20px;
  color: black;
`;

const PreviewDescription = styled.p`
  font-size: 10px;
  text-align: justify;
  line-height: 1.5;
`;

const PostPreview: React.FCC<{
  post: BlogPost;
}> = ({ post }) => {
  const hrefAs = `/${post.collection.slug}/${post.slug}`;
  const href = `/[collection]/[slug]`;

  return (
    <>
        <PostPreviewContainer>
      <Link href={href} as={hrefAs} passHref>
          <div>
            <PrieviewTitleWrapper>
              <PreviewTitle>{post.title}</PreviewTitle>
              <PreviewDescription>{post.description}</PreviewDescription>
            </PrieviewTitleWrapper>
            <PreviewImage src={post.image} />
          </div>

          <AuthorComponent post={post} />
      </Link>
        </PostPreviewContainer>
    </>
  );
};

export default PostPreview;
