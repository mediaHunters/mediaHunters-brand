import BlogPost from "@lib/blog/blog-post";

export interface Pagination {
    data: BlogPost[],
    pageCount: number
}