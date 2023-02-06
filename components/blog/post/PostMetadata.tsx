import Author from "@components/blog/utils/Author";
import BlogPost from "@lib/blog/blog-post";

const PostMetadata: React.FCC<{
  post: BlogPost;
}> = ({ post }) => {
  const { date, readingTime } = post;

  return (
    <div className="flex flex-row items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
      <Author author={post.author} />

      <span>·</span>


    </div>
  );
};

export default PostMetadata;
