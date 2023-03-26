import DateFormatter from "@components/blog/utils/DateFormatter";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  min-width: 400px;
  max-width: 400px;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    min-width: 300px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Tag = styled.span`
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Content = styled.div`
  margin-top: 10px;
  padding: 20px;
`;

const Text = styled.p`
  margin-bottom: 8px;
`;

const DateLine = styled.div`
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
  font-size: 11px;
`;

const AuthorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: #333;
  font-size: 12px;
`;

interface BlogCardProps {
  tag: string;
  author: string;
  title: string;
  readingTime: number;
  date: string;
  imageUrl: string;
  href: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  tag,
  author,
  title,
  readingTime,
  date,
  imageUrl,
  href
}) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={imageUrl} alt={title} />
        <Tag>{tag}</Tag>
      </ImageWrapper>
      <Content>
        <Text><a href={href}>{title}</a></Text>
        <DateLine>{DateFormatter({dateString: date})}</DateLine>
        <AuthorInfo>
          <span>Author: {author}</span>
          <span> {readingTime} minut Czytania</span>
        </AuthorInfo>
      </Content>
    </CardWrapper>
  );
};

export default BlogCard;