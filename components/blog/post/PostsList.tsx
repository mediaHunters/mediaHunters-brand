import PostPreview from '@components/blog/post/PostPreview';
import BlogPost from '@lib/blog/blog-post';
import styled from 'styled-components';

const PostListContainer = styled.div`
  display: grid;
  gap: 8px 0;
    align-items: center;
    justify-content: center;
  flex-direction: column;

@media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px 0;
    flex-direction: row;
}

@media (min-width: 992px) {
    gap: 8px 0;
}

@media (min-width: 1200px) {
    gap: 10px 0;
}
`

const PostsList: React.FCC<{
  posts: BlogPost[];
}> = ({ posts }) => {
  return (
    <PostListContainer >
      {posts.map((post) => {
        return <PostPreview key={post.title} post={post} />;
      })}
    </PostListContainer>
  );
};

export default PostsList;
