import dynamic from "next/dynamic";
import Link from "next/link";
import {
  BlogContainer,
  BlogHeader,
  BlogHeaderWrapper,
  BlogPostHeader,
  BlogPostPreview,
  BlogText,
} from "@components/blog/blog.styles";
import DateFormatter from "@components/blog/utils/DateFormatter";
import BlogPost from "@lib/blog/blog-post";

const TagsComponent  = dynamic(() => import("@components/blog/utils/tags"), {ssr: false})

export const BlogComponent = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <BlogContainer>
      <BlogHeaderWrapper>
        <BlogHeader>Najnowsze posty</BlogHeader>

      </BlogHeaderWrapper>
      {posts.map((post: BlogPost, idx: number) => (
        <BlogPostPreview key={idx}>
          <BlogText>
            <DateFormatter dateString={post.date} />
          </BlogText>
          <BlogPostHeader>{post.title}</BlogPostHeader>
          <TagsComponent tags={post.tags} />
          <BlogText className="mb-3">
            {post.description}
          </BlogText>
          <Link href={`${post.collection.slug}/${post.slug}`}>Czytaj więcej →</Link>
        </BlogPostPreview>
      ))}
          {/* <Link href={"/"} style={{alignSelf: 'end', marginTop: '10px'}}>Wszystkie artykuły →</Link> */}

    </BlogContainer>
  );
};
