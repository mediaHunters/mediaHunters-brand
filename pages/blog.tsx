import { BlogComponent } from "@components/blog/blog.component";
import FooterComponent from "@components/footer/footer.component";
import { Navbar } from "@components/header/navbar";
import { getAllPosts } from "@lib/blog/api";
import BlogPost from "@lib/blog/blog-post";

const Blog = ({posts}: {posts: BlogPost[]}) => {
  return (
    <>
      <Navbar />
      <BlogComponent posts={posts}/>
      <FooterComponent />
    </>
  );
};

export default Blog;


export async function getStaticProps() {
  const posts = getAllPosts();


  return {
    props: {
      posts,
    },
  };
}