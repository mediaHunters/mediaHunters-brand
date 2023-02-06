import Image from "next/image";
import {
  Blockquote,
  Code,
  MDXh1,
  MDXh2,
  MDXh3,
  MDXh4,
  MDXh5,
  Paragraph,
  Pre,
} from "@components/blog/mdx/MDXComponents.style";
import ClientOnly from "@components/blog/utils/ClientOnly";
import configuration from "@configuration";


type StringObject = Record<string, string>;

const NextImage: React.FCC<StringObject> = (props: StringObject) => {
  const width = props.width ?? 4;
  const height = props.height ?? 3;

  return (
    <Image
      width={parseInt(width)}
      height={parseInt(height)}
      className={props.class}
      src={props.src}
      alt={props.alt}
      {...props}
    />
  );
};

const ExternalLink: React.FCC<{ href: string }> = ({ href, children }) => {
  const siteUrl = configuration.site.siteUrl ?? "";
  const isRoot = href[0] === "/";
  const isInternalLink = href.startsWith(siteUrl) || isRoot;

  if (isInternalLink) {
    return <a href={href}>{children}</a>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const Video: React.FCC<{
  src: string;
  width?: string;
  type?: string;
}> = ({ src, type, width }) => {
  const useType = type ?? "video/mp4";

  return (
    <ClientOnly>
      <video
        width={width ?? `100%`}
        height="auto"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={src} type={useType} />
      </video>
    </ClientOnly>
  );
};

const InlineCode: React.FCC = ({ children }) => {
  return (
    <Pre>
      <Code>{children}</Code>
    </Pre>
  );
};

const MDXComponents = {
  h1: MDXh1,
  h2: MDXh2,
  h3: MDXh3,
  h4: MDXh4,
  h5: MDXh5,
  blockquote: Blockquote,
  img: NextImage,
  a: ExternalLink,
  Video,
  Image: NextImage,
  title: InlineCode,
  p: Paragraph,
};

export default MDXComponents;
