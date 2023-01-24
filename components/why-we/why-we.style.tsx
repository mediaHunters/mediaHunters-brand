import styled from "styled-components";

export const AboutUs = styled.section`
  position: relative;
  z-index: 1;
  background: url("/images/dark-bg.png") no-repeat;
  background-position: center;
  background-size: cover;
  padding: 120px 0;
  text-align: center;
`;
export const AboutUsTop = styled.div`
  margin-bottom: 120px;
`;

export const AboutUsSectionTitle = styled.h2`
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.white};
  font-size: 26px;
`;

export const AboutUsSectionParagaph = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  margin-bottom: 60px;
`;

export const AboutUsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 30px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1024px) {
    padding: 0;
  }
`;

export const AboutCard = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.1);

  @media (min-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const AboutCardIcon = styled.div`
  color: ${(props) => props.theme.colors.bittersweet};
  font-size: 45px;
  width: max-content;
  margin-inline: auto;
  margin-bottom: 15px;
`;

export const AboutCardTitle = styled.h3`
  font-weight: 600;
  line-height: 1.3;
  font-size: 22px;
`;

export const AboutCardText = styled.p`
  color: hsl(180, 3%, 28%);
  @media (min-width: 1024px) {
    max-width: 650px;
    margin-inline: auto;
  }
`;

export const TimelineContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`;

export const TimelineWrapper = styled.div`
  width: 80%;
  font-size: 16px;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  @media only screen and (min-width: 768px) {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 51.2%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background-color: hsl(240, 9%, 53%);;
    }
  }
`;

export const TimeLlineList = styled.ul`
  list-style: none;
`;

export const TimeLlineElement = styled.li`
  padding: 20px;
  background-color: $bittersweet;
  color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
      position: relative;
      margin-bottom: 50px;
      z-index: 1000;
      background-color: ${(props) => props.theme.colors.bittersweet};
    &:nth-child(odd) {
      float: left;
      clear: right;
      transform: translateX(-30px);
      border-radius: 20px 0px 20px 20px;
    }

    &:nth-child(even) {
      float: right;
      clear: left;
      transform: translateX(30px);
      border-radius: 0px 20px 20px 20px;
    }

    &::after {
      content: "";
      position: absolute;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.white};
      top: 0px;
    }

    &:nth-child(odd)::after {
      transform: translate(50%, -50%);
      right: -30px;
    }

    &:nth-child(even)::after {
      transform: translate(-50%, -50%);
      left: -30px;
    }

    &:hover::after {
      background-color: ${(props) => props.theme.colors.bittersweet};
    }
  }
`;

export const TimelineHeader = styled.h3`
        font-weight: 500;
        font-size: 25px;
        line-height: 30px;
        margin-bottom: 10px;
`

export const TimelineContent = styled.p`
        font-size: 16px;
        line-height: 30px;
        font-weight: 300;
`
