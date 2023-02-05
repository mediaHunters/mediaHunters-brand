import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const TagContainer = styled.div<{ mainColor: string }>`
  display: flex;
  align-items: center;
  padding: 7px 14px;
  margin: 5px;
  border-radius: 25px;
  background-color: #f2f2f2;
  color: ${(props) => props.mainColor};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  p {
    margin: 0 0 0 5px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px 0 ${(props) => props.mainColor};
  }
`;

const Tag = styled.p`
  font-size: 14px;
  margin-left: 10px;
`;

const TagsComponent: React.FCC<{ tags: string[] | string }> = ({ tags }) => {
  const usedNumbers: number[] = [];
  function generateRandomNumber(): number {
    let randomNumber: number;
    do {
      randomNumber = Math.floor(Math.random() * 10) + 1;
    } while (usedNumbers.includes(randomNumber));
    usedNumbers.push(randomNumber);
    return randomNumber;
  }

  const tagColors = [
    "#009688",
    "#FFC107",
    "#3F51B5",
    "#4CAF50",
    "#E91E63",
    "#9C27B0",
    "#2196F3",
    "#8BC34A",
    "#795548",
    "#607D8B",
  ];

  return (
    <TagsContainer>
      {Array.isArray(tags) ? (
        tags.map((tags: string, idx: number) => (
          <TagContainer mainColor={tagColors[generateRandomNumber()]} key={idx}>
            <FontAwesomeIcon icon={faHashtag} />
            <Tag>eqwewqewq</Tag>
          </TagContainer>
        ))
      ) : (
        <TagContainer mainColor={tagColors[generateRandomNumber()]}>
          <FontAwesomeIcon icon={faHashtag} />
          <Tag>eqwewqewq</Tag>
        </TagContainer>
      )}
    </TagsContainer>
  );
};

export default TagsComponent;
