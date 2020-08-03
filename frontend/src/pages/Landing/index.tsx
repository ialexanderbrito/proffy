import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import * as Styled from './styles';

function Landing() {
  return (
    <Styled.PageLanding>
      <Styled.PageLandingContent id="landing-content" className="container">
        <Styled.LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </Styled.LogoContainer>

        <img
          src={LandingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <Styled.ButtonsContainer>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </Styled.ButtonsContainer>

        <Styled.TotalConnections>
          Total de 200 conexões já realizadas{' '}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </Styled.TotalConnections>
      </Styled.PageLandingContent>
    </Styled.PageLanding>
  );
}

export default Landing;
