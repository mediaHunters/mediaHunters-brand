import Image from "next/image";
import BlogPost from "@lib/blog/blog-post";
import styled from "styled-components";


const AuthorContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: 100%;;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AuthorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 20px;
`;

const AuthorName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const PublishDate = styled.p`
  font-size: 14px;
  color: gray;
`;

export const AuthorComponent: React.FC<{ post: BlogPost }> = ({ post }) => {
  const date = new Date(post.date);

  const formattedDate = date.toLocaleDateString("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (

    <AuthorContainerWrapper>
      <AuthorImage
        src={post.author.picture}
        alt={post.image}
        loader={({ src }: { src: string }) => src}
        width={50}
        height={50}
      />
      <AuthorInfoContainer>
        <AuthorName>{post.author.name}</AuthorName>
        <PublishDate>{formattedDate}</PublishDate>
      </AuthorInfoContainer>
    </AuthorContainerWrapper>
  );
};
