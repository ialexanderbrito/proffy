import React from 'react';

import * as Styled from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
  return (
    <Styled.Container>
      <Styled.Landing source={landingImg} />
      <Styled.Title>
        Seja bem-vindo, {'\n'}
        <Styled.TitleBold>O que deseja fazer?</Styled.TitleBold>
      </Styled.Title>
      <Styled.ButtonsContainer>
        <Styled.ButtonPrimary>
          <Styled.Study source={studyIcon} />
          <Styled.ButtonText>Estudar</Styled.ButtonText>
        </Styled.ButtonPrimary>

        <Styled.ButtonSecondary>
          <Styled.Study source={giveClassesIcon} />
          <Styled.ButtonText>Dar aulas</Styled.ButtonText>
        </Styled.ButtonSecondary>
      </Styled.ButtonsContainer>

      <Styled.TotalConnections>
        Total de 285 conexões já realizadas. <Styled.Heart source={heartIcon} />
      </Styled.TotalConnections>
    </Styled.Container>
  );
}

export default Landing;
