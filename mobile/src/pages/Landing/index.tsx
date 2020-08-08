import React from 'react';

import * as Styled from './styles';

import landingImg from '../../assets/images/landing.png';

function Landing() {
  return (
    <Styled.Container>
      <Styled.Landing source={landingImg} />
      <Styled.Title>
        Seja bem-vindo, {'\n'}
        <Styled.TitleBold>O que deseja fazer?</Styled.TitleBold>
      </Styled.Title>
    </Styled.Container>
  );
}

export default Landing;
