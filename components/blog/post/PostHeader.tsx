import dynamic from "next/dynamic";
import PostDescription from "@components/blog/post/PostDescription";
import PostImage from "@components/blog/post/PostImage";
import PostTitle from "@components/blog/post/PostTitle";
import TagsComponent from "@components/blog/utils/tags";
import BlogPost from "@lib/blog/blog-post";
import styled from "styled-components";

const AuthorComponent = dynamic<{ post: BlogPost }>(
  () => import("../utils/AuthorComponent").then((mod) => mod.AuthorComponent),
  { ssr: false }
);
const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;
`;

const PostHeader: React.FCC<{
  post: BlogPost;
}> = ({ post }) => {
  return (
    <>
      <div className="mx-auto justify-center">
        <PostImage
          className={"rounded-lg"}
          preloadImage={true}
          title={post.title}
          src={post.image}
        />
      </div>

      <PostCardContainer>
        <AuthorComponent post={post} />
        <TagsComponent
          tags={[
            "tag1",
            "tag2",
            "tag3",
            "tag1",
            "tag2",
            "tag3",
            "tag1",
            "tag2",
            "tag3",
          ]}
        />

        <PostTitle>{post.title}</PostTitle>

        <PostDescription>{post.description}</PostDescription>
      </PostCardContainer>
    </>
  );
};

export default PostHeader;
