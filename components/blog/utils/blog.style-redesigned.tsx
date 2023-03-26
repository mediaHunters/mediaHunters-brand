import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  grid-template-columns: 700px 600px;
  flex-direction: row;
  display: grid;
  justify-content: center;
  grid-gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogHeader = styled.div`
  font-size: 26px;
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

  @media screen and (max-width: 1412px) {
    display: none;
  }
`;

export const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 1412px) {
  flex-direction: row;
  gap: 40px;
  padding: 40px;
  grid-column: 1 / 3;
  }

  @media screen and (max-width: 1412px) {
  flex-direction: column;
  align-items: center;
  }
`;

export const Tile = styled.div<{ backgroundImage: string }>`
  width: 100%;
  min-width: 350px;
  height: 230px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 20px 0;
  filter: grayscale(40%);
  background-image: url(${(props) => props.backgroundImage});
;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
    color: white;
  }

  @media (max-width: 600px) {
    padding: 10px 20px;
    font-size: 0.8em;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    max-width: 400px;
    margin: 10px 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 15px 30px;
    max-width: 600px;
  }
`;

export const TileContent = styled.div``;

export const TileHeader = styled.h3`
  color: #fff;
  font-weight: 400;
  line-height: 1.7;
  font-family: "Lato", sans-serif;
  max-width: 250px;
  font-size: 16px;
  @media screen and (max-width: 763px) {
    font-size: 14px;
  }
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
  padding: 7px 40px;
  margin-top: 10px;
  &:hover {
    transition: all 0.3s ease-out;
    color: black;
    background-color: #fff;
    color: transparent;
  }
`;

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
  font-size: 20px;
  max-width: 260px;
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

export const MainPostContent = styled.div`
  display: grid;
  margin-top: 25px;
  position: relative;
  grid-template-columns: 1.3fr repeat(3, 1fr);
  margin: 20px;
  @media screen and (max-width: 1014px) {
    grid-template-columns: 1fr; 
  }
`;

export const SideColumn = styled.div`
  grid-column: 1;
  @media screen and (max-width: 1014px) {
    display: none;
  }
`;

export const FollowUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FollowUsIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 30px 0;
  * > {
    margin-right: 20px;
  }
`;

export const EditorsPick = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PostPicked = styled.div`
  min-width: 100%;
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: start;
`;

export const PostPickedImage = styled.div<{ backgroundImage: string }>`
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${(props) => props.backgroundImage});
`;

export const PostPickedcontent = styled.div`
  padding: 20px 0 20px 20px;
  width: 200px;
`;

export const PostPickedReadingTime = styled.p`
  font-size: 11px;
  color: #b9b3b3;
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

export const RightColumn = styled.div`
  grid-column: 2 / 6;
`;

export const PostSearchBox = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  gap: 19px;
  @media screen and (max-width: 607px) {
    flex-direction: column;
    height: 100px;
  }

`;

export const PostsWrapper = styled.div`
  grid-column: 2 / 6;
  grid-row: 1 / 3;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  flex-wrap: wrap;
  overflow-y: auto;
  margin: 20px auto 0 auto;
  padding-left: 20px;
  padding-bottom: 20px;
  gap: 20px;
  justify-content: center;
  @media screen and (max-width: 919px) {
  grid-template-columns: 1fr;

  }
  @media screen and (max-width: 500px) {
    padding-left: 0;
  }
`;

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #ededed;
  border: 1px solid #ededed;
  padding: 5px;
  margin-left: 20px;
  @media screen and (max-width: 607px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  margin: 0 5px 0 10px;
  color: #333;
`;

export const StyledTextInput = styled.input`
  color: black;
  padding: 5px;
  outline: none;
  border: none;
  background-color: #ededed;
  &::placeholder {
    font-weight: bold;
    color: #333;
    font-weight: 600;
  }
`;

export const DropdownPositionWrapper = styled.div`
  margin-left:  auto;
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 607px) {
    margin-left: none;
    width: 100%;
  }
`;
