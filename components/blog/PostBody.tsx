import MDXRenderer from '@components/blog/MDXRenderer';

const PostBody: React.FCC<{ content: string }> = ({ content }) => {
  return (
    <div>
      <MDXRenderer code={content} />
    </div>
  );
};

export default PostBody;
