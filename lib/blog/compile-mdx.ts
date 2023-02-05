import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeHighlight from "rehype-highlight";
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from "rehype-slug";

export async function compileMdx(markdown: string) {
  const { compile } = await import("@mdx-js/mdx");

  const code = await compile(markdown, {
    outputFormat: "function-body",
    rehypePlugins: [rehypeHighlight, rehypeSlug, rehypeAutoLinkHeadings, rehypePrism, rehypeCodeTitles],
    development: false,
  });

  return String(code);
}
