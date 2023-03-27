import Link from "next/link";
import router from "next/router";
import {
  BlogPagination,
  BlogPaginationLink,
} from "@components/blog/blog.styles";
import BlogCard from "@components/blog/card/card.component";
import Author from "@components/blog/utils/Author";
import {
  ArrowRight,
  BigTile,
  BigTileInnerBox,
  BlogBannerWrapper,
  BlogContainer,
  BlogHeader,
  DropdownPositionWrapper,
  EditorsPick,
  FollowUs,
  FollowUsIconsWrapper,
  MainPostContent,
  PostPicked,
  PostPickedcontent,
  PostPickedImage,
  PostPickedReadingTime,
  PostSearchBox,
  PostsWrapper,
  PostTitle,
  ReadingTime,
  ReadMoreLink,
  ReadMoreWrapper,
  RightColumn,
  SideColumn,
  StyledIcon,
  StyledInput,
  StyledTextInput,
  Tile,
  TileButton,
  TileContent,
  TileHeader,
  TileWrapper,
  TitleFooter,
} from "@components/blog/utils/blog.style-redesigned";
import Dropdown from "@components/form/dropdown";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faClock, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogPost from "@lib/blog/blog-post";
import axios from "axios";

import { ChangeEvent, useEffect, useState } from "react";

import { Pagination } from "../../interfaces/pagination";

export const BlogComponent: React.FCC<{ props: Pagination }> = ({
  props: { data, pageCount, categories, showOffPosts },
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [postsState, setPostsState] = useState<BlogPost[]>([]);
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [showOffValue, setShowOffValue] = useState<any>(null);
  const [pageCountValue, setPageCountValue] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    setShowOffValue(showOffPosts);
  }, [showOffPosts]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/paginated", {
          params: {
            collection: selectedCategory,
          },
        });
        setPostsState(data.data);
        setPageCountValue(data.pageCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    setPageCountValue(pageCount);
  }, [pageCount]);

  useEffect(() => {
    setPostsState(data);
  }, [data]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 607px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (e: any) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/paginated", {
          params: {
            pageSize: 100,
            searchValue: searchInputValue && searchInputValue,
            collection: selectedCategory ? selectedCategory : undefined,
          },
        });
        setPostsState(data.data);
        setPageCountValue(data.pageCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchInputValue]);

  function moveToNextPage(idx: number): void {
    const queryParams = router.query;

    const newQueryParams = { ...queryParams, idx: idx.toString() };

    const queryStr = new URLSearchParams(newQueryParams).toString();

    router.push(`/blog?${queryStr}`);
  }

  async function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchInputValue(event.target.value);
  }

  return (
    <BlogContainer>
      <BlogHeader style={{ margin: "20px 30px" }}>
        Media Hunters Blog
      </BlogHeader>
      <BlogBannerWrapper>
        {showOffValue && (
          <BigTile backgroundImage={showOffValue.PrimePost.image}>
            <BigTileInnerBox>
              <ReadingTime>
                <FontAwesomeIcon icon={faClock} />
                <span style={{ marginLeft: "5px" }}>
                  {showOffValue.PrimePost.readingTime} Minut czytania
                </span>
              </ReadingTime>
              <PostTitle>{showOffValue.PrimePost.title}</PostTitle>
              <ReadMoreWrapper>
                <ReadMoreLink
                  href={`${showOffValue.PrimePost.collection.slug}/${showOffValue.PrimePost.slug}`}
                >
                  Czytaj dalej
                </ReadMoreLink>
                <ArrowRight></ArrowRight>
              </ReadMoreWrapper>
            </BigTileInnerBox>
          </BigTile>
        )}

        <TileWrapper>
          {showOffValue &&
            showOffValue.SubPosts.map((post: any) => {
              return (
                <Tile key={post.title} backgroundImage={post.image}>
                  <TileContent>
                    <TileHeader>{post.title}</TileHeader>
                    <TileButton>
                      <Link
                        href={`${post.collection.slug}/${post.slug}`}
                        style={{ color: "#fff" }}
                      >
                        Czytaj więcej
                      </Link>
                    </TileButton>
                  </TileContent>
                  <TitleFooter>
                    <p
                      style={{
                        color: "#fff",
                        textShadow: "2px 3px 5px rgba(0,0,0,0.5)",
                        fontSize: "12px",
                      }}
                    >
                      {post.author.name}
                    </p>

                    <span
                      style={{
                        color: "#fff",
                        textShadow: "2px 3px 5px rgba(0,0,0,0.5)",
                        fontSize: "12px",
                      }}
                    >
                      <FontAwesomeIcon icon={faClock} />{" "}
                      <span style={{ marginLeft: "5px" }}>
                        {post.readingTime} Minuta czytania
                      </span>
                    </span>
                  </TitleFooter>
                </Tile>
              );
            })}
        </TileWrapper>
      </BlogBannerWrapper>
      <MainPostContent>
        <SideColumn style={{ position: "relative" }}>
          <FollowUs>
            <h2 style={{ fontSize: "26px" }}>Śledź nas na</h2>
            <FollowUsIconsWrapper>
              <Link
                href={"https://www.facebook.com/profile.php?id=100089741575460"}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{
                    marginRight: "20px",
                    fontSize: "26px",
                    cursor: "pointer",
                  }}
                />
              </Link>
              <Link
                href={"https://www.instagram.com/mediahuntersco/"}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{
                    marginRight: "20px",
                    fontSize: "26px",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </FollowUsIconsWrapper>
          </FollowUs>
          <EditorsPick>
            <BlogHeader>Wybór redaktora</BlogHeader>
            {showOffValue &&
              showOffValue.redactorChoice.map((post: BlogPost) => (
                <PostPicked key={post.title}>
                  <PostPickedImage backgroundImage={post.image} />
                  <PostPickedcontent>
                    <Link
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#333",
                      }}
                      href={`${post.collection.slug}/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                    <PostPickedReadingTime>
                      { post.author.name}
                      | {post.readingTime} Min. czytania
                    </PostPickedReadingTime>
                  </PostPickedcontent>
                </PostPicked>
              ))}
          </EditorsPick>
        </SideColumn>

        <RightColumn>
          <PostSearchBox>
            <StyledInput>
              <StyledIcon icon={faSearch} />
              <StyledTextInput
                type="text"
                placeholder="Search"
                value={searchInputValue}
                onChange={handleSearchInputChange}
              />
            </StyledInput>
            <DropdownPositionWrapper>
              {isMobile ? null : <p style={{ fontWeight: 500 }}>Filtruj wg:</p>}
              <Dropdown
                options={[...categories]}
                onSelect={(value) => {
                  setSelectedCategory(value);
                }}
              ></Dropdown>
            </DropdownPositionWrapper>
          </PostSearchBox>

          <PostsWrapper>
            {Array.isArray(postsState) &&
              postsState.map((post: BlogPost, idx: number) => {
                return (
                  <BlogCard
                    key={idx}
                    tag={post.tags[0]}
                    author={post.author.name}
                    title={post.title}
                    readingTime={post.readingTime}
                    date={post.date}
                    imageUrl={post.image}
                    href={`${post.collection.slug}/${post.slug}`}

                  />
                );
              })}
          </PostsWrapper>

          {/* <BlogPagination>
            {!searchInputValue &&
              Array.from({ length: pageCountValue }, (_, i) => (
                <BlogPaginationLink key={i} onClick={() => moveToNextPage(i)}>
                  {i + 1}
                </BlogPaginationLink>
              ))}
          </BlogPagination> */}
        </RightColumn>
      </MainPostContent>
    </BlogContainer>
  );
};
