import styled, { keyframes } from "styled-components";
import { lighten } from "polished";

const upndown = keyframes`
    0% {transform: translateY(5px);}
    50% {transform: translateY(15px);}
    100% {transform: translateY(5px);}`;

const smallnbig = keyframes`
    0% {width: 90px;}
    50% {width: 100px;}
    100% {width: 90px;}`;
const shine = keyframes`
    0% {opacity: .2;}
    25% {opacity: .1;}
    50% {opacity: .2;}
    100% {opacity: .2;}`;

export const NotFoundContainerBody = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bittersweet};
`;

export const NotfoundBox = styled.div`
  width: 350px;
  height: 100%;
  max-height: 600px;
  min-height: 450px;
  background: ${(props) => lighten(0.1, props.theme.colors.bittersweet)};
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 50px;
`;

export const NotfoundBoxDescription = styled.div`
  position: absolute;
  bottom: 228px;
  left: 50%;
  transform: translateX(-50%);
`;

export const NotFoundBoxdescriptionContainer = styled.div`
  color: #fff;
  text-align: center;
  width: 200px;
  font-size: 16px;
  margin: 0 auto;
`;

export const NotFoundBoxdescriptionTitle = styled.h1`
  font-size: 24px;
  letter-spacing: 0.5px;
`;

export const NotFoundBoxdescriptionText = styled.p`
  color: ${(props) => lighten(0.1, props.theme.colors.bittersweet)};
  line-height: 20px;
  margin-top: 20px;
  color: #fff;
`;

export const NotFoundButton = styled.a`
  display: block;
  position: relative;
  background: ${(props) => props.theme.colors.bittersweet};
  border: 1px solid transparent;
  border-radius: 50px;
  height: 50px;
  text-align: center;
  text-decoration: none;

  line-height: 50px;
  font-size: 14px;
  padding: 0 20px;
  white-space: nowrap;
  margin-top: 25px;
  transition: background 0.5s ease;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 100px;
    background: $white;
    bottom: -25px;
    left: 0;
    border: 2px solid #fff;
    transform: translateX(-50px) rotate(45deg);
    transition: transform 0.5s ease;
  }

  &:hover {
    background: transparent;
    border-color: #fff;

    &:before {
      transform: translateX(250px) rotate(45deg);
    }
  }
  &:link,
  &:visited {
    color: #fff;
  }
`;

export const NotFoundGhostBox = styled.div`
  padding: 15px 25px 25px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
`;

export const Symbol = styled.div`
  &:nth-child(1) {
    opacity: 0.2;
    animation: ${shine} 4s ease-in-out 3s infinite;

    &:before,
    &:after {
      content: "";
      width: 12px;
      height: 4px;
      background: #fff;
      position: absolute;
      border-radius: 5px;
      bottom: 65px;
      left: 0;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
  &:nth-child(2) {
    position: absolute;
    left: -5px;
    top: 30px;
    height: 18px;
    width: 18px;
    border: 4px solid;
    border-radius: 50%;
    border-color: #fff;
    opacity: 0.2;
    animation: ${shine} 4s ease-in-out 1.3s infinite;
  }
  &:nth-child(3) {
    opacity: 0.2;
    animation: ${shine} 3s ease-in-out 0.5s infinite;

    &:before,
    &:after {
      content: "";
      width: 12px;
      height: 4px;
      background: #fff;
      position: absolute;
      border-radius: 5px;
      top: 5px;
      left: 40px;
    }
    &:before {
      transform: rotate(90deg);
    }
    &:after {
      transform: rotate(180deg);
    }
  }
  &:nth-child(4) {
    opacity: 0.2;
    animation: ${shine} 6s ease-in-out 1.6s infinite;

    &:before,
    &:after {
      content: "";
      width: 15px;
      height: 4px;
      background: #fff;
      position: absolute;
      border-radius: 5px;
      top: 10px;
      right: 30px;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
  &:nth-child(5) {
    position: absolute;
    right: 5px;
    top: 40px;
    height: 12px;
    width: 12px;
    border: 3px solid;
    border-radius: 50%;
    border-color: #fff;
    opacity: 0.2;
    animation: ${shine} 1.7s ease-in-out 7s infinite;
  }
  &:nth-child(6) {
    opacity: 0.2;
    animation: ${shine} 2s ease-in-out 6s infinite;

    &:before,
    &:after {
      content: "";
      width: 15px;
      height: 4px;
      background: #fff;
      position: absolute;
      border-radius: 5px;
      bottom: 65px;
      right: -5px;
    }
    &:before {
      transform: rotate(90deg);
    }
    &:after {
      transform: rotate(180deg);
    }
  }
`;

export const BoxGhostContainer = styled.div`
  background: #fff;
  width: 100px;
  height: 100px;
  border-radius: 100px 100px 0 0;
  position: relative;
  margin: 0 auto;
  animation: ${upndown} 3s ease-in-out infinite;
`;

export const GhostEyes = styled.div`
  position: absolute;
  left: 15%;
  top: 30%;
  height: 12px;
  width: 70px;
`;

export const GhostEyeLeft = styled.div`
  background: ${(props) => props.theme.colors.bittersweet};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 10px;
  position: absolute;
  left: 0;
`;

export const GhostEyeRight = styled.div`
  background: ${(props) => props.theme.colors.bittersweet};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 10px;
  position: absolute;
  right: 0;
`;

export const Ghostbottom = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
`;

export const GhostBottomDot = styled.div`
  flex-grow: 1;
  position: relative;
  top: -10px;
  height: 20px;
  border-radius: 100%;
  background-color: #fff;

  &:nth-child(2n) {
    top: -12px;
    margin: 0 -0px;
    border-top: 15px solid
      ${(props) => lighten(0.1, props.theme.colors.bittersweet)};
    background: transparent;
  }
`;

export const GhostShadow = styled.div`
  position: absolute;
  bottom: 0;
  height: 20px;
  box-shadow: 0 50px 15px 5px ${(props) => props.theme.colors.bittersweet};
  border-radius: 50%;
  margin: 0 auto;
  animation: ${smallnbig} 3s ease-in-out infinite;
`;
