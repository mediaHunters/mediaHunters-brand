import {
  BoxGhostContainer,
  Ghostbottom,
  GhostBottomDot,
  GhostEyeLeft,
  GhostEyeRight,
  GhostEyes,
  GhostShadow,
  NotfoundBox,
  NotfoundBoxDescription,
  NotFoundBoxdescriptionContainer,
  NotFoundBoxdescriptionText,
  NotFoundBoxdescriptionTitle,
  NotFoundButton,
  NotFoundContainerBody,
  NotFoundGhostBox,
  Symbol,
} from "./404.style";

const NotFoundComponent = () => {
  return (
    <NotFoundContainerBody>
      <NotfoundBox>
        <NotFoundGhostBox>
          <Symbol />
          <Symbol />
          <Symbol />
          <Symbol />
          <Symbol />
          <Symbol />

          <BoxGhostContainer>
            <GhostEyes>
              <GhostEyeLeft />
              <GhostEyeRight />
            </GhostEyes>

            <Ghostbottom>
              <GhostBottomDot />
              <GhostBottomDot />
              <GhostBottomDot />
              <GhostBottomDot />
              <GhostBottomDot />
            </Ghostbottom>

            <GhostShadow />
          </BoxGhostContainer>
        </NotFoundGhostBox>
      </NotfoundBox>
      <NotfoundBoxDescription>
        <NotFoundBoxdescriptionContainer>
          <NotFoundBoxdescriptionTitle>Ups!</NotFoundBoxdescriptionTitle>
          <NotFoundBoxdescriptionText>
          Wygląda na to, że nie mogliśmy znaleźć strony, której szukałeś
          </NotFoundBoxdescriptionText>

          <NotFoundButton href="/" target="_blank" >Powrót do strony głównej</NotFoundButton>
        </NotFoundBoxdescriptionContainer>
      </NotfoundBoxDescription>
    </NotFoundContainerBody>
  );
};

export default NotFoundComponent;
