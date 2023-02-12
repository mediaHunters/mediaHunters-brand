import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BlogPagination,
  BlogPaginationLink,
} from "@components/blog/blog.style";
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

import { Pagination } from "../../interfaces/pagination";

const TagsComponent = dynamic(() => import("@components/blog/utils/tags"), {
  ssr: false,
});

export const BlogComponent: React.FCC<{ props: Pagination }> = ({ props }) => {
  const router = useRouter();

  return (
    <BlogContainer>
      <BlogHeaderWrapper>
        <BlogHeader>Najnowsze posty</BlogHeader>
      </BlogHeaderWrapper>
      {props.data.map((post: BlogPost, idx: number) => (
        <BlogPostPreview key={idx}>
          <BlogText>
            <DateFormatter dateString={post.date} />
          </BlogText>
          <BlogPostHeader>{post.title}</BlogPostHeader>
          <TagsComponent tags={post.tags} />
          <BlogText className="mb-3">{post.description}</BlogText>
          <Link href={`${post.collection.slug}/${post.slug}`}>
            Czytaj więcej →
          </Link>
        </BlogPostPreview>
      ))}
      {/* <Link href={"/"} style={{alignSelf: 'end', marginTop: '10px'}}>Wszystkie artykuły →</Link> */}

      <BlogPagination>
        {Array.from({ length: props.pageCount }, (_, i) => (
          <BlogPaginationLink
            key={i}
            onClick={() => {
              router.push(`blog?id=${i + 1 === 0 ? "" : i + 1}`);
            }}
          >
            {i + 1}
          </BlogPaginationLink>
        ))}
      </BlogPagination>
    </BlogContainer>
  );
};
