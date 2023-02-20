import dynamic from "next/dynamic";
import PostBody from "@components/blog/post/PostBody";
import BlogPost from "@lib/blog/blog-post";

const PostHeader = dynamic(() => import("@components/blog/post/PostHeader"), {
  ssr: false,
});

const Post: React.FCC<{
  post: BlogPost;
  content: string;
}> = ({ post, content }) => {
  return (
    <div
      style={{
        margin: "auto",
        padding: "20px"
      }}
    >
      <article className="mb-16">
        <PostHeader post={post} />

        <div className={"flex"}>
          <PostBody content={content}/>
        </div>
      </article>
      Wiecej artukułów o podobnej tematyce
    </div>
  );
};

export default Post;
