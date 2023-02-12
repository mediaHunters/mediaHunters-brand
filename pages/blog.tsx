import { GetServerSidePropsContext } from "next";
import { BlogComponent } from "@components/blog/blog.component";
import FooterComponent from "@components/footer/footer.component";
import { Navbar } from "@components/header/navbar";
import { getPostsPaginated } from "@lib/blog/api";

import { Pagination } from "../interfaces/pagination";

const Blog = (props: Pagination) => {
  return (
    <>
      <Navbar />
      <BlogComponent props={props} />
      <FooterComponent />
    </>
  );
};

export default Blog;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const page = context.query["id"] ? Number(context.query["id"]) : 1;

  const data = await getPostsPaginated(page);

  return {
    props: {
      data: data.data,
      pageCount: data.pageCount,
    },
  };
}
