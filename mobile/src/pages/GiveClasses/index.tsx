import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import bgImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <Styled.Container>
      <Styled.Background resizeMode="contain" source={bgImage}>
        <Styled.Title>Quer ser um Proffy?</Styled.Title>
        <Styled.Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Styled.Description>
      </Styled.Background>

      <Styled.OkButton onPress={handleNavigateBack}>
        <Styled.OkButtonText>Tudo bem</Styled.OkButtonText>
      </Styled.OkButton>
    </Styled.Container>
  );
}

export default GiveClasses;
