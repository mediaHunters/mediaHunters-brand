import styled from "styled-components";

export const BlogContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    .container {
      max-width: 720px;
      padding: 10px;
    }
  }
`;

export const BlogBannerWrapper = styled.div`
  grid-template-columns: 700px 500px;
  flex-direction: row;
  display: grid;
  justify-content: center;
  grid-gap: 50px;
`;

export const BlogHeader = styled.div`
  font-size: 30px;
  font-family: "Lato", sans-serif;
  text-transform: Capitalize;
  font-weight: 600;
  position: relative;
  max-width: max-content;

  &:after {
    content: "";
    width: 60%;
    right: -40%;
    top: 50%;
    height: 1px;
    background-color: #b9b3b3;
    transform: translate(50%);
    position: absolute;
  }

  @media screen and (max-width: 1024px) {
    font-size: 26px;
  }

  @media screen and (max-width: 768px) {
    font-size: 22px;

    &:after {
      width: 50%;
      right: -30%;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;

    &:after {
      display: none;
    }
  }
`;

export const BigTile = styled.div<{ backgroundImage: string }>`
  width: 700px;
  height: 500px;
  position: relative;
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 20px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1024px) {
    width: 600px;
    height: 500px;
  }

  @media screen and (max-width: 768px) {
    width: 500px;
    height: 400px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 300px;
    margin-right: 0;
  }
`;

export const TileWrapper = styled.div`
  display: grid;
  flex-direction: column;
  width: 100%;
`;

export const Tile = styled.div`
  width: 500px;
  height: 230px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 20px 0;
  filter: grayscale(40%);
  background-image: url("https://picsum.photos/400/250");
`;

export const TileContent = styled.div``;

export const TileHeader = styled.h3`
  color: #fff;
  font-weight: 400;
  line-height: 1.7;
  font-family: "Lato", sans-serif;
  max-width: 250px;
  font-size: 16px;
`;

export const TitleFooter = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;

`;

export const TileButton = styled.button`
  border: 1px solid #fff;
  color: #fff;
  background-color: transparent;
  padding: 10px 60px;
`

export const BigTileInnerBox = styled.div`
  width: 400px;
  height: 200px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 350px;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ArrowRight = styled.div`
  position: relative;
  width: 102px;
  height: 2px;
  right: -100px;
  background-color: #333;
  top: -12px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    right: 0;
    border-style: solid;
  }

  &::before {
    border-width: 5px 0 5px 10px;
    border-color: transparent transparent transparent #333;
    top: -5px;
  }

  &::after {
    border-width: 5px 0 5px 10px;
    border-color: transparent transparent transparent #333;
    top: -3px;
  }

  @media screen and (max-width: 1024px) {
    width: 82px;
    right: -120px;
  }

  @media screen and (max-width: 768px) {
    width: 62px;
    right: -103px;
  }

  @media screen and (max-width: 480px) {
    width: 70px;
    right: -80px;
    top: -9px;
  }
`;

export const ReadingTime = styled.p`
  font-size: 11px;

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const PostTitle = styled.h1`
  font-size: 24px;
  max-width: 170px;
  line-height: 35px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    max-width: 150px;
    line-height: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    max-width: 130px;
    line-height: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    max-width: 100%;
    line-height: 22px;
  }
`;

export const ReadMoreWrapper = styled.span`
  margin-top: auto;
  cursor: pointer;
  &:hover {
    ${ArrowRight} {
      transform: translateX(20%);
      transition: transform 0.3s ease;
    }
  }
`;

export const ReadMoreLink = styled.a``;
