import Image from 'next/image';
import styled from 'styled-components';

// opt-out of image optimization, no-op
const customLoader = ({ src }: {src: string}) => src
const ImageComponent = styled(Image)`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;

@media (max-width: 768px) {
    height: 200px;
}
`

type Props = {
  title: string;
  src: string;
  preloadImage?: boolean;
  width?: number;
  height?: number;
  className?: string;
};

const PostImage = ({
  title,
  src,
  width,
  height,
  preloadImage,
}: Props) => {
  return (
    <ImageComponent
      src={src}
      priority={preloadImage}
      alt={`Cover Image for ${title}`}
      width={width ?? 1000}
      height={height ?? 300}
    />
  );
};

export default PostImage;
