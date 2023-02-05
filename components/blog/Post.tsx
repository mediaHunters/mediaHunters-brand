import dynamic from 'next/dynamic';
import PostBody from '@components/blog/PostBody';
import BlogPost from '@lib/blog/blog-post';

const PostHeader = dynamic(
  () => import('@components/blog/PostHeader'),
  { ssr: false }
)

const Post: React.FCC<{
  post: BlogPost;
  content: string;
}> = ({ post, content }) => {
  return (
    <div className={'mx-auto max-w-2xl'}>
      <article className="mb-16">
        <PostHeader post={post} />

        <div className={'flex'}>
          <PostBody content={content} />
        </div>
      </article>
    </div>
  );
};

export default Post;
