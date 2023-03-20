import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {
  ArrowRight,
  BigTile,
  BigTileInnerBox,
  BlogBannerWrapper,
  BlogContainer,
  BlogHeader,
  PostTitle,
  ReadingTime,
  ReadMoreLink,
  ReadMoreWrapper,
  Tile,
  TileButton,
  TileContent,
  TileHeader,
  TileWrapper,
  TitleFooter,
} from "@components/blog/utils/blog.style-redesigned";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Pagination } from "../../interfaces/pagination";

const TagsComponent = dynamic(() => import("@components/blog/utils/tags"), {
  ssr: false,
});

export const BlogComponent: React.FCC<{ props: Pagination }> = ({ props }) => {
  const router = useRouter();

  return (
    <BlogContainer>
      <BlogHeader>Media Hunters Blog</BlogHeader>
      <BlogBannerWrapper>
        <BigTile backgroundImage="https://picsum.photos/600/500">
          <BigTileInnerBox>
            <ReadingTime>
              <FontAwesomeIcon icon={faClock} /> 11 Minut czytania
            </ReadingTime>
            <PostTitle>Digitizing team workflows</PostTitle>
            <ReadMoreWrapper>
              <ReadMoreLink>Czytaj dalej</ReadMoreLink>{" "}
              <ArrowRight></ArrowRight>
            </ReadMoreWrapper>
          </BigTileInnerBox>
        </BigTile>
        <TileWrapper>
          <Tile>
            <TileContent>
              <TileHeader>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                soluta.
              </TileHeader>
              <TileButton>Czytaj więcej</TileButton>
            </TileContent>
            <TitleFooter>
              <p style={{color: '#fff', textShadow: '2px 3px 5px rgba(0,0,0,0.5)'}}>Jason Darley </p>

              <span style={{color: '#fff', textShadow: '2px 3px 5px rgba(0,0,0,0.5)'}}>
                <FontAwesomeIcon icon={faClock} /> 11 Minut czytania
              </span>
            </TitleFooter>
          </Tile>
          <Tile>
            <TileContent>
              <TileHeader>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                soluta.
              </TileHeader>
              <TileButton>Czytaj więcej</TileButton>
            </TileContent>
            <TitleFooter>
              <p style={{color: '#fff', textShadow: '2px 3px 5px rgba(0,0,0,0.5)'}}>Jason Darley </p>
              <span style={{color: '#fff', textShadow: '2px 3px 5px rgba(0,0,0,0.5)'}}>
                <FontAwesomeIcon icon={faClock} color="#817878"/> 11 Minut czytania
              </span>
            </TitleFooter>
          </Tile>
        </TileWrapper>
      </BlogBannerWrapper>
    </BlogContainer>
  );
};

// <BlogContainer>
//   <BlogHeaderWrapper>
//     <BlogHeader>Najnowsze posty</BlogHeader>
//   </BlogHeaderWrapper>
//   {props.data.map((post: BlogPost, idx: number) => (
//     <BlogPostPreview key={idx}>
//       <BlogText>
//         <DateFormatter dateString={post.date} />
//       </BlogText>
//       <BlogPostHeader>{post.title}</BlogPostHeader>
//       <TagsComponent tags={post.tags} />
//       <BlogText className="mb-3">{post.description}</BlogText>
//       <Link href={`${post.collection.slug}/${post.slug}`}>
//         Czytaj więcej →
//       </Link>
//     </BlogPostPreview>
//   ))}
//   {/* <Link href={"/"} style={{alignSelf: 'end', marginTop: '10px'}}>Wszystkie artykuły →</Link> */}

//   <BlogPagination>
//     {Array.from({ length: props.pageCount }, (_, i) => (
//       <BlogPaginationLink
//         key={i}
//         onClick={() => {
//           router.push(`blog?id=${i + 1 === 0 ? "" : i + 1}`);
//         }}
//       >
//         {i + 1}
//       </BlogPaginationLink>
//     ))}
//   </BlogPagination>
// </BlogContainer>
