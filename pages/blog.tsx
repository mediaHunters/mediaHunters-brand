import { GetServerSidePropsContext } from "next";
import { BlogComponent } from "@components/blog/blog.component";
import FooterComponent from "@components/footer/footer.component";
import { Navbar } from "@components/header/navbar";
import { getPostsPaginated, getSelectedPosts } from "@lib/blog/api";
import styled, { keyframes } from "styled-components";

import { Pagination } from "../interfaces/pagination";

const pulse = keyframes`0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; }`;

export const Loader = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PostSkeleton = styled.div`
  width: 100%;
  height: 150px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f2f2f2;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

const Blog = (props: Pagination) => {
  return (
    <>
      <Navbar />
      {props ? (
        <BlogComponent props={props} />
      ) : (
        <Loader>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </Loader>
      )}
      <FooterComponent />
    </>
  );
};

export default Blog;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { data, total, pageCount, categories } = await getPostsPaginated();
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const showOffPosts = await getSelectedPosts();
  return {
    props: {
      data,
      total,
      pageCount,
      categories,
      showOffPosts: showOffPosts
    },
  };
}
